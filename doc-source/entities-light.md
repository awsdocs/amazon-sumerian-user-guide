# The Amazon Sumerian Light Component<a name="entities-light"></a>

The light component adds a light source to the entity\.

**Properties**

+ **Type**

  + **Point** – emits light in all directions from a point in space, like a flame\.

  + **Directional** – emits light uniformly over the entire scene, like the sun\.

  + **Spot** – emits light in a cone, like a spotlight\.

+ **Color** – the color of the light\.

+ **Intensity** – the intensity of the light \(typically between 0 and 1\)\.

+ **Specular** – the intensity of the specular light \(typically between 0 and 1\)\.

+ **Range** \(point and spot\) – 

+ **Cone angle** \(spot\) – the angle of the cone at the light source, in degrees\.

+ **Penumbra** \(spot\) – the intensity of the light near the edges of the cone\.

+ **Projection** \(directional and spot\) – upload a texture to apply to the light\.

+ **Shadows** \(directional and spot\) – cast shadows from objects that the light hits\.