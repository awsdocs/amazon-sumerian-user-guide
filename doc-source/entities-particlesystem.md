# The Amazon Sumerian Particle System Component<a name="entities-particlesystem"></a>

The particle system component simulates fluid entities such as liquids, clouds and flames by generating and animating large numbers of small 2D images in the scene\.

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

  + **Random direction** – emit each particle in a random direction\.

  + **Box extents** – the height, width and length of the emitter\.

**Sphere**

  + **Radius** – the size of the emitter\.

  + **Emit from shell** – emit particles from the outside edge of the emitter\.

  + **Random direction** – emit each particle in a random direction\.

**Cone**

  + **Random direction** – emit each particle in a random direction\.

  + **Emit from** – emit particles from the narrow end of the cone \(**Base**\), the center of the cone \(**Volume**\), or the edges of the cone \(**Volumeedge**\)\.

  + **Cone radius** – the radius of the cone at the narrow end\.

  + **Cone angle** – the angle at which the sides of the cone flare out\.

  + **Cone length** – the length of the sides of the cone\.

+ **Over duration properties** – fine tune values that apply to each loop of animation\. Each value can be constant, or progress linearly or randomly over the duration\.

  + **Emission rate** – the number of particles emitted per second\.

  + **Start speed** – the speed of the particles\.

  + **Start size** – the size of the particles\.

  + **Start color** – the color of the particles\.

  + **Start life time** – the number of seconds before each particle disappears\.

  + **Start angle** – the angle of particles\.

+ **Over lifetime properties** – fine tune values that apply to the entire lifetime of the particle emitter\. Each value can be constant, or progress linearly or randomly over the lifetime\.

  + **Color** – the color of the particles\. Compounds with the duration color\.

  + **Size** – the size of the particles\. Compounds with the duration size\.

  + **Rotation speed** – rotation of particles in degrees per second\.

  + **Local velocity** – local space velocity in units per second\.

  + **World velocity** – world space velocity in units per second\.

+ **Texture** – the texture of each particle\. Use one of the provided textures or choose **custom** to upload a texture\.

+ **Texture animation**

  + **Texture tiles** – the number of tiles in the sprite sheet, in X and Y directions\.

  + **Cycles** – the number of exture animation cycles to finish over the lifetime\.

  + **Frame over lifetime** – a curve specifying when to show which frame in the animation\. `0` is the first frame and `1` is the last\. A linear curve starting at 0 and ending at 1 traverses all frames in the animation\.

+ **Rendering** – customize the rendering behavior\.

  + **Billboard** – particles always face the camera\.

  + **Render queue** – render queue of the particle mesh\.

  + **Render queue offset** – offset added to the render queue\.

  + **Blending** – the type of blending \(**None**, **Additive**, **Subtractive**, **Multiply**, or **Transparency**\)\.

  + **Depth write** – write to the depth buffer\.

  + **Depth test** – test against the depth buffer\.

  + **Sorting mode** – the draw order for particles \(**None** or **Camera distance**\)\. For transparency blending, camera distance sorting is recommended\.

  + **Opacity threshold** – The lower alpha threshold at which fragments are discarded\.