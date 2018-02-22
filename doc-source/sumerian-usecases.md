# Amazon Sumerian Use Cases and Requirements<a name="sumerian-usecases"></a>

At the core of Amazon Sumerian is a web\-based editor for constructing 3D scenes with animation, scripted interaction, and special effects\. The editor runs in your web browser, and all of your data is stored in AWS\. The editor outputs scenes to Amazon CloudFront as a static website that you can load directly into any WebVR\-compatible browser and headset, or embed in your website for others to access\.

**Note**  
Don't know how to script? The Sumerian editor provides a fully featured state machine for scripting animations and user interactions visually, with no coding required\.

WebVR is an open specification that lets you create and share virtual reality \(VR\) experiences through the web\. WebVR applications, like any web app, are supported on several desktop and mobile operating systems\. This enables you to avoid the need to port your application to different programming languages and package formats to reach all users\. Sumerian provides tools and components that you can use to [add VR to your scene](assets-vrtools.md)\.

Sumerian also lets you create augmented reality \(AR\) applications\. An AR application can use your phone's camera or an AR\-compatible headset to overlay graphics on the real world\. Sumerian provides a [template and sample application](assets-artools.md) for creating ARKit applications for iOS phones\.

Sumerian provides a library of optimized 3D objects and scene templates that you can use to construct scenes without any existing assets\. If you do have 3D models, you can import them with their animations and textures by dragging them from your file system into the editor canvas\. Sumerian supports models in `OBJ` and `FBX` formats\.