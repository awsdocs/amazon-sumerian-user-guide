# The Context Object<a name="scripting-context"></a>

You can use the context object, `ctx` to store your script data during the script life time\. The context is created upon setup\(\) and cleared on cleanup\(\) and is passed into all of the script functions\. It has a the following properties:

**Properties**
+ `entity` \([https://content.sumerian.amazonaws.com/engine/latest/docs/Entity.html](https://content.sumerian.amazonaws.com/engine/latest/docs/Entity.html)\) – The entity to which the script is attached\.
+ `entityData` \(`Object`\) – A data object shared between all scripts on the entity\.
+ `activeCameraEntity` \([https://content.sumerian.amazonaws.com/engine/latest/docs/Entity.html](https://content.sumerian.amazonaws.com/engine/latest/docs/Entity.html)\) – The currently active camera entity\.
+ `domElement` \(`HTMLCanvasElement`\) – The WebGL canvas element\.
+ `playTime` \(`number`\) – The elapsed time since scene start\.
+ `transitions` \(`Object`\) – Transition functions used to signal the success or failure of an **Execute script** action on a [state machine](sumerian-statemachines.md)\.
+ `viewportHeight` \(`number`\) – The height of the canvas\.
+ `viewportWidth` \(`number`\) – The width of the canvas\.
+ `world` \([https://content.sumerian.amazonaws.com/engine/latest/docs/World.html](https://content.sumerian.amazonaws.com/engine/latest/docs/World.html)\) – The world object\.
+ `worldData` \(`Object`\) – A data object shared between all scripts in the world\.

Some of the properties on `ctx` are shared between scripts\. *entityData* is shared by all scripts on the entity and *worldData* is shared by all scripts\. They are all initially empty, and can be used to store any kind of data

For example, if we'd like to define a property called *acceleration*, we could make it available on three levels:

```
// Only accessible to the script that defined the property
ctx.acceleration=9.82;
 
// Accessible to all scripts on the entity
ctx.entityData.acceleration=9.82;
 
// Accessible to all scripts
ctx.worldData.acceleration=9.82;
```

The built\-in context properties also contain some convenience functions\. For example, the `world` object lets you search for entities based on their tags\. You can get all entities with a specific tag with `ctx.world.by.tag`:

```
var entities = ctx.world.by.tag('myTag');
```