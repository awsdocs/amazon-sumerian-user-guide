/* State machine script action.
   
   Hides or shows an entity in the scene when the state is entered.
   Takes an entity reference and action as script parameters.
   Calls ctx.transitions.success to transition to the next state.
*/

'use strict';

function enter(args, ctx) {
  if ( args.select == 'hide' ){
    args.entity.hide();
  } else {
    args.entity.show();
  }
  ctx.transitions.success();
}

function exit(args, ctx) {
}

var parameters = [
  {type: 'entity', key: 'entity', description: 'Entity drop area'},
  {type: 'string', control: 'select', key: 'select', 'default': 'hide', options: ['hide', 'show'], description: 'action'},
];
