# Amazon Sumerian State Machines<a name="sumerian-statemachines"></a>

Amazon Sumerian behaviors are state machines that you can attach to the [state machine component](entities-statemachine.md) on an entity\. A behavior is a collection of *states* that transition between one another based on user interaction, timing, or other events\.

![\[Diagram of a state machine\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/components-statemachine-diagram.png)

Each state in a behavior consists of one or more *actions* that contain some logic that Sumerian defines\. An action on the active state can do things like respond to a user clicking the entity that the behavior is attached to, run a script, or record audio and send it to an Amazon Lex chatbot\.

![\[A state machine that adds an Amazon Lex chatbot to a host\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/components-dialogue-state-audio.png)

All actions on a state execute simultaneously when the state is entered\. If an action has a built\-in transition, the transition enters the next state when the action is complete\. Some actions modify the entity or scene and don't have a built\-in transition\. Others perform a calculation or wait for an event, and then fire a transition\.

In the previous example, the first state waits for the AWS SDK to get credentials and signal that it's ready\. When this occurs, it transitions to a state that waits for the user to press the Spacebar\. This transitions to another state that has two actions: one starts recording audio, and a second waits for the user to release the key\. When the user releases the key, another state stops the audio recording and transitions to a fifth state that sends the recorded audio to an Amazon Lex chatbot\.

The chatbot action has three transitions, and can respond differently depending on the result of the call to Amazon Lex\. Finally, the sixth state plays the audio response from the chatbot and transitions back to the second state to wait for another key press\. For more information on this example, see [Amazon Sumerian Dialogue Component](entities-dialogue.md)\.

Sumerian provides many actions, organized into the following categories\.

**Topics**
+ [Animation State Machine Actions in Amazon Sumerian](statemachines-animation.md)
+ [Audio and Camera State Machine Actions in Amazon Sumerian](statemachines-audio.md)
+ [AWS Feature State Machine Actions in Amazon Sumerian](statemachines-aws.md)
+ [Keyboard and Mouse State Machine Actions in Amazon Sumerian](statemachines-controls.md)
+ [Effects and Lighting State Machine Actions in Amazon Sumerian](statemachines-effects.md)
+ [Materials and Rendering State Machine Actions in Amazon Sumerian](statemachines-materials.md)
+ [Physics and Collision State Machine Actions in Amazon Sumerian](statemachines-physics.md)
+ [Logic and Transition State Machine Actions in Amazon Sumerian](statemachines-scripting.md)