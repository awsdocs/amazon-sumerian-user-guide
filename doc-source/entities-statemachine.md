# The Amazon Sumerian State Machine Component<a name="entities-statemachine"></a>

The state machine component adds simple logic to the entity, similarly to scripts\. The difference from scripts is that the State machine is much easier to use \(no coding required\!\) and have many built\-in actions\.

The state machine component has two main panels, the panel for the component, and a panel for the behavior\.

The state machine has a set of *behaviors*, which contain *states*, which in turn contain *actions*\.

![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/components-statemachine-diagram.png)

[Read more about Finite State Machines on Wikipedia](https://en.wikipedia.org/wiki/Finite-state_machine)\.

A behavior is a collection of states\. A state machine component can have several behaviors, and they are independent of each other\. A behavior can be seen as and behaves like an independent state machine\.

Each behavior has one or more states, but only one active state\. When a state is active, all of its actions will also be active\. The active state can be changed by transitions in the state's actions\.

A behavior always has one default state which is activated when the scene loads\.

An action is some logic gets executed while its state is active\. Some actions execute once and are done, while others execute once per frame\. There are also actions that listen for events, and execute logic when the event happens\.

Many of the actions have events, and they can trigger transitions to other states\. For example, when the **WaitAction** executes, it sets a timer for a number of seconds\. When the timer is up, it can transition to another state\.

**Actions**

+ **Add light** – adds a point light to the entity\.

+ **Apply force** – apply a force to the attached rigid body\.

+ **Apply impulse** – apply an impulse to the attached rigid body\.

+ **Apply torque** – apply a torque to the attached rigid body\.

+ **Arrow keys** – transition to other states when arrow keys are pressed\.

+ **Change speech volume** – change the volume of a speech component\.

+ **Choose/tap on entity** – select an entity\.

+ **Compare counter** – compare a counter with a value\.

+ **Compare 2 counters** – compare the value of 2 counters\.

+ **Camera distance** – perform a transition based on the distance to the main camera or to a location\.

+ **Copy joint transform** – copy a joint's transform from another entity, and apply it to this entity\. This entity must be a child of an entity with an animation component\.

+ **Dolly zoom** – perform a dolly zoom\.

+ **DOM listen** – add a DOM event listener on one or many elements \(specified by a query selector\), and performs a transition on a given event\.

+ **Emit message** – emit a message \(a ping\) to a channel on the bus\. Messages can be listened to by the Listen action, or by scripts using the SystemBus\.addListener\(channel, callback\) function\.

+ **Execute script** – run a script, and transition on success or failure\.

+ **Execute script condition** – evaluate an expression, and transition on a true or false result\.

+ **Execute script expression** – execute a statement\.

+ **Fire FX** – make the entity emit fire\. To extinguish the fire, use the **Remove particles** action\.  
![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/)

+ **Hide** – hide an entity and its children\.

+ **Hover enter** – perform a transition based on whether an entity is inside a user defined box volume or not\. The volume is defined by setting two points which, when connected, form a diagonal through the box volume\.

+ **Hover exit** – perform a transition based on whether an entity is inside a user defined box volume or not\. The volume is defined by setting two points which, when connected, form a diagonal through the box volume\.

+ **HTML pick** – listen for a picking event and performs a transition\. Can only be used on HTML entities\.

+ **In box** – perform a transition based on whether an entity is inside a user defined box volume or not\. The volume is defined by setting two points which, when connected, form a diagonal through the box volume\.

+ **Increment counter** – increment a counter with a value\.

+ **In view** – perform a transition based on whether the entity is in a camera's frustum or not\.

+ **Key down** – listen for a key press and performs a transition\.

+ **Key pressed** – listen for a key press event and performs a transition\. Works over transition boundaries\.

+ **Key up** – listen for a key release and performs a transition\.

+ **Log message** – print a message in the debug console of your browser\.

+ **Look at** – reorient an entity so that it's facing a specific point\.

+ **Mouse down** – listen for a mouse button press and perform a transition\.

+ **Mouse move** – listen for mouse movement and performs a transition\.

+ **Mouse pressed** – listen for a mouse button press event and performs a transition\. Works over transition boundaries\.

+ **Mouse up** – listen for a mouse button release and performs a transition\.

+ **Move** – move the entity\.

+ **Mute** – mute all sounds globally\.

+ **Next frame** – transition to a selected state on the next frame\.

+ **Pause animation** – pause skeleton animations\.

+ **Pause particle system** – pause particle system\.

+ **Pause sound** – pause a sound\.

+ **Pause timeline** – pause a timeline\.

+ **Pick** – listen for a picking event on the entity and perform a transition\.

+ **Pick and exit** – listen for a picking event on the entity and open a new browser window\.

+ **Play sound** – listen for a picking event on the entity and open a new browser window\.

+ **Random transition** – perform a random transition\.

+ **Remove** – remove the entity from the world\.

+ **Remove light** – remove the light attached to the entity\.

+ **Remove particles** – remove any particle emitter attached to the entity

+ **Resume animation** – continue playing a skeleton animation\.

+ **Rotate** – rotate the entity with the set angles \(in degrees\)\.

+ **Scale** – scales the entity\.

+ **Set animation** – transition to a selected animation\.

+ **Set animation offset** – change the animation clip offset\.

+ **Set background color** – change the background color\.

+ **Set counter** – change a counter to a value\.

+ **Set HTML text** – change the contents of an HTML element\.

+ **Set light properties** – change various properties of a light\.

+ **Set light range** – change the range of a light\.

+ **Set material color** – change the color of a material\.

+ **Set render target** – renders what a camera sees on the current entity's texture\.

+ **Set rigid body angular velocity** – change the angular velocity of a rigid body\.

+ **Set rigid body position** – change the position of a rigid body\.

+ **Set rigid body rotation** – change the rotation of a rigid body\.

+ **Set rigid body velocity** – change the velocity of a rigid body\.

+ **Set rotation** – change the rotation of an entity\.

+ **Set timelime time** – jump to a point on a timeline\.

+ **Set animation time scale** – change the time scale for the current animation\.

+ **Shake** – shake the entity and optionally perform a transition\.

+ **Show** – make an entity visible\.

+ **Smoke FX** – make an entity emit smoke\. To cancel the smoke emitter, use the **Remove particles** action\.  
![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/)

+ **Sound fade in** – fade in a sound\.

+ **Sound fade out** – fade out a sound and stop it\.

+ **Sprite animation** – start a sprite animation\.

+ **Start particle system** – start a particle emitter\.

+ **Start speech** – start a speech component\.

+ **Start timeline** – start a timeline\.

+ **Stop particle system** – stop a particle emitter\.

+ **Stop sound** – stop a sound\.

+ **Stop speech** – stop a speech component\.

+ **Stop timeline** – stop a timeline\.

+ **Switch camera** – switch to a different camera\.

+ **Toggle full screen** – toggle fullscreen on/off\. Note that in most browsers this must be initiated by a user gesture\. For example, click or touch\.

+ **Toggle mute** – toggles mute of all sounds globally\.

+ **Toggle post FX** – enable or disable post fx globally\.

+ **Transition** – transition to a selected state\.

+ **Listen** – perform a transition on receiving a system bus message \(a ping\) on a specific channel\.

+ **Trigger enter** – transition when a trigger volume is entered\.

+ **Trigger leave** – transition when a collider is leaving the trigger volume\.

+ **Tween light** – tween the color of the light\.

+ **Tween look at** – transition the entity's rotation to face the set position\.

+ **Tween material color** – tween the color of a material\.

+ **Tween move** – transition to the set location\.

+ **Tween material opacity** – tween the opacity of a material\.

+ **Tween rotate** – transition to the set rotation, in angles\.

+ **Tween scale** – transition to the set scale\.

+ **Tween texture offset** – smoothly change the texture offset of the entity\.

+ **Unmute** – unmute all sounds globally\.

+ **Wait** – perform a transition after a specified amount of time\. A random time can be set, this will add between 0 and the set random time to the specified wait time\.

+ **WASD keys** – transition to other states when the WASD keys are pressed\.