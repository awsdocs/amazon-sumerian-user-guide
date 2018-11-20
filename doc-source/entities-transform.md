# Amazon Sumerian Transform Component<a name="entities-transform"></a>

The transform component contains the local transform of the component –translation, rotation, and scale\. The transform is relative to its parent\.

**Properties**
+ **Translation** – Position of the object relative to its parent\.
+ **Rotation** – Rotation of the object in degrees\.
+ **Scale** – Size of the object\.
+ **Uniform scale** – Proportions to maintain when scale is modified on any axis\.
+ **Static** – Flag entities in your scene that do not move\. During playback, Sumerian combines static entities with others that use the same [material](entities-material.md) to improve performance\. Use [scene stats](scene-scenestats.md) to see how this affects the number of draw calls required to render your scene\.