# Amazon Sumerian Timeline Component<a name="entities-timeline"></a>

Use timelines to move, rotate, or change the scale of entities over time\. You can set the start and end values of these properties, and add keyframes to control the speed or direction of the animation along the way\. The timeline can also emit custom events, which can be consumed from a state machine or script\.

![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/tools-timeline.png)

To create a timeline, choose **Create entity**, **Timeline**\. You can also add the timeline component to an existing entity, but don't add it to the entity that you want to animate\. The timeline can only control entities other than the one to which it is attached\.

**Properties**
+ **Duration** – Length of the timeline, in seconds\.
+ **Loop** – Enable to repeat the timeline animation in a loop\.
+ **Auto start** – To trigger the timeline with a state machine or script, disable this option to prevent the timeline from starting automatically in playback mode\.

To open the timeline editor, choose **Toggle timeline** in the timeline component, or choose **Timeline** from the **Tools** menu\.

To add entities to the timeline, drag them from the entities panel onto the timeline editor\. Each *channel* in the editor controls one property of the transform, such as the X translation or the Z scale\. Click the clock icon next to a property to enable the channel and add the first keyframe\.

Add more keyframes to a channel by choosing a time and changing the property's value\. During playback, the entity animates between the transform values at each keyframe\. By default, changing a property's value automatically creates a keyframe\. You can disable this by clicking the key icon next to the **Drop entity here** box\.

Add **Event channels** to the timeline to emit custom events onto the system bus\. The name of the channel is the name of the event that Sumerian emits at each keyframe on the event channel\. Consume this event from a script with [SystemBus\.addListener](https://content.sumerian.amazonaws.com/engine/latest/docs/Bus.html), or from a [state machine](entities-statemachine.md) with the **Listen action**\.