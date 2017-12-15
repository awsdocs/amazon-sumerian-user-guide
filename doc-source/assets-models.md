# Models<a name="assets-models"></a>

Drop a model file on the assets panel to import it\. When you import a model, Sumerian converts it into an asset pack that contains the model's meshes, skeletons, materials, and textures\. Meshes are triangulated automatically during import\. The process can take some time depending on the model size and format\.

You can import models in the following formats\.

**File Formats**

+ **FilmBox** – `.fbx`

  [ www\.autodesk\.com/products/fbx/overview ](http://www.autodesk.com/products/fbx/overview)

+ **Wavefront OBJ** – `.obj`

  [ en\.wikipedia\.org/wiki/Wavefront\_\.obj\_file ](http://en.wikipedia.org/wiki/Wavefront_.obj_file)

After the model is imported, drop the model entity from the asset pack onto the canvas\. This adds one or more entities to the scene in a hierarchy based on the imported file\. At a minimum, the entity will have transform, geometry, and material components\. If you import a model that has a skeleton and animations, you also get an animation component\. The skeleton and polygon mesh are attached to the geometry component, and textures are attached to the material component\.

To optimize the model importing process, remove unneeded data by deleting the object history and freezing transformations in your modeling tool\. Avoid using geometric transformations if possible\. If your model has animations, bake the animations into the model and avoid using constraints\.

The Sumerian engine supports the following model features\.

**Model Features**

+ **Vertex colors** – Per\-vertex colors or per\-face\-vertex colors is supported\.

  When the mesh data contains vertex colors, a slider will be available on the mesh's material panel under the diffuse channel\. Here you are able to blend between the set diffuse map or color and the vertex color\.

+ **UV maps** – If two are available, the second one can be used for e\.g\. light maps or ambient occlusion maps\.

  In the editor, you are able to apply these textures on the ambient channel in the material panel\.

+ **Tangents** – If no tangent data is provided, this will be generated during the conversion\.

+ **Normals** – If no normal data is provided, interpolated normals will be generated during the conversion\.

+ **Skeleton Animations** – Animation via skeleton mesh deformation is supported\. You can provide several animations in one file\.

  **Shader limitations**

  + The maximum number of weights per vertex is 4\. If more are provided, the ones with the least values are removed\.

  + Keeping the joint count low will allow supporting a broader set of hardware\.

  If you already have converted a model with skeleton animations into the editor, and afterwards added more animations in your modeling tool, you can to add those new animations onto the existing model in the editor\.

  This is done by dropping the file upon the animation panel's animation state drop area\. This issues the file upload as usual, but during conversion, only the animation data is exported\.

  Note that the underlying skeleton rig must be the same for this to work\. If you have done changes to the rig you will need to re\-import the model through the regular process\.

+ **Embedded textures \(FBX\)** – When exporting to the FBX binary format, you can embed textures into the resulting file\.