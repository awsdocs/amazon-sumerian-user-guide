# Amazon Sumerian Camera Component<a name="entities-camera"></a>

The camera component turns any entity into a camera\.

**Properties**
+ **Main camera** – Use this camera at the beginning of the scene\. If you have multiple cameras, you can switch between them during both edit and playback modes\.
+ **Follow editor camera** – Set the camera position with the editor camera\. This is useful when switching between edit and play modes\.
+ **Projection** – Control how the camera projects the 3D world on the 2D canvas\.
+ **Field of view \(FOV\)** – Set the number of degrees from left to right that the camera spans\.
+ **Clipping planes** – Set the distance from the camera at which objects are drawn\.

New scenes include a default camera that follows the position of the editor camera\. When you play the scene, the view matches what you last saw in the editor\. To fix the starting position of the camera during playback, clear the **Follow editor camera** check box\. Zoom out to see the default camera and its viewing frustrum, which you can adjust with the field of view and clipping settings\.

To add a camera to your scene, choose one of the standard camera types from the [Create entity](sumerian-entities.md) menu, or add a camera component to any entity\.

**Standard Cameras**
+ **2D cam** – A parallel projection camera with pan and zoom controls\.
  + Middle mouse – Pan\.
  + Mouse wheel – Zoom\.
+ **Fixed cam** – A perspective camera with no built\-in controls\.
+ **Fly cam** – A perspective camera with mouse and keyboard controls\.
  + Left mouse – Look around\.
  + W, A, S, D – Move forward, left, backward, and right\. Hold Shift to move slowly\.
+ **Orbit cam** – A perspective camera with orbit, pan, and zoom controls\.
  + Middle mouse – Pan\.
  + Right mouse – Orbit\.
  + Mouse wheel – Zoom\.

Add or customize camera controls with the [built\-in camera scripts](scripting-builtins.md)\. Parameters on the scripts, which are also used by the standard camera types, let you customize the camera's controls and behavior\.

To manage cameras during playback, use a state machine or script\.

**Topics**
+ [State Machine](#entities-camera-statemachine)
+ [Script](#entities-dialogue-script)

## State Machine<a name="entities-camera-statemachine"></a>

To manage cameras, add a [state machine](entities-statemachine.md) to any entity in your scene\. Use actions to change the active camera in response to user input\.

**Example States for camera control**  
+ **Ready** – 4 **Key pressed** actions listen for number keys and transition to the next state\.
+ **Cam 1** through **Cam 4** – **Switch camera** changes the active camera\. **Transition** returns to the ready state\.

![\[State machine behavior for camera controls.\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/components-camera-statemachine.png)

For more information, see [Audio and Camera State Machine Actions in Amazon Sumerian](statemachines-audio.md)\.

## Script<a name="entities-dialogue-script"></a>

You can use a script to change the active camera during playback by sending the `sumerian.setCurrentCamera` message on the system bus\. 

The following example adds controls to switch between four fixed cameras\. Each camera entity has a script that stores its ID in the context object during setup\.

**Example Scene**  
Use the buttons to switch between cameras\.

**Example Camera Script**  

```
'use strict';
function setup(args, ctx) {
	ctx.worldData.camera1id = ctx.entity.id;
}
```

Buttons defined in an HTML component on another entity define the controls\.

**Example Button HTML**  

```
<style>
  button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 5px 5px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
  }

  button:hover {
    background-color: green;
  }
  
</style>
<div id="button-div">
  <button id="button1" camera="1" type="button">1</button>
  <button id="button2" camera="2" type="button">2</button>
  <button id="button3" camera="3" type="button">3</button>
  <button id="button4" camera="4" type="button">4</button>
</div>
```

The script on the buttons' entity adds a listener to each button with a function to change the camera\.

**Example Button Script**  

```
'use strict';

function setup(args, ctx) {
  ctx.entityData.changeCamera = function(event){
    var camera = event.target.getAttribute("camera");
    var cameraEntity = null; 
	  switch(camera) {
    case "1":
	    cameraEntity = ctx.world.entityManager.getEntityById(ctx.worldData.camera1id);
      break;
    case "2":
	    cameraEntity = ctx.world.entityManager.getEntityById(ctx.worldData.camera2id);
      break;
    case "3":
	    cameraEntity = ctx.world.entityManager.getEntityById(ctx.worldData.camera3id);
      break;
    case "4":
	    cameraEntity = ctx.world.entityManager.getEntityById(ctx.worldData.camera4id);
      break;
    default:
      cameraEntity = ctx.world.entityManager.getEntityById(ctx.worldData.camera3id);
	}
  if (cameraEntity && cameraEntity.cameraComponent) {
	  sumerian.SystemBus.emit('sumerian.setCurrentCamera', {
        camera: cameraEntity.cameraComponent.camera,
        entity: cameraEntity,
      });
    }
  };
  document.getElementById("button1").addEventListener('click', ctx.entityData.changeCamera);
  document.getElementById("button2").addEventListener('click', ctx.entityData.changeCamera);
  document.getElementById("button3").addEventListener('click', ctx.entityData.changeCamera);
  document.getElementById("button4").addEventListener('click', ctx.entityData.changeCamera);
  document.getElementById("button1").addEventListener('touchstart', ctx.entityData.changeCamera);
  document.getElementById("button2").addEventListener('touchstart', ctx.entityData.changeCamera);
  document.getElementById("button3").addEventListener('touchstart', ctx.entityData.changeCamera);
  document.getElementById("button4").addEventListener('touchstart', ctx.entityData.changeCamera);
}
```