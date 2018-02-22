# Entities<a name="sumerian-entities"></a>

Entities are containers for components that can be positioned in a scene\. You can create blank entities, or import an asset to create an entity with the appropriate components already attached\. The [Entities panel](editor-entities.md) organizes entities into a hierarchy and lets you attach entities to one another in a parent\-child relationship\.

The components attached to an entity determine its appearance and behavior during playback\. You can add a camera component to a component to make it a camera, or a light component to make it a light\. 

**To create an entity and add components**

1. Open a scene in the Sumerian editor\.

1. Choose **Create entity**\.

1. Choose a shape or built\-in object\. For a blank entity, choose **Entity**\.

1. Choose the new entity in the entities panel\.

1. In the inspector panel, expand the **Details** section\. Enter text in the fields to change the entity name, description, tags, and attributes\.

1. To place the entity in the scene, use the X, Y and Z axis handles in the canvas, or expand the **Transform** section and enter absolute coordinates\. 

1. Choose the plus icon, and then choose a component type to add a component to the entity\.

All entities include a transform component that you can use to move the entity around the scene\. Depending on the type of entity that you create, other components are also included automatically\.

**Default Components**

+ **2D shapes** – transform, 2d graphics

+ **3D shapes** – transform, geometry, material

+ **Cameras** – transform, camera, script

+ **HTML 3D** – transform, HTML 3D

+ **Lights** – transform, light

+ **Particles** – transform, particles

+ **Timeline** – transform, timeline

Use the entities panel to organize your scene's entities in a hierarchy\. When you make an entity a child of another entity, it attaches to the parent\. That is, when you move the parent, the child moves, and when you set the child's position, it is relative to the position of the parent\.

**To manage entities**

1. Open a scene in the Sumerian editor\.

1. Choose an entity in the entities panel\.

1. Drag the entity onto another entity to make it a child of that entity\.

1. Click the eye icon next to an entity to hide it\.

1. Click the copy icon to duplicate it\.

1. Click the trash icon to delete it\.

Some components also have special properties that are affected by the components on their parent\. For example, a collider's behavior changed depending on the type of rigid body attached to the same entity or parent entity\.

**To manage components**

1. Open a scene in the Sumerian editor\.

1. Choose an entity in the entities panel\.

1. In the inspector panel, click a component's name to expand or collapse its properties\. See the topic for each component for details on the available properties\.

1. Click the cog icon and use the following options\.

   + **Reset** – restore the default values for the component's properties\.

   + **Toggle panel** – show or hide the component properties\.

   + **Remove** – delete the component\.

   + **Copy** \(some components\) – copy the component configuration\.

   + **Paste** \(some components\) – paste the component configuration copied from the same component on a different entity\.

The following topics describe the parameters and usage of each type of component\.

**Basic Components**

+ [The Amazon Sumerian Transform Component](entities-transform.md)

+ [The Amazon Sumerian Geometry Component](entities-geometry.md)

+ [The Amazon Sumerian Material Component](entities-material.md)

+ [The Amazon Sumerian Camera Component](entities-camera.md)

+ [The Amazon Sumerian VR Camera Rig Component](entities-vrcamerarig.md)

+ [The Amazon Sumerian HMD Camera Component](entities-hmdcamera.md)

+ [The Amazon Sumerian VR Controller Component](entities-vrcontroller.md)

+ [The Amazon Sumerian Host Component](entities-host.md)

+ [The Amazon Sumerian Speech Component](entities-speech.md)

**Content and Effects**

+ [The Amazon Sumerian 2D Graphics Component](entities-2dgraphics.md)

+ [The Amazon Sumerian HTML Component](entities-html.md)

+ [The Amazon Sumerian HTML 3D Component](entities-html3d.md)

+ [The Amazon Sumerian Sound Component](entities-sound.md)

+ [The Amazon Sumerian Light Component](entities-light.md)

+ [The Amazon Sumerian Particle System Component](entities-particlesystem.md)

**Animation and Physics**

+ [The Amazon Sumerian Animation Component](entities-animation.md)

+ [The Amazon Sumerian Collider Component](entities-collider.md)

+ [The Amazon Sumerian Rigid Body Component](entities-rigidbody.md)

+ [The Amazon Sumerian State Machine Component](entities-statemachine.md)

+ [The Amazon Sumerian Script Component](entities-script.md)

+ [The Amazon Sumerian Timeline Component](entities-timeline.md)