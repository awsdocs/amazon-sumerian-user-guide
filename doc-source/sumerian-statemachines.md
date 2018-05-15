# Amazon Sumerian State Machines<a name="sumerian-statemachines"></a>

Amazon Sumerian behaviors are finite\-state machines that you can attach to the [state machine component](entities-statemachine.md) on an entity\. A behavior is a collection of *states* that transition between one another based on user interaction, timing, or other events\.

![\[\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/components-statemachine-diagram.png)

Each state in a behavior consists of one or more *actions* that contain some logic defined by Sumerian\. An action on the active state can do things like respond to a user clicking the entity that the behavior is attached to, run a script, or record audio and send it to a Amazon Lex chatbot\. When an action completes, it can trigger another action on the same state, or transition to another state\.

![\[\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/components-dialogue-state-audio.png)

Sumerian provides many actions, organized into the following categories\.

**Topics**
+ [Amazon Sumerian State Machine Animation Actions](statemachines-animation.md)
+ [Amazon Sumerian State Machine Audio and Camera Actions](statemachines-audio.md)
+ [Amazon Sumerian State Machine AWS Feature Actions](statemachines-aws.md)
+ [Amazon Sumerian State Machine Keyboard and Mouse Actions](statemachines-controls.md)
+ [Amazon Sumerian State Machine Effects and Lighting Actions](statemachines-effects.md)
+ [Amazon Sumerian State Machine Materials and Rendering Actions](statemachines-materials.md)
+ [Amazon Sumerian State Machine Physics and Collision Actions](statemachines-physics.md)
+ [Amazon Sumerian State Machine Logic and Transition Actions](statemachines-scripting.md)