# Physics and Collision State Machine Actions in Amazon Sumerian<a name="statemachines-physics"></a>

You can use state machine actions in Amazon Sumerian to apply physics and check for collisions\.

Physics actions move an object by simulating real\-world physics\.

**Physics Actions**
+ **Apply force on rigid body** – Apply a force to the entity's rigid body\.
+ **Apply impulse on rigid body** – Apply an impulse to the entity's rigid body\.
+ **Apply torque on rigid body** – Apply a torque to the entity's rigid body\.
+ **Set rigid body angular velocity** – Change the angular velocity of a rigid body\.
+ **Set rigid body position** – Change the position of a rigid body\.
+ **Set rigid body rotation** – Change the rotation of a rigid body\.
+ **Set rigid body velocity** – Change the velocity of a rigid body\.

Collision actions detect changes in an object's position and transition to a new state\.

**Collision Actions**
+ **Camera distance** – The entity is at a distance from the current camera or a point in space\.
+ **In box** – The entity is within a box bounded by two points at opposite corners\.
+ **Trigger enter** – The entity's collider enters a trigger volume\.
+ **Trigger leave** – The entity's collider leaves a trigger volume\.