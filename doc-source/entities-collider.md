# The Amazon Sumerian Collider Component<a name="entities-collider"></a>

The *collider component* adds collision geometry to the entity\. If used together with a rigid body component, you can create a dynamic, colliding entity\. If the collider doesn't have any rigid body component, it will become a static collision geometry in the physics world\. We call this a *static collider*\.

If the entity with a collider or any of its parents has a dynamic rigid body component, it will turn into a *dynamic collider*\. If the entity with a collider or any of its parents has a kinematic rigid body component, it will turn into a *kinematic collider*\.

The collider shapes are rendered with a green wireframe\.

**Properties**

+ **Shape** – The shape of the collider\.

  + Box

  + Sphere

  + Plane

  + Infinite plane

+ **Trigger** – 

  If the collider is not a trigger, it will emit these events during collisions:

  + sumerian\.physics\.beginContact

  + sumerian\.physics\.duringContact

  + sumerian\.physics\.endContact  
![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/components-collider-triggers.png)

  If the collider is a trigger, then it will *not* collide with other physics objects\. However, it will emit events when a physics object enters it\. Available events are:

  + sumerian\.physics\.triggerEnter

  + sumerian\.physics\.triggerStay

  + sumerian\.physics\.triggerLeave  
![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/components-collider-triggerevents.png)

+ **Friction** – `0` means no friction\. The final friction \(and restitution\) value used in a collision is computed using multiplication\. For example, a sphere with friction=0\.5 that collides with a plane with friction=0\.5 will get a friction value of 0\.25\.

+ **Restitution** – how much the collider should bounce\. `0` is no bounce and `1` is maximum bounce\. If you set restitution to a number larger than one, it will gain more and more energy for each bounce\.

+ **Half extents** – the collider's half extents on the x, y, and z axises\.