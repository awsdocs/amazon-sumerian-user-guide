# Amazon Sumerian Light Component<a name="entities-light"></a>

The light component adds a light source to the entity\.

**Properties**
+ **Type**
  + **Point** – Emit light in all directions from a point in space, like a flame\.
  + **Directional** – Emit light uniformly over the entire scene, like the sun\.
  + **Spot** – Emit light in a cone, like a spotlight\.
+ **Color** – The color of the light\.
+ **Intensity** – The intensity of the light \(typically between 0 and 1\)\.
+ **Specular** – The intensity of the specular light \(typically between 0 and 1\)\.
+ **Range** \(point and spot\) – 
+ **Cone angle** \(spot\) – The angle of the cone at the light source, in degrees\.
+ **Penumbra** \(spot\) – The intensity of the light near the edges of the cone\.
+ **Projection** \(directional and spot\) – Upload a texture to apply to the light\.
+ **Shadows** \(directional and spot\) – Cast shadows from objects that the light hits\.