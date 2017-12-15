# The Amazon Sumerian Animation Component<a name="entities-animation"></a>

The animation component controls the animations of an imported 3D mesh\. It contains a list of *animation states* and *transitions*\.

When you import your model into the editor, you get a geometry component as well as an animation component\.

The animation **State** contains information about an animation, such as how many times it should loop, how fast it should run, and if it has any transition\. If there's no transition for an AnimationState, then the Default Transitions at the bottom will be used\.

If you want to switch between animation states, but want the transition between them to be smooth, then you add a **Transition**\.

**Transitions**

+ **Fade** – a transition that blends over a given time from one animation state to another, beginning the target clip from local time 0 at the start of the transition\. This is best used with two clips that have similar motions\.

+ **SyncFade** – a transition that blends over a given time from one animation state to another, synchronizing the target state to the initial state's start time\. This is best used with two clips that have similar motions\.

+ **Frozen** – a two state transition that freezes the starting state at its current position and blends that over time with a target state\. The target state moves forward in time during the blend as normal\.