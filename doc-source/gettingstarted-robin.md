# Working with a Sample Model<a name="gettingstarted-robin"></a>

A sample model in FBX format is available in the [amazon\-sumerian\-user\-guide](https://github.com/awsdocs/amazon-sumerian-user-guide/tree/master/models) GitHub repository\. The model includes animations that you can use to explore animation\-related features in Sumerian\.

Download the model by using this link: [american\-robin\.fbx](https://github.com/awsdocs/amazon-sumerian-user-guide/raw/master/models/american-robin.fbx)

**Example Scene**  
Click or tap the model to play a random animation\.

The model file contains multiple types of data:
+ **Mesh data** – The 3D wireframe that defines the shape of the model\.
+ **Texture data** – The 2D image that wraps around the mesh to color the model\.
+ **Animation data** – The skeleton that deforms the mesh, and animations that move the skeleton\.
+ **Other entities** – The file can also include auxiliary entities such as lights and cameras\.

When you import a model file, Sumerian processes it and stores the resulting assets in the scene\.

**To import the model**

1. Open [the Sumerian dashboard](https://console.aws.amazon.com/sumerian/home)\.

1. Choose or [create a project](dashboard-projects.md)\.

1. [Create a new scene](dashboard-scenes.md)\.

1. To import the model, drag it from your computer's file explorer onto the canvas\.

1. Sumerian processes the model and adds an asset pack to the **Assets** panel with the following assets:
   + **american\-robin\.fbx** – The parent entity that represents the model\.
   + **american\-robin** – The model's texture image\.
   + **Material** – The material that contains the texture and shader configuration for the model\.
   + **mesh\_Material\_Mesh** – The model's wireframe mesh\.
   + **Skeleton** – The animation skeleton from the model's armature\.
   + **Armature\|BEAK**, **Armature\|HOP**, **Armature\|JUMP**, **Armature\|PECK**, **Armature\|FLAP** – A clip for each animation take in the model file\.
   + **Animations** – A container for the animation clips that can be applied to an [animation component](entities-animation.md)\.

For more information about each type of asset, see [Amazon Sumerian Assets](sumerian-assets.md)\.

Adding the model to your scene is a separate step that takes the assets from the model and creates entities that represent them in the scene\.

**To add the imported model to your scene**

1. Drag the **american\-robin\.fbx** entity from the **Assets** panel onto the canvas\.

1. Sumerian adds multiple entities to your scene in a hierarchy, as shown in the **Entities** panel:
   + **american\-robin\.fbx** – An empty entity with an animation component that contains the model's animations\.
   + **thrush\_Material** – The visible part of the model, contained in an entity that has geometry and material components\. The geometry component contains the model's mesh and skeleton\. The material component contains the texture file and shader settings\. This model uses a diffuse shader with smooth shading\.
   + **light\-1**, **light\-2**, **light\-3** – Three point lights that light the model\. You can drag these to a different location in the hierarchy or delete them and create new lights\.
   + **Armature** – An empty entity that represents the armature that was used to rig the model for animation\.

Adding the model to your scene creates a copy of the entities that it comprises\. The other types of asset in the model, however, are referenced from the scene's assets\. So when you add the same model to your scene multiple times, they have independent entity settings, such as location, rotation, and scale\. But they also share references to the texture, material, and animation assets\.

If, for example, you change the opacity on the material component of the **thrush\_Material** entity, it changes the settings on that material in the **Assets** panel, and on any other copies of the model created in the past or in the future\. Alternatively, if you change the **Y** rotation of the entity in the scene, it affects only that instance of the model\. And if you change the rotation of the entity in the **Assets** panel, it affects only new copies of the model that you add to the scene after setting the rotation\.

Within the **Assets** panel, the model's assets are organized into an asset pack\. To create a copy of the asset pack that you can import into other scenes, export it to your project\.

**To export the model in an asset pack**

1. Choose the asset library icon ![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/assets-icons-assetlib.png) to export the asset pack\.

1. Choose a category for the pack\. For models with multiple types of asset, you can choose **Entities** or **Other**\.

1. Choose **Add to asset library**\.

You can now import the model into other scenes by choosing **Import assets** at the top of the scene\. Each time you import or export an asset pack it creates a copy with no references or links to other scenes\.

Learn how to make the model interactive and customize the scene camera in the [next topic](gettingstarted-showcase.md)\.