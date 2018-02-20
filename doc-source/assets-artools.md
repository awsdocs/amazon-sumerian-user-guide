# Amazon Sumerian Augmented Reality Tools<a name="assets-artools"></a>

Sumerian provides a template, assets, and sample project that you can use to develop augmented reality \(AR\) applications for iOS devices\.

The **Augmented Reality** scene template is available in the dashboard\. Use it as a starting point for your augmented reality scene\.

![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/templates-ar.png)

The scene includes the following resources\.

+ **AR Camera** – the main camera, with a script that maps it to the device's camera\.

+ **AR Camera Control** – a script that uses the Sumerian engine [AR System](https://docs.sumerian.amazonaws.com/engine/latest/docs/ArSystem.html) to access the device's augmented reality API\. You can view this script in the text editor\.

+ **ARAnchor** – an empty entity that is used by the augmented reality app to anchor objects in the scene to the real world\.

You can construct an augmented reality scene from this template by adding models and making them children of the **ARAnchor** entity\. Publish the scene, and then use the sample AR Kit project to build an app that uses it\.

The sample project, [amazon\-sumerian\-arkit\-starter\-app](https://github.com/aws-samples/amazon-sumerian-arkit-starter-app), is an XCode project with a Swift app that loads a scene created with the augmented reality template\. Replace the [scene URL in the view controller](https://github.com/aws-samples/amazon-sumerian-arkit-starter-app/blob/master/SumerianARKitStarter/ViewController.swift#L20) with the URL of your published scene, build the app, and then run it on a compatible iOS device to see it in action\.

See [Augmented Reality Using Sumerian and ARKit](https://docs.sumerian.amazonaws.com/tutorials/create/intermediate/augmented-reality-using-sumerian-arkit/) for a tutorial that uses these assets\.