# Animation State Machine Actions in Amazon Sumerian<a name="statemachines-animation"></a>

You can use state machine actions to animate and transform entities in Sumerian\.

Transform actions change the translation, rotation, and scale of the entity\. Tween actions change the same values smoothly over a configurable amount of time\.

**Transform Actions**
+ **Look at** – Rotate the entity to face a point in space\.
+ **Tween look at** – Smoothly rotate the entity to face a point in space over time\.
+ **Face current camera** – Rotate the entity to face the active camera\.
+ **Move**, **Rotate**, and **Scale** – Move, rotate, or scale the entity immediately\.
  + \(move\) **Oriented** – If the entity is rotated, move relative to the current rotation\. For example, moving a host 1 unit on the X axis with oriented always moves the host to their right, on the host's X axis\. If not oriented, the host moves on the world X axis, regardless of which direction it faces\.
  + **Relative** – Move, rotate, or scale relative to the current transform values\. Uncheck to set new tranform values absolutely\.
  + **On every frame** – Repeat a relative transform while the state is active, spreading the specified values over each second that passes\. For example, you can add 90 degrees of rotation *relative*, and *on every frame*\. If the scene renders at 60 frames per second, the entity rotates 1\.5 degrees every frame until a transition occurs\.
+ **Tween move**, **Tween rotate**, **Tween scale** – Smoothly move, rotate, or scale the entity over time\.
+ **Shake** – Shake the entity\.

Animation actions control the entity's animation component\.

**Animation Actions**
+ **Copy joint transform** – Copy a joint transform from another entity, and apply it to this entity\. This entity must be a child of an entity with an animation component\.
+ **Pause animation** – Pause skeleton animation\.
+ **Resume animation** – Continue playing skeleton animation\.
+ **Set animation** – Transition to a selected animation\.
+ **Set animation offset** – Change the animation clip offset\.
+ **Set animation time scale** – Change the time scale for the current animation\.

Host actions configure a Sumerian host to play an emote or look at another entity\.

**Host Actions**
+ **Play emote** – Play a host emote\.
+ **Set point of interest target** – Change the target entity of a host\.