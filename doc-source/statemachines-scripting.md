# Amazon Sumerian State Machine Logic and Transition Actions<a name="statemachines-scripting"></a>

You can use state machine actions to run [scripts](sumerian-scripting.md), respond to events, and add transitions to a state\.

**Logic and Transition Actions**
+ **Compare counter** and **Compare 2 counters** – Compare a counter with a set value, or compare the value of two counters\.
+ **DOM listen** – Add a DOM event listener on one or many elements \(specified by a query selector\), and perform a transition on a given event\.
+ **Emit message** – Emit a message \(a ping\) to a channel on the bus\. Messages can be listened to by the Listen action, or by scripts using the `SystemBus.addListener(channel, callback)` function\.
+ **Execute script** – Run a [script](sumerian-scripting.md), and transition on success or failure\. Use the `enter` and `exit` functions in your script to run code when the state is entered and exited\. To trigger a transition, call `ctx.transitions.success()` or `ctx.transitions.failure()` on [the context object](scripting-context.md)\.
+ **Execute script condition** – Evaluate an expression, and transition on a true or false result\.
+ **Execute script expression** – Execute a statement\.
+ **Get HTML text** and **Set HTML text** – Read or change the contents of an HTML element\.
+ **In view** – Perform a transition based on whether the entity is in a camera's frustum or not\.
+ **Increment counter** – Increment a counter with a value\.
+ **Listen** – Perform a transition on receiving a system bus message on a channel\.
+ **Log message** – Print a message in the debug console of your browser\.
+ **Pause timeline** – Pause a timeline\.
+ **Random transition** – Perform a random transition\.
+ **Set counter** – Change a counter to a value\.
+ **Set timelime time** – Jump to a point on a timeline\.
+ **Start timeline** and **Stop timeline** – Start or stop a timeline\.
+ **Toggle full screen** – Toggle fullscreen on/off\. Note that in most browsers this must be initiated by a user gesture\. For example, click or touch\.
+ **Transition** – Transition to a different state\.
+ **Transition on next frame** – Transition to a selected state on the next frame\.
+ **Wait** – Perform a transition after a specified amount of time\. A random time can be set\. This will add between 0 and the set random time to the specified wait time\.