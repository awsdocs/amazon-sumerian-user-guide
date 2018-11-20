# Amazon Sumerian Virtual Reality Tools<a name="assets-vrtools"></a>

Sumerian provides a pack of virtual reality \(VR\)\-related assets to make it easy to enable VR in your scene\. The asset pack includes a VR camera that lets the user enter VR mode, and VR controllers for interacting with the environment\.

**Supported VR Headsets**
+ Oculus Rift
+ Oculus Go
+ HTC Vive
+ HTC Vive Pro
+ Lenovo Mirage Solo
+ Samsung Gear VR
+ Google Daydream

**To enable VR in your scene**

1. Open a scene in the Sumerian editor\.

1. Choose **Import assets**\.

1. Choose **CoreVR**, and then choose **Add**\.

1. When the asset pack finishes loading, drag the **VRCameraRig** entity onto the canvas to add it to your scene\.

1. Choose the **VRCameraRig** entity\.

1. Choose the **VRCameraRig** component\.

1. Choose the **Current VR camera rig** option to enable the rig\.

When a user enters VR mode with a headset and controllers attached, the [HMD camera](entities-hmdcamera.md) tracks the headset, and the [VR controllers](entities-vrcontroller.md) track the controllers in 3D space\. The [VR camera rig](entities-vrcamerarig.md) manages the other entities and enables the VR mode button in the scene\.

Only the controllers of the type attached are rendered in the scene, so you can leave all of the included entities attached to support both types\. You can also replace the included controller models with your own\.

See [Getting Started with VR](https://docs.sumerian.amazonaws.com/tutorials/create/beginner/getting-started-vr/) for a tutorial that uses these assets\.