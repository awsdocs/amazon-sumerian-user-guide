# Amazon Sumerian HTML Components<a name="entities-html"></a>

You can use the Amazon Sumerian HTML components to quickly add text and images to your scene\. The **HTML** component overlays a 2D window that maintains the same orientation \(camera facing\) at all times\. The **HTML 3D** component is a 3D object within the scene and can be viewed from different angles as the camera moves around it\.

**Note**  
HTML 3D works well in 2D scenes and in VR with some limitations\. HTML 2D doesn't work in VR, and appears as a black box in VR mode\. Scene contents between an entity with an HTML 3D component and the camera are rendered normally\. However, nothing behind an HTML 3D component is visible, so HTML components should not use transparency\.

You can use style attributes on your HTML elements, or include a separate `style` tag that defines styles\.

## HTML 2D Component<a name="entities-html-2d"></a>

The HTML component adds a 2D HTML document \(a `div`\) to the scene, and you can edit its content in the text editor\. You can position the document using the entity transform, or use CSS to position it relative to the viewport\.

**Properties**
+ **Move with transform** – Position the HTML document within the scene using the transform component on the same entity\. The document is always the same size and faces the camera, but can move relative to the camera\. To position the HTML content relative to the viewport, deselect this option and set positioning with a style attribute\.
+ **Pixel perfect** – When positioning with the entity transform, snap the HTML window to the closest pixel position\.
+ **Attributes** – Add HTML attributes to the bounding `div` tag\. For example, you can add a style attribute to position the HTML content onscreen\.

![\[HTML component configuration\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/components-html.png)

Choose the **Open in editor** button to open the HTML document in the text editor\.

**Example Video Window**  

**HTML properties**
+ **Attributes** – **style**: **position:absolute;right:50px;bottom:50px**

```
<iframe width="100%" height="100%" src="https://www.youtube.com/embed/DqeUFGpZLUw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
```

![\[Example HTML 3D video window\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/components-html-videowindow.png)

## HTML 3D Component<a name="entities-html-3d"></a>

The HTML 3D component adds a screen\-like element to an entity that you can position in the scene\. You set the size of the screen by using the X and Y scale on the transform component\. The width and height properties determine how much content \(in pixels\) fits in that space\.

**Properties**
+ **Width** – The width of the HTML content, in pixels\. The height of the content is determined by the entity's Y scale\.

**Example Movie Screen**  

**Transform**
+ **Translation** – X: 1, Y: 5, Z: \-20
+ **Scale** – X: 16, Y: 9, Z: 1

**HTML 3D properties**
+ **Width** – 1920\. Height is automatically set to 1080 \( 1920 \* 9 / 16 \)\.

```
<iframe width="100%" height="100%" src="https://www.youtube.com/embed/DqeUFGpZLUw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
```

![\[Example HTML 3D movie screen\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/components-html3d-moviescreen.png)

In the rendered scene, your HTML content is placed within a div with a white background that is transformed with CSS 3D\. You can't modify style or other attributes on the div directly\. To ensure that your content fills the component, place it within a div with height and width set to 100%\.

In VR mode, HTML 3D components are rendered at a very low frame rate\. It isn't suited for video, or any content that is updated frequently or in response to user input\. For more information, see [Understanding Amazon Sumerian's HTML 3D Component](https://docs.sumerian.amazonaws.com/articles/html3d/) on the Sumerian website\.

## Using HTML Components with Scripts<a name="entities-html-script"></a>

You can interact with content in HTML components by using standard JavaScript and HTML DOM events\.

The following example HTML and script add buttons that the user can click to change the active Amazon Lex chatbot on a host with a [dialogue component](entities-dialogue.md)\.

**Example HTML 3D component – Buttons**  

```
 <style>
  button {
    background-color: #4CAF50;
    border: none;  
    color: white;
    padding: 15px 25px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
  }

  button:hover {
    background-color: green;
  }
 </style>

<button id="bot1button" botname="OrderFlowers" botalias="latest" type="button">Order Flowers</button>
<button id="bot2button" botname="BookTrip" botalias="latest" type="button">Book Trip</button>
```

**Example Script – Add Event Listener to Buttons**  
+ **Entity** – Host or other entity with a dialogue component\.

```
'use strict';

function setup(args, ctx) {
  ctx.entityData.changeBot = function(event){
    var name = event.target.getAttribute("botname");
    var alias = event.target.getAttribute("botalias");
    ctx.entity.dialogueComponent.updateConfig({name: name, alias: alias})
  };
  document.getElementById("bot1button").addEventListener('click', ctx.entityData.changeBot);
  document.getElementById("bot2button").addEventListener('click', ctx.entityData.changeBot);
}
```