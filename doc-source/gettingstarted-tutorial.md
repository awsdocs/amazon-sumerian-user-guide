# Getting Started with Amazon Sumerian<a name="gettingstarted-tutorial"></a>

To get started with Amazon Sumerian, assemble a scene from assets in the Sumerian library\. In less than an hour, you can create a scene with assets form the Sumerian asset library, state machine animation, and support for virtual reality \(VR\) headsets\. This tutorial also shows basic use of scripting with the speech component, which uses Amazon Polly to render text into audio\.

**Topics**
+ [Prerequisites](#gettingstarted-tutorial-prereqs)
+ [Create a Project and Scene](#gettingstarted-tutorial-create)
+ [Configure the Scene](#gettingstarted-tutorial-configure)
+ [Add and Configure Entities](#gettingstarted-tutorial-entities)
+ [Add Behavior](#gettingstarted-tutorial-behavior)
+ [Add VR Mode](#gettingstarted-tutorial-vrcamerarig)
+ [Publish and View the Scene](#gettingstarted-tutorial-publish)
+ [Clean Up](#gettingstarted-tutorial-cleanup)
+ [Next Steps](#gettingstarted-tutorial-nextsteps)

## Prerequisites<a name="gettingstarted-tutorial-prereqs"></a>

To use the Sumerian editor, you need permission to use Sumerian APIs on your IAM user\. Additionally, the scene itself needs permission to call Amazon Polly\. You provide this permission by creating a role and an Amazon Cognito identity pool\. Following the instructions at [Amazon Sumerian Permissions](sumerian-permissions.md) to set up both\.

You can use the editor in recent versions of Chrome or Firefox\. To view the finished scene in VR, use the latest version of Firefox\. For VR mode, you also need a compatible headset\.

**Supported VR Headsets**
+ Oculus Rift
+ Oculus Go
+ HTC Vive
+ HTC Vive Pro
+ Lenovo Mirage Solo
+ Samsung Gear VR
+ Google Daydream

## Create a Project and Scene<a name="gettingstarted-tutorial-create"></a>

Create a project and a scene\. The project can contain multiple scenes, as well as asset packs and templates that you create from those scenes\.

**To create a project and scene**

1. Open [the Sumerian dashboard](https://console.aws.amazon.com/sumerian/home)\.

1. Choose **Projects**, **New project**\.

1. Enter **tutorials** for the project name and then choose **Create**\.

1. Choose **Create new scene**\.

1. Enter **seesaw** for the scene name and then choose **Create**\.

## Configure the Scene<a name="gettingstarted-tutorial-configure"></a>

A skybox is a texture or set of textures that wraps around the scene to provide a background image\. Add a skybox from the Sumerian **Asset** library\.

**To import a skybox from the Sumerian library**

1. Choose **Import assets** at the top of the screen\.

1. Choose **Blue skysphere**\. If you don't find it right away, click the skybox icon ![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/assets-icons-skybox.png) to filter the list\.

1. Choose **Add**\.

This adds the skybox asset pack to the **Asset** panel\. The pack contains the skybox asset, and the PNG\-formatted texture that the skybox uses\. Add the skybox to the scene in the scene settings under **Environment**\. While you're there, add some fog and snow\.

**To configure the scene's environment**

1. Choose the root node \(**seesaw**\) in the **Entities** panel, or click on the background of the scene in the canvas\. The groups of options that appear in the inspector panel on the right side of the screen are *scene settings*\.

1. Click the **Environment** section to expand it\. Expand the **Skybox**, **Fog & Ambient**, and **Particles** sections under it\.

1. Click and drag the **Blue skysphere** skybox from the assets panel to the **Drop skybox** field in the inspector panel to attach it to the scene\.

1. Choose **Fog** to enable it and configure its parameters:
   + **Fog near** – **5**
   + **Fog far** – **20**

   This starts fading in fog at 5 units away from the camera, and completely obscures anything 20 units away or farther\.

1. Choose **Snow** to enable it, and then configure its parameters:
   + **Velocity** – **20**
   + **Rate** – **30**
   + **Height** – **100**

1. Click the play button at the bottom of the screen to see the snow fall\. Adjust the velocity and rate of the snow to your liking\. Changes to these settings are applied immediately during playback mode\.

Later in this tutorial, you configure the scene to use Amazon Polly to render text into audio during playback\. To do this, your scene needs credentials to use the AWS SDK for JavaScript in the web browser\. Give the scene credentials by assigning it the ID of the identity pool that you created in the [prerequisites section](#gettingstarted-tutorial-prereqs)\.

**To configure AWS SDK for JavaScript credentials**

1. Choose the root node in the **Entities** panel\.  
![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/editor-entities-scene.png)

1. Expand the **AWS configuration** section in the inspector panel\.

1. Enter the Amazon Cognito identity pool ID\.  
![\[The AWS configuration section of the inspector panel.\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/scene-sections-aws.png)

## Add and Configure Entities<a name="gettingstarted-tutorial-entities"></a>

Add some ground to the scene\.

**To add a snowy field to your scene**

1. Choose **Create entity**\.

1. Under **3D primitives**, choose the quad ![\[The quad icon.\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/entities-icons-quad.png)\.

   The quad is selected automatically\. If you select something else, you can click it in the canvas or entities panel to select it again

1. The quad's components appear in the inspector panel on the right side of the canvas\. Expand the top section and change the name of the entity to **ground**\. The change is reflected in the section name and entities panel immediately\.

1. Expand the **Transform** section, and then enter the following values:
   + **X rotation** – **\-90**
   + **X, Y, and Z scale** – **100**
   + **Static** – enabled  
![\[The transform section of the inspector panel.\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/gettingstarted-groundtransform.png)

1. Expand the **Material** section and review the settings on each layer\. You can click the diffuse or specular colors to choose a different color, or drop image files to add textures\.

The space near the camera right now is pretty dark\. Add a directional light to light the scene, like the sun is shining in it\.

**To add a directional light**

1. Choose **Create entity**\.

1. Under **Lights**, choose **Directional**\.

1. Expand the **Transform** section, and then enter the following values:
   + **Y translation** – **10**
   + **X rotation** – **\-30**
   + **Y rotation** – **\-60**
   + **Static** – enabled

1. Expand the **Light** section and enable **Shadows**\.

Add a blank entity to represent the seesaw, and shapes for the fulcrum and plank\.

**To add the seesaw**

1. Choose **Create entity**\.

1. Under **Others**, choose **Entity**\.

1. In the inspector panel, change the name of the entity to **seesaw**\.

1. Choose **Create entity**, and then add a cylinder to the scene\.

1. Rename the cylinder to **fulcrum**, uncheck **Uniform scale**, and set the **Z** scale to **0\.6**\. Set the diffuse color to yellow\.

1. Add a blank entity\. Rename it to **plank**\. This blank entity will serve as the parent to the plank model, as well as a camera and host entity that will move with the plank\.

1. Add a box entity\. Rename it to **plank model**\. Apply the following transform and set the diffuse color to blue:
   + **Y translation** – **\.5**
   + **Z rotation** – **12**
   + **X scale** – **4\.5**
   + **Y scale** – **0\.1**
   + **Z scale** – **0\.6**
   + **Static** – disabled

Next, import a host from the Sumerian library\. Hosts are Sumerian\-provided character models with built\-in animation and support for speech\.

**To add a host**

1. Choose **Import assets**\.

1. Choose **Cristine**, **Luke**, or **Preston**\. Then choose **Add**\.  
![\[Sumerian hosts.\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/hosts.png)

1. When the asset pack finishes loading, drag the host entity from the **Asset** panel to the canvas\.

1. Apply the following transform:
   + **X translation** – **1\.95**
   + **Y translation** – **0\.97**
   + **Z rotation** – **12**
   + **Y rotation** – **\-90**
   + **X, Y, and Z scale** – **1\.3**
   + **Static** – disabled

Finally, use the **Entities** panel to organize the entities that you created into a hierarchy\. Drag an entity onto another one to make them parent and child\.

![\[Seesaw entity hierarchy.\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/gettingstarted-hierarchy.png)

## Add Behavior<a name="gettingstarted-tutorial-behavior"></a>

You can add behavior to your scene by attaching script or state machine components to entities\.

A state machine lets you add behavior visually by choosing actions that are triggered by events, and organizing them into states\. Add a state machine to the plank entity to animate it and its children\.

**To animate the plank with a state machine\.**

1. Choose the **plank** in the entities panel\.

1. In the inspector panel, choose **Add component**\. Then choose **State machine**\.

1. Click the plus symbol next to the behavior field to create a new behavior\. Name it **animate**\.

1. The **State machine** panel appears with a single state\. Name the state **up** , and then choose **Add action**\.

1. Under **Animate**, choose **Tween rotate**\. Apply the following properties:
   + **Z rotation** – **\-24**
   + **Relative** – disabled
   + **Time** – **1000**
   + **Easing type** – **Linear**
   + **Direction** – **In**

1. Choose **Add action** again, and then add a **Wait** action\. Apply the following properties:
   + **Time** – **2000**
   + **Random** – **0**

1. In the **State machine** panel, choose **Duplicate state** to make a copy of **up**\. Double\-click the new state to open it in the inspector panel\.

1. Change the state's name to **down**, and then change the rotation value from **\-24** to **0**\.

1. In the **State machine** panel, each state shows two events, one that occurs at the end of the animation, and one that occurs at the end of the wait action\. Click the **On wait end** event under **up** and drag a line to the **down** state\. Then do the same in the other direction\.  
![\[Connecting state machine actions.\]](http://docs.aws.amazon.com/sumerian/latest/userguide/)

1. Play the scene to watch the seesaw animate\.

Add a camera to the other end of the seesaw and make it the default camera\. During playback, the user will stay in one location and look around the environment\. A built\-in camera script allows the user to look around with the mouse prior to entering VR mode\.

**To add a camera with mouse look controls**

1. Choose **Create entity**, and then add a fixed camera to the scene\. Rename it to **user**, and then apply the following transform:
   + **X translation** – **\-2\.5**
   + **Y translation** – **1\.2**
   + **Y rotation** – **\-90**

1. In the entities panel, drag the camera onto the **plank** entity to make it move with the seesaw\.

1. In the camera's **Camera** component, apply the following properties:
   + **Main camera** – enabled
   + **FOV** – **35**

1. Choose **Add component**, and then add a script component to the camera\.

1. Click the plus symbol next to the script field, and then choose **Mouse look control**\. This adds an instance of the mouse look built\-in script\. All instances of a script share the same script code, but have separate parameter values\.

1. To prevent the user from looking too low, change the **Min ascent** parameter to **\-40**\.

1. Play the scene and confirm the camera's behavior\. Click and drag the left mouse button to look around the scene\. You can adjust the script's parameters during playback and see how they affect the controls immediately\.

Hosts come with a speech component attached\. To use it, you need to add AWS credentials to your scene, add text files to the component, and add a script or state machine component to trigger the speech during playback\. 

For this example, you'll use a script to do something that the state machine can't—choose and play a file at random\. If you haven't already configured AWS credentials for your scene as described in the [prerequisites section](#gettingstarted-tutorial-prereqs), do that first\.

**To configure speech on the host**

1. Choose the host in the canvas or entities panel\.

1. Under **Speech**, drop some text files onto the speech field\. You can use the files in this archive: [sonnets\.zip](samples/sonnets.zip)\.

1. Choose a voice for the host\. See [Available voices](https://docs.aws.amazon.com/polly/latest/dg/voicelist.html) in the *Amazon Polly Developer Guide* for a list of voices sorted by locale\.

1. Add a script component to the host\.

1. Click the plus symbol next to the script field, and then choose **Custom**\.

1. Click edit \(pencil icon\) in the script instance parameters to open the script in the text editor\. You can also press the J key to open the text editor at any time\.

1. Double\-click the script name \(`Script`\) in the **Documents** list to change the name to **RandomSpeech**\.

1. Replace the placeholder `setup` function with the following\.

   ```
   var setup = function(args, ctx) {
     sumerian.SystemBus.addListener('aws.sdkReady',
       () => {
         var speechComponent = ctx.entity.getComponent("speechComponent");
         var speeches = speechComponent.speeches;
         var speech = speeches[Math.floor(Math.random() * speeches.length)];
         speech.play();
         },
         true
     );
   };
   ```

   This script waits for the AWS SDK for JavaScript to load and retrieve credentials\. Then it gets a reference to the speech component on the same entity \(the host\), and gets a list of all of the attached speeches\. It chooses a speech from the array and plays it\.

1. Play the scene to see the host recite a speech\.

1. Return to the speech component and click ![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/components-speech-addgestures.png) next to each speech file to add gesture markup\.

1. Play the scene again to see the host recite a speech with gestures\.

## Add VR Mode<a name="gettingstarted-tutorial-vrcamerarig"></a>

So far you've only used a standard camera in playback mode\. Add a virtual reality \(VR\) rig to let users view the scene in 3D with a VR headset and head tracking\. Sumerian bundles the entities and scripts required for VR mode in an asset pack named **CoreVR**\.

**To add VR mode**

1. Choose **Import assets**, and then add the **CoreVR** asset pack to your scene\.

1. When the asset pack finishes loading, drag the **VRCameraRig** entity onto the canvas to add it to your scene\.

1. Choose the **VRCameraRig** entity\.

1. Choose the **VRCameraRig** component\.

1. Choose the **Current VR camera rig** option to enable the rig\.

1. Uncheck the **Start at current camera** option\. This enables use of the camera rig where it's placed in the scene, instead of using the location of the non\-VR camera when the user enters VR mode\.

1. In the entities panel, drag the **VRCameraRig** entity onto the **plank** entity to make it a sibling to the user camera\.

1. Choose the **user** camera\. Click the cog icon on the **Transform** section, and then choose **Copy** to copy the transform values\.

1. Choose the **VRCameraRig**\. Click the cog icon on the **Transform** section, and then choose **Paste** to paste the transform values from the user camera\.

1. Use the green transform handle to adjust the height of the VR camera relative to the plank\.  
![\[Transform handles on the VR camera rig.\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/gettingstarted-vrcamera.png)

1. Play the scene and click the VR headset icon to enter VR mode\.

## Publish and View the Scene<a name="gettingstarted-tutorial-publish"></a>

Time to share your scene with the world\. Publish the scene with Amazon CloudFront to host it as a website that anyone can see\.

**To publish the scene**

1. Open your scene in the Sumerian editor\.

1. Choose **Publish**\.

1. Choose **Create public link**\.

1. Choose **Publish**\.

## Clean Up<a name="gettingstarted-tutorial-cleanup"></a>

Your published scene is public and will stay online until you unpublish it\.

**To unpublish the scene**

1. Choose **Publish**\.

1. Choose **Unpublish**\.

1. Choose **Unpublish**\.

You can keep the Sumerian scene and project around for use with other tutorials, or delete them\. You can always restore the deleted items later from the trash menu\.

**To delete the project**

1. Open [the Sumerian dashboard](https://console.aws.amazon.com/sumerian/home)\.

1. Choose a project\.

1. Under **Project details**, choose **Delete**\.

If you created an identity pool for this tutorial and don't plan to use it again, delete it in the [Amazon Cognito console](https://console.aws.amazon.com/cognito)\.

## Next Steps<a name="gettingstarted-tutorial-nextsteps"></a>

Learn more about Sumerian in the next chapter, [Amazon Sumerian Concepts](sumerian-concepts.md)\.