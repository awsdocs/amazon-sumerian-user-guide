# Amazon Sumerian Material Component<a name="entities-material"></a>

When you add a 3D model to your environment, it has at least two components\. The [geometry component](entities-geometry.md) defines the shape of the model\. The material component defines its textures and rendering properties\.

**Properties**
+ **Diffuse color** – The base color of the surface\.
  + **Color** – The base diffuse color\.
  + **Texture** – The diffuse color from a texture\.
+ **Normal** – A type of bump map\. Normal maps are a special kind of texture that you use to add surface detail such as bumps, grooves, and scratches to a model\. These details catch the light as if they are represented by real geometry\.

  You set the normal map via the **Texture** input, and you can alter its magnitude by setting the **Strength** value\.
+ **Specular** – Specular effects, which are essentially the direct reflections of light sources in your scene\. These typically show up as bright highlights or shininess on the surface of objects \(although specular highlights can be subtle or diffuse, too\)\.

  You can set the base specularity **Color**, use a **Texture**, and set the **shininess** value\.
+ **Emissive** – The self\-illumination color of an object\. You can set the emissive color by using the **Color** input and/or by using a **Texture**\.
+ **Ambient** – The color of an object where it is in shadow\. This color is what the object reflects when illuminated by ambient light instead of direct light\.
  + **Color** The base ambient color\.
  + **Texture** Ambient map that identifies areas on a mesh that are exposed or hidden from ambient lighting\.
+ **Opacity** – Used with transparency blending\. You can use **Strength** to input a value between 0 and 1, where 0\.0 represents completely transparent and 1\.0 represents fully opaque\.
  + **Threshold** – Used to indicate when a surface is completely transparent, and can be discarded from rendering\.
  + **Dual transparency** – Render both front and back surfaces of the material\.
+ **Reflectivity** – Reflectivity settings for the material\.
  + **Texture** – Reflectivity texture\.
  + **Environment** – Environment map that you see in the reflection\. If not selected, the current skybox is used\.
  + **Amount** – Amount of reflectivity to use\.
  + **Fresnel** – A nonzero fresnel value results in less reflection, depending on the normal direction\.
+ **Refractivity** – Refraction input\. Takes in a texture or value that simulates the surface's index of refraction\. This is useful for things like glass and water, which refract light that passes through them\. The environment texture is used for the refraction\.
  + **Amount** – How much refraction to blend with the current color\.
  + **Refraction** – Ratio of the refractive indices involved in the refraction\.
+ **Blending** – Blending mode to use for the material\.
  + **NoBlending**
  + **TransparencyBlending**
  + **CustomBlending**
  + **AdditiveBlending**
  + **SubtractiveBlending**
  + **MultiplyBlending**
+ **Culling** – Whether to cull on the triangle level, and which face \(back, front, both\) to cull\.
+ **Depth** – Whether to enable depth testing or depth writing, and which **RenderQueue** value to use\.
+ **Shading**
  + **Flat** – Turn on flat shading for the mesh\.
  + **Wireframe** – Render the mesh in wireframe mode\.
  + **Wrap factor** – The light wrap factor\.
  + **Wrap amount** – The light wrap amount\.

**Note**  
You can share material assets between entities\. If a material asset is shared, changing the look of one entity also changes the ones that are sharing the material\.