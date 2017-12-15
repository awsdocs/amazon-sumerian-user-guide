# The Amazon Sumerian VR Camera Rig Component<a name="entities-vrcamerarig"></a>

The VR camera rig component configures a virtual reality headset and controllers for use in VR mode during playback\. When a user has a supported headset, they can click the VR button to switch between the main camera and the head mounted display \(HMD\) camera that represents a VR headset\.

**Supported Hardware**

+ Oculus Rift

+ HTC Vive

Attach the VR camera rig component to an entity with child entities for the HMD camera and each VR controller\. The **CoreVR** asset pack in the Sumerian library contains a rig entity with an HMD camera and 4 controllers, 2 for each supported headset\.

**Note**  
See [Getting Started with VR](https://docs.sumerian.amazonaws.com/tutorials/create/intermediate/getting-started-vr/) for a tutorial that uses these components\.

When a user enters VR mode with a headset and controllers attached, the HMD camera tracks the headset, and the VR controller components track the controllers in 3D space\. Only the controllers of the type attached are rendered in the scene, so you can leave all of the included entities attached to support both types\.

**To add a VR camera rig to your scene**

1. Open a scene in the Sumerian editor\.

1. Choose **Import assets**\.

1. Choose **VRCore** and then choose **Add**\.

1. When the asset finishes processing, drag it onto the canvas to add it to your scene\.

1. Choose the **VRCameraRig** entity\.

1. Choose the **VRCameraRig** component\.

1. Check the **Current VR camera rig** option to enable the rig\.

**Properties**

+ **Load gamepads** – uncheck to disable controllers\.

+ **Start at current camera** – uncheck to use the camera from its transform location, instead of swapping out the main camera for the VR rig when the user enters VR mode\.

+ **Current VR camera rig** – check to use this rig in VR mode\.