# Configuring Environment Settings for Your Amazon Sumerian Scene<a name="scene-environment"></a>

Use environment settings to configure your scene's background image, ambient lighting, and weather\.

**To configure environment settings**

1. Open a scene in the Sumerian editor\.

1. Choose the root node in the **Entities** panel\.  
![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/editor-entities-scene.png)

1. Expand the **Environment** section in the inspector panel\.  
![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/scene-sections-environment.png)

1. Configure the following settings\.

   + **Background** – set the background color of the scene, and its opacity\.

     To make the background transparent, set **Opacity** to `0`\. Background settings have no effect if you add a **Skybox**\.

   + **Skybox** – use an image as the background of the scene\. You can drop an existing skybox from the assets panel, or choose the plus icon to [create a new skybox](assets-skybox.md)\.

   + **Ambient** – add ambient light to light all objects the scene\. Ambient light does not affect the skybox\.

   + **Fog** – add fog to the scene\. Fog starts occluding objects in the scene at **Fog near** units from the camera, and strengthens until **Fog far** units, where it becomes completely opaque\.

   + **Particles** – add animated snow\-like particles to the background of the scene\.

**Properties**

     + **Velocity** – the speed of the falling particles\.

     + **Rate** – the number of particles that appear per second\.

     + **Height** – the height at which the particles will appear, relative to the camera height\.