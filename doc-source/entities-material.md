# The Amazon Sumerian Material Component<a name="entities-material"></a>

When you add a 3D model to your environment, it has at least two components\. The [geometry](entities-geometry.md) component defines the shape of the model\. The material component defines its textures and rendering properties\.

**Properties**

+ **Diffuse color** – the base color of the surface\.

  + **Color** – the base diffuse color\.

  + **Texture** – set the diffuse color from a texture\.

+ **Normal** – normal maps are a type of Bump Map\. They are a special kind of texture that allow you to add surface detail such as bumps, grooves, and scratches to a model which catch the light as if they are represented by real geometry\.

  You set the normal map via the **Texture** input, and you can alter its magnitude by setting the **Strength** value\.

+ **Specular** – specular effects are essentially the direct reflections of light sources in your scene which typically show up as bright highlights or shines on the surface of objects \(although specular highlights can be subtle or diffuse too\)\.

  You can set the base specularity **Color**, use a **Texture** and set the **shininess** value\.

+ **Emissive** – this is the self\-illumination color an object has\. You can set the emissive color using the **Color** input and/or via a **Texture**\.

+ **Ambient** – ambient color is the color of an object where it is in shadow\. This color is what the object reflects when illuminated by ambient light rather than direct light\.

  + **Color** sets the base ambient color\.

  + **Texture** this ambient map identifies areas on a mesh that are exposed or hidden from ambient lighting\.

+ **Opacity** – the opacity is used when using the *Transparent Blending* mode\. The **Strength** allows you to input a value between 0 and 1 where 0\.0 represents completely transparent and 1\.0 represents fully opaque\.

  + **Threshold** is used to indicate when a surface is completely transparent, and can be discarded from rendering\.

  + **Dual Transparency**

+ **Reflectivity**

  + **Texture** – reflectivity texture\.

  + **Environment** – environment map that you will see in the reflection\. If not selected, the current Skybox will be used\.

  + **Amount** – amount of reflectivity to use\.

  + **Fresnel** – a nonzero fresnel value will result in less reflection depending on the normal direction\.

+ **Refractivity** – the Refraction input takes in a texture or value that simulates the index of refraction of the surface\. This is useful for things like glass and water, which refract light that passes through them\. The environment texture will be used for the refraction\.

  + **Amount** – how much refraction to blend with the current color\.

  + **Refraction** – the ratio of the refractive indices involved in the refraction\.

+ **Blending** – the blending mode to use for the material\.

  + **NoBlending**

  + **TransparencyBlending**

  + **CustomBlending**

  + **AdditiveBlending**

  + **SubtractiveBlending**

  + **MultiplyBlending**

+ **Culling** – whether to cull on the triangle level, and which face \(back, front, both\) to cull\.

+ **Depth** – whether to enable depth testing, depth writing and which **RenderQueue** value to use\.

+ **Shading**

  + **Flat** – turns on flat shading for the mesh\.

  + **Wireframe** – renders the mesh in wireframe mode\.

  + **Wrap factor** – the wrap factor\.

  + **Wrap amount** – the wrap amount\.

Note that Material Assets can be shared between entities\. If a Material Asset is shared, changing the look of one entity will also change the ones which are sharing the material\.