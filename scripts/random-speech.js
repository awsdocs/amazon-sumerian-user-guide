/* Plays a random speech from the list of speeches attached
   to the entity's speech component.
*/

'use strict';

var setup = function(args, ctx) {
  sumerian.SystemBus.addListener('aws.sdkReady',
    () => {
      var speechComponent = ctx.entity.getComponent("speechComponent");
      var speeches = speechComponent.speeches;
      var speech = speeches[Math.floor(Math.random() * speeches.length)];
      speech.play();
      },
      true
  );
};
  