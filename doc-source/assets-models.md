# Models<a name="assets-models"></a>

Drop a model file on the assets panel to import it\. When you import a model, Sumerian converts it into an asset pack that contains the model's meshes, skeletons, materials, and textures\. Meshes are triangulated automatically during import\. The process can take some time, depending on the model size and format\.

You can import models up to 50 MB in size in the following formats\.

**File Formats**
+ **FilmBox** – `.fbx`

  [ www\.autodesk\.com/products/fbx/overview ](http://www.autodesk.com/products/fbx/overview)
+ **Wavefront OBJ** – `.obj`

  [ en\.wikipedia\.org/wiki/Wavefront\_\.obj\_file ](http://en.wikipedia.org/wiki/Wavefront_.obj_file)

After the model is imported, drop the model entity from the asset pack onto the canvas\. This adds one or more entities to the scene in a hierarchy based on the imported file\. At a minimum, the entity has transform, geometry, and material components\. If you import a model that has a skeleton and animations, you also get an animation component\. The skeleton and polygon mesh are attached to the geometry component, and textures are attached to the material component\.

To optimize the model importing process, remove unneeded data by deleting the object history and freezing transformations in your modeling tool\. If you can, avoid using geometric transformations\. If your model has skeleton animations, bake them during export and avoid using constraints\.

The Sumerian engine supports the following model features\.

**Model Features**
+ **Vertex colors** – Per\-vertex colors or per\-face\-vertex colors are supported\.

  When the mesh data contains vertex colors, a slider is available on the mesh's material panel under the diffuse channel\. You can use the slider to blend between the set diffuse map or color and the vertex color\.
+ **UV maps** – If two are available, you can use the second one, for example, for light maps or ambient occlusion maps\.

  In the editor, you are able to apply these textures on the ambient channel in the material panel\.
+ **Tangents** – If no tangent data is provided, it is generated during the conversion\.
+ **Normals** – If no normal data is provided, interpolated normals are generated during the conversion\.
+ **Rig** – An animation rig or armature in an FBX file is imported as a skeleton asset\. Each vertex can have up to 4 weights\. If more are present, the lower valued weights are removed\. Minimize the number of joints to improve performance\.
+ **Animations** – Animation takes in an FBX file are imported as clips attached to an animation asset\. See [Amazon Sumerian Animation Component](entities-animation.md) for more information\.
+ **Textures** – When exporting to the FBX binary format, you can embed textures into the resulting file\.