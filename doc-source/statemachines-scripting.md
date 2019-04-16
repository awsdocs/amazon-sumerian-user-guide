# Logic and Transition State Machine Actions in Amazon Sumerian<a name="statemachines-scripting"></a>

You can use state machine actions in Amazon Sumerian to run [scripts](sumerian-scripting.md), respond to events, and add transitions to a state\.

Logic actions perform calculations, run scripts, or interact with the page document\.

**Logic Actions**
+ **DOM listen** – Add a DOM event listener on one or many elements \(specified by a query selector\), and perform a transition on a given event\.
+ **Emit message** – Emit a message \(a ping\) to a channel on the bus\. Messages can be listened to by the **Listen** transition action, or by scripts using the `SystemBus.addListener(channel, callback)` function\.
+ **Execute script** – Run a [script](sumerian-scripting.md), and transition on success or failure\. Use the `enter` and `exit` functions in your script to run code when the state is entered and exited\. To trigger a transition, call `ctx.transitions.success()` or `ctx.transitions.failure()` on [the context object](scripting-context.md)\.
+ **Execute script condition** – Evaluate an expression, and transition on a true or false result\.
+ **Execute script expression** – Execute a statement\.
+ **Get HTML text** and **Set HTML text** – Read or change the contents of an HTML element\.
+ **Log message** – Print a message in the debug console of your browser\.
+ **Toggle full screen** – Expand the scene to fill the screen\. For browsers to allow this, the previous state must have a [Click or tap on entity](statemachines-controls.md) action that transitions to the state that runs this action\.

Timeline actions interact with the entity's timeline component\.

**Timeline Actions**
+ **Pause timeline** – Pause a timeline\.
+ **Set timelime time** – Jump to a point on a timeline\.
+ **Start timeline** and **Stop timeline** – Start or stop a timeline\.

Transition actions move from one state to another\. Many actions include transitions\. Use transition actions if the actions on a state don't include one, or to add branching behavior to your state machine\.

**Transition Actions**
+ **In view** – Perform a transition based on whether the entity is in a camera's frustum\.
+ **Listen** – Perform a transition on receiving a system bus message on a channel\.
+ **Random transition** – Perform a random transition\.
+ **Transition** – Transition to a different state\.
+ **Transition on next frame** – Transition to a selected state on the next frame\.
+ **Wait** – Perform a transition after a specified amount of time, or a random amount of time between 0 seconds and a specified maximum number of seconds\.