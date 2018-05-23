# Amazon Sumerian Entities<a name="sumerian-entities"></a>

Entities are a kind of container in Sumerian that you use to collect and organize assets in your scene\. For example, when you add a 3D model to your scene, the editor splits it into mesh, texture, and animation assets and assigns them to an entity with the corresponding Sumerian geometry, material, and animation components\. Your scene can contain up to 1,000 entities\.

Entities can be cameras, lights, or containers for other entities\. The [Entities panel](editor-entities.md) organizes entities into a hierarchy\. You can use it to attach entities to one another in parent\-child relationships\.

![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/entities-panel.png)

Components are the configurable parts of an entity that determine its appearance and behavior during playback\. To make a lamp model light the scene, add a light component\. To move or change the entity during playback, add a state machine, timeline, or script component\.

**To create an entity and add components**

1. Open a scene in the Sumerian editor\.

1. Choose **Create entity**\.

1. Choose a shape or built\-in object\. For a blank entity, choose **Entity**\.

1. Choose the new entity in the entities panel\.

1. In the inspector panel, expand the **Details** section\. Enter text in the fields to change the entity name, description, tags, and attributes\.

1. To place the entity in the scene, use the X, Y, and Z axis handles in the canvas\. Or expand the **Transform** section and enter absolute coordinates\. 

1. Choose the plus icon, and then choose a component type to add a component to the entity\.

## Managing Entities<a name="sumerian-entities-manage"></a>

Use the entities panel to organize your scene's entities in a hierarchy\. When you make an entity a child of another entity, it attaches to the parent\. That is, when you move the parent, the child moves, and when you set the child's position, it's relative to the position of the parent\.

**To manage entities**

1. Open a scene in the Sumerian editor\.

1. Choose an entity in the entities panel\.

1. Drag the entity onto another entity to make it a child of that entity\.

1. Use the icons next to the entity name to manage it the eye icon next to an entity to hide it\.
   + ![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/entities-icons-hide.png) – Hide the entity\.
   + ![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/entities-icons-duplicate.png) – Make a copy of the entity\.
   + ![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/entities-icons-trash.png) – Delete the entity\.

## Managing Components<a name="sumerian-entities-components"></a>

Components have properties you can use to configure settings or attach assets\. All entities include a transform component that you can use to move the entity around the scene\. Depending on the type of entity that you create, other components are also included automatically\.

**Default Components**
+ **2D shapes** – Transform, 2d graphics
+ **3D shapes** – Transform, geometry, material
+ **Cameras** – Transform, camera, script
+ **HTML 3D** – Transform, HTML 3D
+ **Lights** – Transform, light
+ **Particles** – Transform, particles
+ **Timeline** – Transform, timeline

**To manage components**

1. Open a scene in the Sumerian editor\.

1. Choose an entity in the entities panel\.

1. In the inspector panel, choose a component's name to expand or collapse its properties\. See the topics below for each component for details on their available properties\.

1. Click the cog icon and use the following options:
   + **Reset** – Restore the default values for the component's properties\.
   + **Toggle panel** – Show or hide the component properties\.
   + **Remove** – Delete the component\.
   + **Copy** \(some components\) – Copy the component configuration\.
   + **Paste** \(some components\) – Paste the component configuration that you copied from the same component on a different entity\.

Some components also have special properties that are affected by the components on their parent\. For example, a collider's behavior changes depending on the type of rigid body that's attached to the same entity or parent entity\.

The following topics describe the parameters and use of each type of component\.

**Basic Components**
+ [Amazon Sumerian Transform Component](entities-transform.md)
+ [Amazon Sumerian Geometry Component](entities-geometry.md)
+ [Amazon Sumerian Material Component](entities-material.md)
+ [Amazon Sumerian Camera Component](entities-camera.md)
+ [Amazon Sumerian VR Camera Rig Component](entities-vrcamerarig.md)
+ [Amazon Sumerian HMD Camera Component](entities-hmdcamera.md)
+ [Amazon Sumerian VR Controller Component](entities-vrcontroller.md)
+ [Amazon Sumerian Host Component](entities-host.md)
+ [Amazon Sumerian Speech Component](entities-speech.md)
+ [Amazon Sumerian Dialogue Component](entities-dialogue.md)

**Content and Effects**
+ [Amazon Sumerian 2D Graphics Component](entities-2dgraphics.md)
+ [Amazon Sumerian HTML Components](entities-html.md)
+ [Amazon Sumerian Sound Component](entities-sound.md)
+ [Amazon Sumerian Light Component](entities-light.md)
+ [Amazon Sumerian Particle System Component](entities-particlesystem.md)

**Animation and Physics**
+ [Amazon Sumerian Animation Component](entities-animation.md)
+ [Amazon Sumerian Collider Component](entities-collider.md)
+ [Amazon Sumerian Rigid Body Component](entities-rigidbody.md)
+ [Amazon Sumerian State Machine Component](entities-statemachine.md)
+ [Amazon Sumerian Script Component](entities-script.md)
+ [Amazon Sumerian Timeline Component](entities-timeline.md)