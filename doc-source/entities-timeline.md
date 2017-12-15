# The Amazon Sumerian Timeline Component<a name="entities-timeline"></a>

The timeline component animates properties of an entity over time, such as the transform\.

When you add the timeline component to an entity, you'll get a component panel with just one button\. Choose the *Toggle timeline* button to open the timeline\.

To add an entity to your timeline, drag it from the Hierarchy view to the drop area at the left bottom in the timeline\. The entity will appear to the left in the timeline\. View the entity properties available for animation by clicking on it\. Each property is called a *Channel*\.

Note that you can *not* add the owner entity to the timeline\.

To change a property value over time, you add *Keyframes* to a *Channel*\. A Keyframe has a position on the timeline, a value and an easing function\. As time go by, the property value will be set to the value given by the keyframes, interpolated by the easing functions\.

The timeline has a start and an end\. You can set the duration of the timeline and toggle looping in the right bottom corner\.

Event channels are used to emit SystemBus events at given points in time\. Choose *Add Event Channel* to add a channel for an event\. You will be prompted for an event name to use\.

To fetch these events, you can use `SystemBus.addListener` in a Script or use the *Listen Action* in the State Machine\. Make sure to listen for the same event name that you specified when adding the channel\.