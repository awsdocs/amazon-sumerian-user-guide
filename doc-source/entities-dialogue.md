# Amazon Sumerian Dialogue Component<a name="entities-dialogue"></a>

The dialogue component assigns an Amazon Lex chatbot to an entity\. You can use this component to enable a [host](entities-host.md) or other entity to converse with a user and collect information\.

To use Amazon Lex during playback, the scene needs AWS credentials from Amazon Cognito Identity\. [Create an identity pool](sumerian-permissions.md) for your scene, and configure it under [AWS configuration](scene-aws.md) in the scene settings\.

![\[\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/components-dialogue.png)

**Properties**
+ **Name** – The name of the Amazon Lex bot\.
+ **Alias** – The alias that you choose when you publish the bot\.

To trigger dialogue during playback, use a state machine or script component on the same entity\.

## State Machine<a name="entities-dialogue-statemachine"></a>

To use an Amazon Lex bot, add a [state machine](entities-statemachine.md) to an entity with dialogue and [speech](entities-speech.md) components\. Use actions to capture audio or text, send it to Amazon Lex for processing, play the response, and wait for additional input\.

**Example States for text input**  
+ **Initialize** – **AWS SDK ready** waits for the AWS SDK for JavaScript to retrieve credentials from your Amazon Cognito identity pool\.
+ **Collect text** – A **Get HTML text** action that retrieves the contents of the `input` element in an HTML component\.
  + **Entity** – An HTML element with an `input` element\.
  + **HTML element selector** – The ID of the `input` element\. For example, **\#myTagId**\.
+ **Send to bot** – **Send text input to dialogue bot** sends the text from the previous state to your Amazon Lex bot and relays the response to the next state\.

  Transition **On response ready** to `Play response`, and **On processing error** to `Collect text`\.
+ **Play response** – **Start speech** plays the response from Amazon Lex\. Transition to `Collect text`\.
  + **Use Lex response** – Enabled\.

![\[\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/components-dialogue-state-text.png)

**Example States for audio input**  
+ **Initialize** – **AWS SDK ready** waits for the AWS SDK for JavaScript to retrieve credentials from your Amazon Cognito identity pool\.
+ **Record \(1\)** – **Key down** waits for the user to press a key\.
+ **Record \(2\)** – **Start microphone recording** records audio and **Key up** waits for the user to release the key\.
+ **Record \(3\)** – **Stop microphone recording** completes the audio recording and passes it to the next state\.
+ **Send to bot** – **Send audio input to dialogue bot** sends the audio from the previous state to an Amazon Lex bot\.
+ **Play response** – **Start speech** plays the audio response from the previous state\. Transition to **Wait**\.

![\[\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/components-dialogue-state-audio.png)

For more information, see [AWS Feature State Machine Actions in Amazon Sumerian](statemachines-aws.md)\.

## Script<a name="entities-dialogue-script"></a>

You can use a script to update the configuration of an entity's dialogue component in response to user input\. The following example adds a listener to two buttons to change the active bot when a button is clicked\.

**Example Script – Add Event Listener to Buttons**  
+ **Entity** – Host or other entity with a dialogue component\.

```
'use strict';

function setup(args, ctx) {
  ctx.entityData.changeBot = function(event){
    var name = event.target.getAttribute("botname");
    var alias = event.target.getAttribute("botalias");
    ctx.entity.dialogueComponent.updateConfig({name: name, alias: alias})
  };
  document.getElementById("bot1button").addEventListener('click', ctx.entityData.changeBot);
  document.getElementById("bot2button").addEventListener('click', ctx.entityData.changeBot);
}
```

**Example HTML 3D component – Buttons**  

```
 <style>
  button {
    background-color: #4CAF50;
    border: none;  
    color: white;
    padding: 15px 25px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
  }

  button:hover {
    background-color: green;
  }
 </style>

<button id="bot1button" botname="OrderFlowers" botalias="latest" type="button">Order Flowers</button>
<button id="bot2button" botname="BookTrip" botalias="latest" type="button">Book Trip</button>
```