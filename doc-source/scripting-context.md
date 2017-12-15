# The Context Object<a name="scripting-context"></a>

You can use the context object, `ctx` to store your script data during the script life time\. The context is created upon setup\(\) and cleared on cleanup\(\) and is passed into all of the script functions\. It has a few pre\-defined properties:

**Properties**

+ `entity` \([https://docs.sumerian.amazonaws.com/engine/latest/docs/Entity.html](https://docs.sumerian.amazonaws.com/engine/latest/docs/Entity.html)\) – the entity to which the script is attached\.

+ `entityData` \(`Object`\) – a data object shared between all scripts on the entity\.

+ `activeCameraEntity` \([https://docs.sumerian.amazonaws.com/engine/latest/docs/Entity.html](https://docs.sumerian.amazonaws.com/engine/latest/docs/Entity.html)\) – the currently active camera entity\.

+ `domElement` \(`HTMLCanvasElement`\) – the WebGL canvas element\.

+ `playTime` \(`number`\) – the elapsed time since scene start\.

+ `viewportHeight` \(`number`\) – the height of the canvas\.

+ `viewportWidth` \(`number`\) – the width of the canvas\.

+ `world` \([https://docs.sumerian.amazonaws.com/engine/latest/docs/World.html](https://docs.sumerian.amazonaws.com/engine/latest/docs/World.html)\) – the world object\.

+ `worldData` \(`Object`\) – a data object shared between all scripts in the world\.

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