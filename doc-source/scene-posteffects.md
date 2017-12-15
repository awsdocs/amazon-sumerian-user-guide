# Configuring Post Processing Effects for Your Amazon Sumerian Scene<a name="scene-posteffects"></a>

In the post effects panel it is possible to create a stack of effects, affecting the final render composition\. Post effect layers applied as render passes by the Sumerian engine\.

**To add post effects**

1. Open a scene in the Sumerian editor\.

1. Choose the root node in the **Entities** panel\.  
![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/editor-entities-scene.png)

1. Expand the **Post effects** section in the inspector panel\.  
![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/scene-sections-posteffects.png)

1. Choose **Add effects**\.

1. Choose one or more effects and then choose **Add**\.

1. Adjust the settings for each effect in the inspector panel\.

1. See how post effects affect rendering by clicking the post effects icon ![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/canvas-icons-posteffects.png) in the canvas toolbar to toggle them on and off\.

**Post effect properties**

+ **Antialias** – add FXAA based antialiasing to smooth out jagged edges\.

  + **Span** – the area of the smoothing effect\.

+ **Bloom** – intensify and create glow out of the high valued colors in the input\.

  + **Opacity** – the amount of bloom applied\.

  + **Size** – the size of the glow area\.

  + **Gain** – the amount of brightness added\.

  + **Intensity** – contrast\.

+ **Bleach** – alter input color by its luminance\.

  + **Opacity** – the blending multiplier for the effect\.

+ **Blur** – blur the entire scene to make it appear out of focus\.

  + **Amount** – the amount of blending\.

  + **Size** – the size of the blur area\.

+ **Contrast** – adjust the brightness, contrast and saturation\.

  + **Brightness** – remove or add brightness\.

  + **Contrast** – adjust the contrast\.

  + **Saturation** – adjust the color saturation\.

+ **Dot** – add a black and white lattice effect\.

  + **Angle** – the angle of the lattice\.

  + **Scale** – the thickness of the lattice\.

  + **SizeX** – skew the lattice on the X axis\.

  + **SizeY** – skew the lattice on the Y axis\.

+ **Edge detect** – add a *difference of Gaussians*\-based edge detection\.

  + **Gauss Sigma** – the base of the two Gaussian kernels\.

  + **Threshold** – the edge detection tolerance value\.

  + **Background %** – the amount of blending between the background and edge colors\.

  + **Edge Color** – the edge color\.

  + **Background Color** – the background color\.

+ **Film grain** – add noise and resolution lines\.

  + **Noise** – the amount of noise\.

  + **Line Intensity** – the sharpness of the lines\.

  + **Line Count** – the number of lines\.

+ **Hatch** – render the scene in black and white, with a lattice effect over black areas\.

  + **Width** – the width of the lattice lines\.

  + **Spread** – the distance between the lattice lines\.

+ **HSB** \(hue, saturation, and brightness\) – adjust colors of the scene\.

  + **Hue** – adjust the hue\.

  + **Saturation** – adjust the color saturation\.

  + **Brightness** – adjust the image brightness\.

+ **Levels** – apply gamma correction to the image\.

  + **Gamma** – adjust the gamma level\.

  + **Min input** and **Max input** – the gamma input range\.

  + **Min output** and **Max output** – the gamma output range\.

+ **Motion Blur** – apply a blur effect to objects that moved since the previous rendered frame\. If the camera moves, the entire image blurs\.

  + **Amount** – the amount of blending\.

  + **Scale** – overlay the previous frame on top of the current frame at a different scale to create a zooming or flying effect\.

+ **Noise** – add signal noise to the image\.

  + **Noise** – the amount of noise\.

+ **Overlay** – overlay a texture on the image\.

  + **Texture** – the texture asset\.

  + **Blend mode** – the method of blending the overlay and background\.

  + **Amount** – the amount of blending\.

+ **Radial** – add a radial blur to the image\.

  + **Offset** – the blur offset\.

  + **Multiplier** – the blur multiplier\.

+ **RGB shift** – split the image into red, green, and blue layers with an offset between layers\.

  + **Amount** – the distance between the layers\.

  + **Angle** – the angle in radians between the layers\.

+ **Sepia** – add a sepia color filter\.

  + **Amount** – the intensity of the effect\.

+ **Tint** – apply a color filter to the image\.

  + **Color** – the tint color\.

  + **Amount** – the intensity of the effect\.

+ **Vignette** – add a dark gradient around the edges of the image\.

  + **Offset** – the size of the gradient\.

  + **Darkness** – the strength of the gradient\.