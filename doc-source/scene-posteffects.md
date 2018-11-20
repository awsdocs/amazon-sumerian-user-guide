# Configuring Post\-Processing Effects for Your Amazon Sumerian Scene<a name="scene-posteffects"></a>

In the post effects section of the inspector panel, you can add rendering effects like antialiasing and motion blur\. Post effects are not compatible with VR mode\.

**To add post effects**

1. Open a scene in the Sumerian editor\.

1. Choose the root node in the **Entities** panel\.  
![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/editor-entities-scene.png)

1. Expand the **Post effects** section in the inspector panel\.  
![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/scene-sections-posteffects.png)

1. Choose **Add effects**\.

1. Choose one or more effects, and then choose **Add**\.

1. Adjust the settings for each effect in the inspector panel\.

1. See how post effects affect rendering by clicking the post effects icon ![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/canvas-icons-posteffects.png) in the canvas toolbar to toggle them on and off\.

**Post effects properties**
+ **Antialias** – Add FXAA\-based antialiasing to smooth out jagged edges\.
  + **Span** – The area of the smoothing effect\.
+ **Bloom** – Make bright background colors bleed over the edges of foreground objects\.
  + **Opacity** – The amount of bloom applied\.
  + **Size** – The size of the glow area\.
  + **Gain** – The amount of brightness added\.
  + **Intensity** – The amount of contrast\.
+ **Bleach** – Alter input color by its luminance\.
  + **Opacity** – The blending multiplier for the effect\.
+ **Blur** – Blur the entire scene to make it appear out of focus\.
  + **Amount** – The amount of blending that causes the blur\.
  + **Size** – The size of the blur area\.
+ **Contrast** – Adjust the brightness, contrast, and saturation\.
  + **Brightness** – Remove or add brightness\.
  + **Contrast** – Adjust the contrast\.
  + **Saturation** – Adjust the color saturation\.
+ **Dot** – Add a black\-and\-white lattice effect\.
  + **Angle** – The angle of the lattice\.
  + **Scale** – The thickness of the lattice\.
  + **SizeX** – Skew the lattice on the X axis\.
  + **SizeY** – Skew the lattice on the Y axis\.
+ **Edge detect** – Add a *difference of Gaussians*\-based edge detection\.
  + **Gauss Sigma** – The base of the two Gaussian kernels\.
  + **Threshold** – The edge detection tolerance value\.
  + **Background %** – The amount of blending between the background and edge colors\.
  + **Edge Color** – The edge color\.
  + **Background Color** – The background color\.
+ **Film grain** – Add noise and resolution lines\.
  + **Noise** – The amount of noise\.
  + **Line Intensity** – The sharpness of the lines\.
  + **Line Count** – The number of lines\.
+ **Hatch** – Render the scene in black and white, with a lattice effect over black areas\.
  + **Width** – The width of the lattice lines\.
  + **Spread** – The distance between the lattice lines\.
+ **HSB** \(hue, saturation, and brightness\) – Adjust colors of the scene\.
  + **Hue** – Adjust the hue\.
  + **Saturation** – Adjust the color saturation\.
  + **Brightness** – Adjust the image brightness\.
+ **Levels** – Apply gamma correction to the image\.
  + **Gamma** – Adjust the gamma level\.
  + **Min input** and **Max input** – The gamma input range\.
  + **Min output** and **Max output** – The gamma output range\.
+ **Motion Blur** – Apply a blur effect to objects that moved since the previous rendered frame\. If the camera moves, the entire image blurs\.
  + **Amount** – The amount of blending\.
  + **Scale** – Overlay the previous frame on top of the current frame at a different scale to create a zooming or flying effect\.
+ **Noise** – Add signal noise to the image\.
  + **Noise** – The amount of signal noise\.
+ **Overlay** – Overlay a texture on the image\.
  + **Texture** – The texture asset\.
  + **Blend mode** – The method of blending the overlay and background\.
  + **Amount** – The amount of blending\.
+ **Radial** – Add a radial blur to the image\.
  + **Offset** – The blur offset\.
  + **Multiplier** – The blur multiplier\.
+ **RGB shift** – Split the image into red, green, and blue layers with an offset between layers\.
  + **Amount** – The distance between the layers\.
  + **Angle** – The angle in radians between the layers\.
+ **Sepia** – Add a sepia color filter\.
  + **Amount** – The intensity of the effect\.
+ **Tint** – Apply a color filter to the image\.
  + **Color** – The tint color\.
  + **Amount** – The intensity of the effect\.
+ **Vignette** – Add a dark gradient around the edges of the image\.
  + **Offset** – The size of the gradient\.
  + **Darkness** – The strength of the gradient\.