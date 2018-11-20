# Viewing Performance Information for Your Amazon Sumerian Scene<a name="scene-scenestats"></a>

The **Scene stats** section gives you some performance statistics about the current scene\.

**To view your scene's stats**

1. Open a scene in the Sumerian editor\.

1. Choose the root node in the **Entities** panel\.  
![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/editor-entities-scene.png)

1. Expand the **Scene stats** section in the inspector panel\.  
![\[\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/scene-sections-scenestats.png)

**Stats**
+ **FPS** – The number of frames rendered per second\.
+ **Draw calls** – The number of draw calls made per frame\.
+ **Entities** – The number of visible entities\.
+ **Lights** – The number of lights being rendered\.
+ **Shadow casters** – The number of shadow casters being rendered\.
+ **Shaders** – The number of shaders being rendered\.
+ **Texture size** – The current texture size in the GPU\.
+ **Triangles** – The number of triangles being rendered\.

Sumerian performs additional rendering optimiziation during playback\. Play the scene to see how the number of draw calls varies between editor mode and playback mode\. You can improve performance during playback by re\-using materials, [flagging entities as static](entities-transform.md), and limiting use of shadows and post effects\.