# Calculating the Size of Your Amazon Sumerian Scene<a name="scene-scenesize"></a>

The **Scene size** section calculates how much data your scene is using\. You can see the number of kilobytes from JSON, mesh data, and binaries\.

**To view your scene's size**

1. Open a scene in the Sumerian editor\.

1. Choose the root node in the **Entities** panel\.  
![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/editor-entities-scene.png)

1. Expand the **Scene size** section in the inspector panel\.  
![\[\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/scene-sections-scenesize.png)

The numbers shown reflect the uncompressed size of the scene\. When a scene is served from Amazon CloudFront, the contents are compressed\. To see the compressed size, open your scene and use the network tab of the browser developer tools to find the amount of data transferred\.