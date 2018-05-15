# Amazon Sumerian Augmented Reality Tools<a name="assets-artools"></a>

Sumerian provides a template, assets, and sample projects that you can use to develop augmented reality \(AR\) applications for iOS and Android devices\.

The **Augmented Reality** scene template is available in the [dashboard](sumerian-dashboard.md)\. Use it as a starting point for your augmented reality scene\.

![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/templates-ar.png)

The scene includes the following resources:
+ **AR Camera** – The main camera, with a script that maps it to the device's camera\.
+ **AR Camera Control** – A script that uses the Sumerian engine [AR System](https://content.sumerian.amazonaws.com/engine/latest/docs/ArSystem.html) to access the device's augmented reality API\. You can view this script in the text editor\.
+ **ARAnchor** – An empty entity that the AR app uses to anchor objects in the scene to the real world\.

You can construct an AR scene from this template by adding models and making them children of the **ARAnchor** entity\. Publish the scene, and then use the sample AR Kit project to build an app that uses it\.

**Topics**
+ [Android Sample Project](#assets-artools-android)
+ [iOS Sample Project](#assets-artools-ios)

## Android Sample Project<a name="assets-artools-android"></a>

The sample project, [amazon\-sumerian\-arcore\-starter\-app](https://github.com/aws-samples/amazon-sumerian-arcore-starter-app), is an Android Studio project with an ARCore app that loads a scene created with the AR template\. Replace the [scene URL in the view controller](https://github.com/aws-samples/amazon-sumerian-arcore-starter-app/blob/master/SumerianARCoreStarter/app/src/main/java/com/amazon/sumerianarcorestarter/MainActivity.java#L41) with the URL of your published scene, build the app, and then run it on a compatible Android device to see it in action\.

See the [Augmented Reality Using Sumerian and ARCore](https://docs.sumerian.amazonaws.com/tutorials/create/intermediate/augmented-reality-using-sumerian-arcore/) tutorial to explore how to use these assets\.

## iOS Sample Project<a name="assets-artools-ios"></a>

The sample project, [amazon\-sumerian\-arkit\-starter\-app](https://github.com/aws-samples/amazon-sumerian-arkit-starter-app), is an XCode project with a Swift app that loads a scene created with the AR template\. Replace the [scene URL in the view controller](https://github.com/aws-samples/amazon-sumerian-arkit-starter-app/blob/master/SumerianARKitStarter/ViewController.swift#L20) with the URL of your published scene, build the app, and then run it on a compatible iOS device to see it in action\.

See the [Augmented Reality Using Sumerian and ARKit](https://docs.sumerian.amazonaws.com/tutorials/create/intermediate/augmented-reality-using-sumerian-arkit/) tutorial to explore how to use these assets\.