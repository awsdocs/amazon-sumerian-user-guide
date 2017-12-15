# The Amazon Sumerian Rigid Body Component<a name="entities-rigidbody"></a>

The rigid body component adds physics properties, such as mass and velocity, to the entity\. The component will simulate physics for the component and set the position and orientation of the entity accordingly\.

**Properties**

+ **Mass** – the mass of the body\.

+ **Kinematic** – make the rigid body kinematic instead of dynamic\. A dynamic body is affected by external forces such as gravity\. Kinematic bodies do not fall or react when hit\.

+ **Velocity** – The initial linear velocity of the body\.

+ **Angular velocity** – The initial angular velocity of the body

+ **Linear drag** – resistance of the body to linear movement, between 0 and 1\.

+ **Angular drag** – resistance of the body to angular movement, between 0 and 1\.

If you add a collider component to the entity then the collider will be used for rigid body collision, with the center of mass being at the same location as the Rigid body entity\.

![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/components-rigidbody-collider.png)

Adding a single collider component and a rigid body component on the same entity is a bit limited \- the collider will always be centered in the entity and you cannot move it\. The solution is to put it on an entity below the rigid body component in the hierarchy\. This way you can place the collider wherever you want \(relative to the center of mass\) and how many entities you want\.

So if you'd like to make a chair consisting out of 6 colliders \(4 legs \+ back rest \+ seat\), you first create a root entity with a rigid body component\. Then you create 6 entities with box collider components and put them as children of the root entity\. Scale and position them correctly, and you're done\.

![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/components-rigidbody-colliders.png)