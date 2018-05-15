# Amazon Sumerian Concepts<a name="sumerian-concepts"></a>

Amazon Sumerian lets you create virtual reality \(VR\) and augmented reality \(AR\) *scenes* that are made up of *components* and *entities*, organized into *projects*\. Let's look closely at the concepts used in the Sumerian editor and this guide\.

## Scenes<a name="concepts-scenes"></a>

A scene is a 3D space that contains objects and behaviors that define a VR or AR environment\. Objects include geometry, materials, and sounds that you import from a supported file format, and objects that you create in the scene like lights, cameras, and particle effects\. Behaviors include state machine behaviors, animations, timelines, and scripts\.

When you're ready to show off your scene, export it directly to Amazon CloudFront as a static website that you can open in a browser\.

See [Scenes](dashboard-scenes.md) for more information\.

## Components and Entities<a name="concepts-components"></a>

All objects and behaviors are *components* that combine to create *entities*\. For example, when you import a 3D model and add it to a scene, the editor creates an entity that has a geometry component, a material component, a transform component, and an animation component\. You can then use the editor to add a rigid body, colliders, and other components to the entity\.

See [Amazon Sumerian Entities](sumerian-entities.md) for more information\.

## Assets<a name="concepts-assets"></a>

Assets are the images, sounds, scripts, models, and documents that you import into Sumerian to use in a scene\. You can manage assets independently of the scenes that use them in the *asset library*\. Assets can belong to a user or project\.

See [Asset Packs](dashboard-assets.md) for more information\.

## Hosts<a name="concepts-hosts"></a>

A host is a asset provided by Sumerian that has built in animation, speech, and behavior for interacting with users\.

![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/hosts.png)

Hosts use Amazon Polly to speak to users from a text source\. You can use hosts to engage users and guide them through a VR experience\.

See [Amazon Sumerian Host Component](entities-host.md) for more information\.

## Projects<a name="concepts-projects"></a>

Projects are an organizational tool for managing scenes, assets, and templates\.

See [Projects](dashboard-projects.md) for more information\.

## Templates<a name="concepts-templates"></a>

Templates let you save a copy of a scene to use as a starting point for other scenes\. Templates belong to a project\. Sumerian provides several templates, which you can access from the dashboard\.

See [Templates](dashboard-templates.md) for more information\.