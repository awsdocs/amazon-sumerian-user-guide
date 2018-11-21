# Amazon Sumerian Assets<a name="sumerian-assets"></a>

The assets panel in Sumerian collects shareable assets in the scene\. When you add an asset to a scene, Sumerian automatically adds it to a *default pack* in the assets panel\. Entities that you create are not automatically added, but you can drag them from the entities panel into the assets panel to create an entity asset\.

**Asset Types**
+ ![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/assets-icons-entity.png) **Entity** – A [Sumerian entity](sumerian-entities.md)\. If you import a file or asset pack, drop the entity from the assets panel onto the canvas to add it to your scene\.
+ ![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/assets-icons-gesturemap.png) **Gesture map** – A document that maps gesture animations to trigger words in a speech asset\.
+ ![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/assets-icons-mesh.png) **Mesh** – A polygon mesh from a 3D model\.
+ ![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/assets-icons-skeleton.png) **Skeleton** – A skeleton from a 3D model\.
+ ![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/assets-icons-animation.png) **Animation** – A collection of animation clips from a 3D model\.
+ ![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/assets-icons-clip.png) **Clip** – An animation clip from a 3D model\.
+ ![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/assets-icons-material.png) **Material** – A [material component](entities-material.md) with textures for each renderable layer generated from a 3D model\.
+ ![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/assets-icons-sound.png) **Sound** – An audio file for use with a [sound component](entities-sound.md)\.
+ ![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/assets-icons-script.png) **Script** – A JavaScript script that can be instantiated on a [script component](entities-sound.md)\.
+ ![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/assets-icons-speech.png) **Speech** – A text file for use with a [speech component](entities-speech.md)\. 
+ ![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/assets-icons-json.png) **JSON** – A JSON file that can be used as a parameter input on a [script component](entities-sound.md)\.
+ ![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/assets-icons-skybox.png) **Skybox** – A collection of textures that can be added to the background of the scene in the scene's [environment settings](scene-environment.md)\. 
+ ![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/assets-icons-behavior.png) **Behavior** – A collection of actions that can be added to a [state machine component](entities-statemachine.md)\. 
+ ![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/assets-icons-texture.png) **Texture** – An image file that can be added to layers of a [material component](entities-material.md), a [2D graphics component](entities-2dgraphics.md), or a skybox\.

To add an asset to a scene, you can drag it from your desktop directly onto the canvas\. Depending on the file type, the editor creates an entity in the entities panel, and one or more assets\. For example, when you add a JPG image to a scene, you get an image entity in the scene, a material asset, and a texture asset\.

**To add an asset to a scene**

1. Open a scene in the Sumerian editor\.

1. Drag a file from your desktop file browser onto the canvas\.

   **or**

   Create a blank asset by clicking the plus icon next to the default pack\. To see the icon, select the pack name\.  
![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/assets-bin-add.png)

1. Choose the asset in the assets panel and modify it by using the options in the inspector panel\.