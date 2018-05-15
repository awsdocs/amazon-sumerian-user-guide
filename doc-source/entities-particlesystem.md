# Amazon Sumerian Particle System Component<a name="entities-particlesystem"></a>

The particle system component simulates fluid entities such as liquids, clouds, and flames by generating and animating large numbers of small 2D images in the scene\.

**Properties**
+ **General** – The basic behavior of the particle emitter\.
  + **Auto play** – Start the emission animation when the scene starts\.
  + **Loop** – Loop the animation\.
  + **Duration** – Duration of the animation in seconds\.
  + **Prewarm** – Load the effect prior to playback\.
  + **Max particles** – Limit the number of visible particles\.
  + **Gravity** – Vector of the gravity force that applies to particles\.
  + **Seed** – Randomization seed\. Experiment with values to find a look that you like, or set to `-1` to get a different effect each time\.
  + **Local space simulation** – Set to true to simulate the particle system within the boundaries of the parent entity, instead of in the entire scene\.
+ **Emitter shape** – The shape and size of the emitter\. Additional settings are specific to each shape\.

**Box**
  + **Random direction** – Emit each particle in a random direction\.
  + **Box extents** – The height, width, and length of the emitter\.

**Sphere**
  + **Radius** – The size of the emitter\.
  + **Emit from shell** – Emit particles from the outside edge of the emitter\.
  + **Random direction** – Emit each particle in a random direction\.

**Cone**
  + **Random direction** – Emit each particle in a random direction\.
  + **Emit from** – Emit particles from the narrow end of the cone \(**Base**\), the center of the cone \(**Volume**\), or the edges of the cone \(**Volumeedge**\)\.
  + **Cone radius** – The radius of the cone at the narrow end\.
  + **Cone angle** – The angle at which the sides of the cone flare out\.
  + **Cone length** – The length of the sides of the cone\.
+ **Over duration properties** – Fine tune values that apply to each loop of animation\. Each value can be constant, or progress linearly or randomly over the duration\.
  + **Emission rate** – The number of particles emitted per second\.
  + **Start speed** – The speed of the particles\.
  + **Start size** – The size of the particles\.
  + **Start color** – The color of the particles\.
  + **Start life time** – The number of seconds before each particle disappears\.
  + **Start angle** – The angle of particles\.
+ **Over lifetime properties** – Fine tune values that apply to the entire lifetime of the particle emitter\. Each value can be constant, or progress linearly or randomly over the lifetime\.
  + **Color** – The color of the particles\. Compounds with the duration color\.
  + **Size** – The size of the particles\. Compounds with the duration size\.
  + **Rotation speed** – Rotation of particles in degrees per second\.
  + **Local velocity** – Local space velocity in units per second\.
  + **World velocity** – World space velocity in units per second\.
+ **Texture** – The texture of each particle\. Use one of the provided textures or choose **custom** to upload a texture\.
+ **Texture animation**
  + **Texture tiles** – The number of tiles in the sprite sheet, in X and Y directions\.
  + **Cycles** – The number of texture animation cycles to finish over the lifetime\.
  + **Frame over lifetime** – A curve specifying when to show which frame in the animation\. `0` is the first frame and `1` is the last\. A linear curve starting at 0 and ending at 1 traverses all frames in the animation\.
+ **Rendering** – Customize the rendering behavior\.
  + **Billboard** – Particles always face the camera\.
  + **Render queue** – Render queue of the particle mesh\.
  + **Render queue offset** – Offset added to the render queue\.
  + **Blending** – The type of blending \(**None**, **Additive**, **Subtractive**, **Multiply**, or **Transparency**\)\.
  + **Depth write** – Write to the depth buffer\.
  + **Depth test** – Test against the depth buffer\.
  + **Sorting mode** – The draw order for particles \(**None** or **Camera distance**\)\. For transparency blending, camera distance sorting is recommended\.
  + **Opacity threshold** – The lower alpha threshold at which fragments are discarded\.