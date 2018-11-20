# Amazon Sumerian VR Camera Rig Component<a name="entities-vrcamerarig"></a>

The VR camera rig component configures a virtual reality \(VR\) headset and controllers for use in VR mode during playback\. When a user has a supported headset, they can click the VR button to switch between the [main camera](entities-camera.md) and the [head mounted display \(HMD\) camera](entities-hmdcamera.md) that represents a VR headset\.

**Supported VR Headsets**
+ Oculus Rift
+ Oculus Go
+ HTC Vive
+ HTC Vive Pro
+ Lenovo Mirage Solo
+ Samsung Gear VR
+ Google Daydream

Attach the VR camera rig component to an entity with child entities for the HMD camera and each VR controller\. The [CoreVR asset pack](assets-vrtools.md) in the Sumerian library contains a rig entity with an HMD camera and controllers for each supported headset\.

**Properties**
+ **Load gamepads** – Deselect to disable controllers\.
+ **Start at current camera** – Deselect to use the camera from its transform location, instead of swapping out the main camera for the VR rig when the user enters VR mode\.
+ **Current VR camera rig** – Select to use this rig in VR mode\.