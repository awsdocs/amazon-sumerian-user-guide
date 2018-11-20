# Amazon Sumerian State Machines<a name="sumerian-statemachines"></a>

Amazon Sumerian behaviors are state machines that you can attach to the [state machine component](entities-statemachine.md) on an entity\. A behavior is a collection of *states* that transition between one another based on user interaction, timing, or other events\.

![\[Diagram of a state machine\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/components-statemachine-diagram.png)

Each state in a behavior consists of one or more *actions* that contain some logic that Sumerian defines\. An action on the active state can do things like respond to a user clicking the entity that the behavior is attached to, run a script, or record audio and send it to an Amazon Lex chatbot\.

![\[A state machine that adds an Amazon Lex chatbot to a host\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/components-dialogue-state-audio.png)

All actions on a state execute simultaneously when the state is entered\. If an action has a built\-in transition, the transition enters the next state when the action is complete\. Some actions modify the entity or scene and don't have a built\-in transition\. Others perform a calculation or wait for an event, and then fire a transition\.

In the previous example, the first state waits for the AWS SDK to get credentials and signal that it's ready\. When this occurs, it transitions to a state that waits for the user to press the Spacebar\. This transitions to another state that has two actions: one starts recording audio, and a second waits for the user to release the key\. When the user releases the key, another state stops the audio recording and transitions to a fifth state that sends the recorded audio to an Amazon Lex chatbot\.

The chatbot action has three transitions, and can respond differently depending on the result of the call to Amazon Lex\. Finally, the sixth state plays the audio response from the chatbot and transitions back to the second state to wait for another key press\. For more information on this example, see [Amazon Sumerian Dialogue Component](entities-dialogue.md)\.

Sumerian provides many actions, organized into the following categories\.

**State Machine Actions**
+ [Animation](statemachines-animation.md) – Animate and transform entities\.
+ [Audio and Camera](statemachines-audio.md) – Control audio settings and the scene camera\.
+ [AWS Features](statemachines-aws.md) – Control Sumerian features that call other AWS services, including speech \(Amazon Polly\) and dialogue \(Amazon Lex\)\.
+ [Keyboard and Mouse](statemachines-controls.md) – Respond to keyboard, mouse, and touch events\.
+ [Effects and Lighting](statemachines-effects.md) – Modify scene lighting or add special effects\.
+ [Materials and Rendering](statemachines-materials.md) – Modify entity textures and visibility\.
+ [Physics and Collision](statemachines-physics.md) – Apply physics and check for collisions\.
+ [Logic and Transitions](statemachines-scripting.md) – Run scripts, respond to events, and add transitions to a state\.
+ [Attributes and Tags](statemachines-attributes.md) – Manage entity metadata and perform transitions based on the value of a string, number, or boolean\.