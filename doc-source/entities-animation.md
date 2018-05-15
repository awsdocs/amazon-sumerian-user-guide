# Amazon Sumerian Animation Component<a name="entities-animation"></a>

The animation component controls the animations of an imported 3D mesh\. It contains a list of *animation states* and *transitions*\.

When you import your model into the editor, you get a geometry component and an animation component\.

The animation **State** contains information about an animation, such as how many times it should loop, how fast it should run, and if it has any transition\. If there's no transition for an animation state, the default transitions at the bottom are used\.

If you want to switch between animation states, but want the transition between them to be smooth, add a **Transition**\.

**Transitions**
+ **Fade** – A transition that blends over a given time from one animation state to another, beginning the target clip from local time 0 at the start of the transition\. This is best used with two clips that have similar motions\.
+ **SyncFade** – A transition that blends over a given time from one animation state to another, synchronizing the target state to the initial state's start time\. This is best used with two clips that have similar motions\.
+ **Frozen** – A two\-state transition that freezes the starting state at its current position and blends that over time with a target state\. The target state moves forward in time during the blend as normal\.