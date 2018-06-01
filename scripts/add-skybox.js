/* Adds functions to the world context that-
     - Enumerate skybox textures stored in Amazon S3
     - Choose a texture at random
     - Get a presigned URL to download the texture
     - Create a skybox entity with the texture URL
     - Add the skybox to the world

   Gets bucket name and prefix from script parameters. Call
   ctx.worldData.changeSkybox from a state machine script
   action or event handler to change the skybox during playback.
*/

'use strict';

function setup(args, ctx) {
  ctx.worldData.listobjects = function(bucket, prefix) {
    var keys = [];
    return new Promise(function(resolve, reject) {
      sumerian.SystemBus.addListener('aws.sdkReady', () => {
        ctx.worldData.s3client = new AWS.S3();
        ctx.worldData.s3client.listObjectsV2({ Bucket: bucket, Prefix: prefix }, function(err, data) {
          if (err) {
            reject(err);
          } else {
            var i;
            for ( i in data.Contents) {
              keys[i] = data.Contents[i].Key;
            }
            resolve(keys);
          }
        });
      }, true);
    });
  }
  
  ctx.worldData.getRandomPsu = function(keys, bucket){
    const url = ctx.worldData.s3client.getSignedUrl('getObject', {
      Bucket: bucket,
      Key: keys[Math.floor(Math.random()*keys.length)],
      Expires: 600
    })
    return url;
  }

  ctx.worldData.changeSkybox = function() {
    // remove existing skybox
    if ( typeof ctx.worldData.skysphere != "undefined" ) {
      ctx.worldData.skysphere.removeFromWorld();
    }
    // get psu for random key
    const url = ctx.worldData.getRandomPsu( ctx.worldData.skyboxkeys, ctx.worldData.skyboxbucket );
    // add skybox
    const skybox = new sumerian.Skybox(sumerian.Skybox.SPHERE, url, null, 0, false);
    ctx.worldData.skysphere = ctx.world.createEntity(skybox.transform, skybox.materials[0], skybox.meshData);
    ctx.worldData.skysphere.addToWorld();
  }

  ctx.worldData.skyboxbucket = args.bucket;
  ctx.worldData.prefix = args.prefix;
  ctx.worldData.skyboxkeys = [];

  var promise = ctx.worldData.listobjects(args.bucket, args.prefix);
  promise.then( function(keys){
    ctx.worldData.skyboxkeys = keys;
    ctx.worldData.changeSkybox()
  });
}
  
// Called when play mode stops.
//
function cleanup(args, ctx) {
  ctx.worldData.skysphere.removeFromWorld();
}

// Defines script parameters.
//
var parameters = [
  {
    name : "Bucket",
    key : "bucket",
    type : "string"
  },
  {
    name : "Prefix",
    key : "prefix",
    type : "string"
  }
];