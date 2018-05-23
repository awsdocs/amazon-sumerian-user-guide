# Animation State Machine Actions in Amazon Sumerian<a name="statemachines-animation"></a>

You can use state machine actions to animate and transform entities in Sumerian\.

Transform actions change the translation, rotation, and scale of the entity\. Tween actions change the same values smoothly over a configurable amount of time\.

**Transform Actions**
+ **Look at** – Rotate the entity to face a point in space\.
+ **Tween look at** – Smoothly rotate the entity to face a point in space over time\.
+ **Face current camera** – Rotate the entity to face the active camera\.
+ **Move** – Move the entity\.
+ **Tween move** – Smoothly move the entity over time\.
+ **Rotate** – Change the entity's rotation values\.
+ **Tween rotate** – Smoothly rotate the entity over time\.
+ **Scale** – Change the entity's scale values\.
+ **Tween scale** – Smoothly scale the entity over time\.
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