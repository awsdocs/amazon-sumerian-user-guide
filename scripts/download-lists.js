/* Downloads lists of strings from an Amazon S3 bucket.
   Concatenates all of the objects into a single list and store
   in the world context.
   Gets bucket name and prefix from script parameters.
*/

'use strict';

function setup(args, ctx) {
  ctx.worldData.list = [];
  ctx.worldData.listbucket = args.bucket;
  ctx.worldData.listprefix = args.prefix;
  sumerian.SystemBus.addListener('aws.sdkReady', () => {
    ctx.worldData.s3client = new AWS.S3();
    ctx.worldData.s3client.listObjectsV2({Bucket: ctx.worldData.listbucket, Prefix: ctx.worldData.listprefix}, function(err, data) {
      if (err) {
        console.log('ERROR', err, data);
      } else {
        var i;
        // store keys
        for ( i in data.Contents) {
          console.log(data.Contents[i].Key);
          // download files
          ctx.worldData.s3client.getObject({Bucket: ctx.worldData.listbucket, Key: data.Contents[i].Key}, function(err, data) {
            if (err) {
              console.log('ERROR', err, data);
            } else {
              console.log(data);
              ctx.worldData.list = ctx.worldData.list.concat(data.Body.toString().split('\n'));
              console.log(ctx.worldData.list);
            }
          })
        }
      }
    });
    }, true
    );
}

// Called when play mode stops.
//
function cleanup(args, ctx) {
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