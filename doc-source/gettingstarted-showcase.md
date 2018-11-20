# Building a Model Showcase<a name="gettingstarted-showcase"></a>

To showcase the [sample model](gettingstarted-robin.md), the example scene uses a state machine and one of the built\-in camera types\. The state machine waits for user input \(click or touch\), and triggers one of the animations included in the model at random\. The orbit camera type supports both mouse and touch input for orbiting, zooming, and panning\.

**Example Model Showcase**  

Use the following procedures to recreate the sample scene\.

**To add the state machine behavior**

1. Choose the parent entity, and then choose **Add component**, **State machine**\.

1. To create a behavior, choose the plus symbol in the state machine panel\. Add the following states and actions\.  
**Example States for triggering animation**  
   + **initialize** – **Pause animation** pauses all animations on the entity\. This prevents the default animation from playing when the scene starts\. **Click/tap on entity** transitions to the next state when the user interacts with the model\.
   + **randomizer** – **Random transition** chooses between two states\. Chain multiple randomizer states together to link to all available animations\.
   + **animate** – **Set animation** sets the active animation\. After the animation plays for the specified number of loops, it transitions to the next state\. **Resume animation** plays the animation\.  
![\[\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/sample-robin-statemachine.png)

The scene camera has an *orbit and pan* script that supports the following controls\.

**Controls**
+ **Orbit** – Right\-click and drag, or touch and drag\.
+ **Pan** – Middle\-click and drag, or two\-finger touch and drag\.
+ **Zoom** – Mouse wheel or pinch\.

Add the camera to the scene and configure it to orbit around the origin point, where the model is\.

**To add the camera**

1. To add a camera to the scene, choose **Create entity**, **Orbit camera**\.

1. In the transform component, apply the following settings:
   + **X translation** – **5\.5**
   + **Y translation** – **3\.5**
   + **Z translation** – **4**
   + **X rotation** – **\-20**
   + **Y rotation** – **50**

1. In the camera component, apply the following settings:
   + **Main camera** – **enabled**
   + **FOV** – **30**

1. In the script component, apply the following setting:
   + **Look at distance** – **7\.65**

The *look at distance* is the distance from the camera to the model, so the model stays in the center of the screen as you click\-drag or touch\-drag to move the camera around\. If you move the camera to a different starting point, you can recalculate the look at distance by taking the square root of the sum of the squares of the camera's X, Z, and Y translations\.

Set the background color in the scene's [environment settings](scene-environment.md)\.

**To set the background color**

1. Choose the root node in the **Entities** panel\.  
![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/editor-entities-scene.png)

1. Expand the **Environment** section in the inspector panel\.  
![\[\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/scene-sections-environment.png)

1. Choose the background color square\.

1. To choose a color, use the color picker or enter a hex or RGB color code\. The example scene uses color hex `adcac8`\.

Play the scene in the editor, or [publish it](editor-publish.md)\.