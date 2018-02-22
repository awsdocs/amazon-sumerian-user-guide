# Using the Inspector Panel in the Amazon Sumerian Editor<a name="editor-inspector"></a>

Use the inspector panel to manage scene settings, entities, and assets\. When you select any of these elements in the Sumerian editor, you get the following properties in a section named after the element\.

![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/editor-entities-scene.png)

**Generic properties**

+ **Thumbnail** – the thumbnail image for the element\. Drop an image onto the thumbnail field or hover your mouse over it and choose **Take screenshot** to save an image of the current view of the canvas\.

+ **Name** – the name of the element\.

+ **ID** \(read\-only\) – a unique identifier for the element\.

+ **Type** \(read\-only\) – the type of element\. `scene`, `entity`, or an [asset type](sumerian-assets.md)\.

+ **Description** – description of the element\.

+ **Tags** – key\-only metadata that you can use in scripting\. You can read tags or search for entities with specific tags by using the [context object](scripting-context.md)\.

+ **Custom attributes** – key\-value metadata that you can use in scripting\. You can read attributes by using the [context object](scripting-context.md)\.

When you choose the scene in the [entities panel](sumerian-entities.md), or click on the background of the scene in the canvas, the inspector panel shows several additional sections for settings that apply to the entire scene, like environmental settings, post processing effects, and AWS SDK credentials\. See [Amazon Sumerian Scene Settings](sumerian-scene.md) for more information\.

When you choose an entity in the entities panel, or click on it in the canvas, the inspector panel shows a section for each component on the entity\. At a minimum, every entity has a transform component that determines its location, rotation, and size\. Entities created by dropping assets onto the scene have additional components based on their type, and you can add components to any entity in the inspector panel by choosing **Add component** at the bottom of the panel\. See [Entities](sumerian-entities.md) for more information\.

When you choose an asset in the [assets panel](editor-assets.md), the inspector panel shows sections for only components that apply to every instance of the asset in the scene\. For example, a script asset only has code, but a script component on an entity can have parameters that customize that instance of the script\. A material asset, on the other hand, has all of the [material component](entities-material.md) properties\. Modifying any of these properties changes every instance of the material in the scene\.