/* Creates a sphere entity and add it to the world.
   Stores a reference to the sphere in context and delete it
   when playback stops.
*/

'use strict';

function setup(args, ctx) {
  const polarSphereMeshData = new sumerian.Sphere(32, 32, 0.5, sumerian.Sphere.TextureModes.Polar);
  const material = new sumerian.Material(sumerian.ShaderLib.texturedLit);

  ctx.sphere = ctx.world.createEntity(polarSphereMeshData, material, 'Polar', [0, 1, 2]);
  ctx.sphere.addToWorld();
}

function cleanup(args, ctx) {
  ctx.sphere.removeFromWorld();
}
