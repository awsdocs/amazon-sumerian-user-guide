# Amazon Sumerian Speech Component<a name="entities-speech"></a>

The speech component assigns text to an entity for playback with Amazon Polly\. You assign text to an entity, and play the audio output from Amazon Polly with a state machine or script\. The scene calls Amazon Polly at runtime to generate the audio\.

To use Amazon Polly during playback, the scene needs AWS credentials from Amazon Cognito Identity\. [Create an identity pool](sumerian-permissions.md) for your scene, and configure it under [AWS configuration](scene-aws.md) in the scene settings\.

![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/components-speech.png)

**Properties**
+ **3D audio** – Adjust the volume of the speech audio based on the distance of the entity from the camera\.
+ **Voice** – An [Amazon Polly voice](https://docs.aws.amazon.com/polly/latest/dg/voicelist.html)\.
+ **Volume** – Volume of the speech audio\.
+ **Speech files** – Drop text files here to add them to the component\. Click ![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/components-speech-addgestures.png) to mark up a speech file with gestures\.
+ **Gesture map** – A document that maps gestures to words\. When you mark up a speech file, the editor uses this mapping to determine where to add gestures\. You can modify the gesture map using [text editor](editor-tools.md#editor-tools-texteditor)\.

To trigger a speech during playback, use a state machine or script component on the same entity\.

## State Machine<a name="entities-speech-statemachine"></a>

To play a speech, add a [state machine](entities-statemachine.md) to the entity with the speech component\. Add a state with **AWS SDK ready** and **Start speech** actions\.

![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/components-speech-state.png)

For more information, see [AWS Feature State Machine Actions in Amazon Sumerian](statemachines-aws.md)\.

## Script<a name="entities-speech-script"></a>

To play a speech, get a reference to the [speech component](https://content.sumerian.amazonaws.com/engine/latest/docs/SpeechComponent.html) from the context object\. The component has a `speeches` array that contains the [speeches](https://content.sumerian.amazonaws.com/engine/latest/docs/Speech.html) attached to the component\. Call `play` on a speech\.

Sumerian calls Amazon Polly when you play a speech, so you must use the `aws.sdkReady` listener to ensure that your scene's AWS credentials are loaded before the call\.

**Example script – play a random speech**  

```
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
```