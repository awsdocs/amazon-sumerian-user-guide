# Amazon Sumerian Scene Settings<a name="sumerian-scene"></a>

The editor contains many options for configuring a scene in addition to the [options available in the dashboard](dashboard-scenes.md)\. In the inspector panel, you can configure credentials for the AWS SDK for JavaScript, adjust the canvas size and grid, and configure global settings like fog, background image, and post processing effects\.

**To configure a scene**

1. Open a scene in the Sumerian editor\.

1. Choose the root node in the **Entities** panel\.  
![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/editor-entities-scene.png)

1. Modify scene settings in the inspector panel\.

   + **Details** – Update the scene's name and description\.

   + **Tags** – Add metadata tags to the scene\.

   + **Custom attributes** – Add metadata key\-value pairs to the scene\.

You can save a copy of your scene as a **template** to use it as a starting point for creating other scenes\. If your scene is saved to a project, the template is saved to the same project\. Otherwise, you must choose a project to hold the template\.

**To create a template**

1. Open a scene in the Sumerian editor\.

1. Choose the root node in the **Entities** panel\.  
![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/editor-entities-scene.png)

1. Expand the scene section in the inspector panel\.

1. Choose **Save scene as template**\.

1. \(drafts\) Choose a project for the template\.

You can [copy or move templates between scenes](dashboard-templates.md) in the dashboard\. You can update a template by creating a template again from the same source scene or a scene created from the template\. When you save a template, you can choose to create a new template or update the existing template\.

Collapse the scene settings section by clicking on the name of your scene\.

![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/scene-sections.png)

The following topics describe the settings available in each section\.


+ [Configuring AWS Credentials for Your Amazon Sumerian Scene](scene-aws.md)
+ [Taking Snapshots of Your Amazon Sumerian Scene](scene-snapshots.md)
+ [Configuring the Canvas for Your Amazon Sumerian Scene](scene-document.md)
+ [Configuring Environment Settings for Your Amazon Sumerian Scene](scene-environment.md)
+ [Configuring Post Processing Effects for Your Amazon Sumerian Scene](scene-posteffects.md)
+ [Calculating the Size of Your Amazon Sumerian Scene](scene-scenesize.md)
+ [Viewing Performance Information for Your Amazon Sumerian Scene](scene-scenestats.md)