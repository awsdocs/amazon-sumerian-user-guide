/* Creates a quad entity and add it to the world.
   Stores a reference to the quad in context and delete it
   when playback stops.
*/

'use strict';

function setup(args, ctx) { 
  const quadMesh = new sumerian.Quad(10,10,1,2,3);
  const material = new sumerian.Material(sumerian.ShaderLib.texturedLit);

  ctx.quad = ctx.world.createEntity(quadMesh, material, 'quad');
  ctx.quad.addToWorld();
  ctx.quad.addRotation([-Math.PI/2,0,0]);
}

function cleanup(args, ctx) {
  ctx.quad.removeFromWorld();
}
