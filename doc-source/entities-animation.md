# Amazon Sumerian Animation Component<a name="entities-animation"></a>

You can use the animation component to manage the animations attached to an entity\. The animation component organizes animations into layers of animation states\. Each state refers to a clip in the **Assets** panel and contains additional configuration options\.

When you import a 3D model that has animations, Amazon Sumerian splits it into separate assets for the model, skeleton, and the animation clips that it includes\. The entity that represents the model in the scene uses an animation component to organize and configure the clips\. For an example, see [Working with a Sample Model](gettingstarted-robin.md)\.

The animation **State** contains information about an animation, such as how many times it should loop, how fast it should run, and if it has any transition\. If there's no transition for an animation state, the default transitions at the bottom of the list are used\. If you want to switch between animation states, but want the transition between them to be smooth, add a **Transition**\.

**Transitions**
+ **Fade** – A transition that blends over a given time from one animation state to another, beginning with the target clip from local time 0 at the start of the transition\. This is best used with two clips that have similar motions\.
+ **SyncFade** – A transition that blends over a given time from one animation state to another, synchronizing the target state to the initial state's start time\. This is best used with two clips that have similar motions\.
+ **Frozen** – A two\-state transition that freezes the starting state at its current position and blends that over time with a target state\. The target state moves forward in time during the blend as normal\.

As long as the skeleton matches, you can import additional or updated animations to an entity without replacing the model\. Drop your model file onto the **Drop animation state file here** field in an animation layer to add the clips from the file to the layer\. To replace a single animation, select the clip in the **Assets** panel and drag the model file onto the **Drop file to replace clip** field\.