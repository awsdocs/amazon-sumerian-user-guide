# Parameters and Arguments<a name="scripting-parameters"></a>

Parameters let you create scripts that are customizable by adding fields to the script properties in the editor\. For example, the following script defines a parameter named `Velocity` that takes 3 numbers \(a [`vec3` parameter](#scripting-parameters-types)\)\. The setup function gets the value of the parameter from the `args` object\.

```
var setup = function(args, ctx){
    console.log(args.velocity);
};
 
var parameters = [
  {
    name : "Velocity",
    key : "velocity",
    type : "vec3",
    default : [1,0,0]
  }
];
```

During the setup phase, the script reads the parameter values from the `args` object and prints them to the console\.

When you add an instance of the above script to an entity, the editor shows a **Velocity** field that accepts three values and reflects the default value\.

![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/components-script-vec3.png)

## Parameter Format<a name="scripting-parameters-format"></a>

Parameters are objects with the following required and optional fields\.

**Required fields**
+ **key** \[string\] – a unique key used to store and retrieve the parameter values in the `args` object\.
+ **type** \[string\] – the [parameter type](#scripting-parameters-types)\.
+ **default** – the default value or values for the parameter\.

**Optional fields**
+ `name` \[string\] – the label for the parameter field shown on instances of the script\. If you don't specify a name, the `key` is used to generate the label\.
+ `control` \[string enum\] – the control type\.
  + `slider` – a slider control\.
  + `color` – a color wheel\.
  + `select` – a drop down listing the values in the `options` field\.
  + `jointSelector` – a drop down listing the joints on the animation component on the script's parent entity\.
+ `description` \[string\] – the description shown when you hover over the parameter\.
+ `options` \[array\] – an array of possible values for a `select` control\.
+ `min` and `max` \[number\] – the minimum and maximum values for an `int` or `float` parameter\.
+ `decimal` \[number\] – the number of significant digits for a `float` parameter\.
+ `step` \[number\] – the incremental value that `float` values snap to\.
+ `precision` \[number\] – the number of significant digits for `float` values\.
+ `exponential` \[boolean\] – set to `true` to distribute the values on a `slider` control logarithmically\.

## Parameter Types<a name="scripting-parameters-types"></a>

The type property must be set to one of a few predefined strings, each corresponding to a type of parameter\.
+ `int` – Integer number variable \(e\.g\. `1`\)\.
+ `float` – Number variable \(e\.g\. ` 3.14`\)\.
+ `string` – String \(e\.g\. `“HelloGoo”`\)\.
+ `boolean` – boolean \(`true` or `false`\)\.
+ `vec2`, `vec3`, `vec4` – an array of 2, 3, or 4 numbers\.
+ `texture`, `sound`, `entity`, `camera`, `animstate`, `json` – an asset of the specified [type](sumerian-assets.md)\.

The following example parameter declaration shows all of the available types\.

```
var parameters = [
    {type: 'int', key: 'int', 'default': 1, description: 'Integer input'},
    {type: 'float', key: 'float', 'default': 0.1, description: 'Float input'},
    {type: 'string', key: 'string', 'default': 'Hello!', description: 'String input'},
    {type: 'boolean', key: 'boolean', 'default': true, description: 'Checkbox'},
    {type: 'vec2', key: 'vec2', 'default': [0, 0], description: 'Vector2 input'},
    {type: 'vec3', key: 'vec3', 'default': [0, 0, 0], description: 'Vector3 input'},
    {type: 'vec4', key: 'vec4', 'default': [0, 0, 0, 0], description: 'Vector4 input'},
    {type: 'texture', key: 'texture', description: 'Texture asset drop area'},
    {type: 'sound', key: 'sound', description: 'Sound asset drop area'},
    {type: 'entity', key: 'entity', description: 'Entity drop area'},
    {type: 'camera', key: 'camera', description: 'Camera drop down'},
    {type: 'animstate', key: 'animation', description: 'Animation state from the animation component on a parent entity'},
    {type: 'json', key: 'json', description: 'JSON asset drop area'},
    {type: 'float', control: 'slider', key: 'floatSlider', 'default': 10.1, min: 5, max: 15, exponential: false, decimal: 1, description: 'Float slider input'},
    {type: 'int', control: 'slider', key: 'intSlider', 'default': 10, min: 5, max: 15, exponential: false, description: 'Integer slider input'},
    {type: 'vec3', control: 'color', key: 'vec3Color', 'default': [1, 0, 0], description: 'RGB color input'},
    {type: 'vec4', control: 'color', key: 'vec4Color', 'default': [1, 0, 0, 1], description: 'RGBA color input'},
    {type: 'string', control: 'select', key: 'select', 'default': 'a', options: ['a', 'b', 'c'], description: 'Dropdown/select'},
    {type: 'int', control: 'jointSelector', key: 'jointSelector', description:  'Joint select from the animation component on a parent entity'}
];
```

![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/)