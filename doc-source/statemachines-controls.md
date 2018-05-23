# Keyboard and Mouse State Machine Actions in Amazon Sumerian<a name="statemachines-controls"></a>

You can use state machine actions in Amazon Sumerian to respond to keyboard, mouse, and touch events\.

Keyboard actions transition in response to a specific key press\. You can add multiple keyboard actions to the same state to respond to multiple inputs\. The first key press that satisfies any keyboard action on the state triggers a transition to the next state\.

**Keyboard Actions**
+ **Key down** – Press a key\.
+ **Key up** – Release a key\.
+ **Key pressed** – Press a key\.
+ **Arrow key** – Press up, down, left, or right on the arrow keys\.
+ **WASD key** – Press W, A, S, or D\.

Mouse actions listen for click, hover, and touch events on the entity or its children, and then transition to a new state\.

**Mouse Actions**
+ **Click or tap on entity** – Choose an entity by clicking or tapping it\.
+ **Hover enter** – Move the mouse cursor over an entity\.
+ **Hover exit** – Move the mouse cursor off of an entity\.
+ **Mouse move** – Move the mouse cursor\.
+ **Mouse down or touch start** – Press a mouse button, or touch the screen\. Has separate transitions for touch and each mouse button\.
+ **Mouse up or touch end** – Release a mouse button, or stop touching the screen\. Has separate transitions for touch and each mouse button\.
+ **Mouse pressed** – Press a mouse button\. Choose **Left**, **Middle**, or **Right**\. Has one transition for the selected button\.
+ **Pick** – Click or tap an entity and then release, without moving away from the entity\.
+ **Pick and exit** – Click or tap an entity, and then release to open a link in a new window\.