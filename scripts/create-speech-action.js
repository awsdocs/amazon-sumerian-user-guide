/* State machine script action.

   Changes the content of a speech to include a username stored in
   the entity context, plays the speech, and signals success.

   Assign this script to a state machine behavior with the "execute
   script" action. The enter function is called when the state is
   entered. ctx.transitions.success signals that the action
   completed successfully and transitions to the next state.

   Add a speech component to the entity. Set ctx.entityData.username
   in a setup script on the same entity, or a previous action on the
   same state machine behavior.
*/

'use strict';

function enter(args, ctx) {
  var body = "Hello " + ctx.entityData.username;
  ctx.entity.speechComponent.speeches[0].updateConfig({entity: ctx.entity, name: ctx.entityData.username, type: "text", voice: "Russell", body: body});
  ctx.entity.speechComponent.speeches[0].play();
  ctx.transitions.success();
};

function exit(args, ctx) {
}

var parameters = [];
