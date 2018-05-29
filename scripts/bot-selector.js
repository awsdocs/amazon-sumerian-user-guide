/* Adds a function to the entity context that changes the in-use Amazon Lex bot
   by modifying the dialogue component configuration on the same entity.
   The function takes a click event and retrieves the new chatbot name and
   alias from the entity that the user clicks.

   Attaches an event listener to two HTML buttons from an HTML entity in the
   scene with the following content:

   <button id="bot1button" botname="OrderFlowers" botalias="latest" type="button">Order Flowers</button>
   <button id="bot2button" botname="BookTrip" botalias="latest" type="button">Book Trip</button>
*/

'use strict';

function setup(args, ctx) {
  ctx.entityData.changeBot = function(event){
    var name = event.target.getAttribute("botname");
    var alias = event.target.getAttribute("botalias");
    console.log(name);
    ctx.entity.dialogueComponent.updateConfig({name: name, alias: alias})
  };
  document.getElementById("bot1button").addEventListener('click', ctx.entityData.changeBot);
  document.getElementById("bot2button").addEventListener('click', ctx.entityData.changeBot);
}
