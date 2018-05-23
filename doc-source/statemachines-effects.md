# Effects and Lighting State Machine Actions in Amazon Sumerian<a name="statemachines-effects"></a>

You can use state machine actions in Amazon Sumerian to modify scene lighting or add special effects\.

**Effects and Lighting Actions**
+ **Add light** – Add a point light to the entity\.
+ **Set light properties** – Modify a light component's properties\.
+ **Remove light** – Remove the entity's light component\.
+ **Tween light** – Smoothly transition between two light colors\.
+ **Fire FX** – Make the entity emit fire\. To extinguish the fire, use the **Remove particles** action\.  
![\[Fire particle effects\]](http://docs.aws.amazon.com/sumerian/latest/userguide/)
+ **Smoke FX** – Make an entity emit smoke\. To cancel the smoke emitter, use the **Remove particles** action\.  
![\[Smoke particle effects\]](http://docs.aws.amazon.com/sumerian/latest/userguide/)
+ **Start particle system** and **Stop particle system** – Start or stop a particle emitter\.
+ **Pause particle system** – Pause a particle system\.
+ **Remove particles** – Remove any particle emitter attached to the entity
+ **Toggle post effects** – Enable or disable all post effects in the scene\.