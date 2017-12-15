# The Amazon Sumerian HTML 3D Component<a name="entities-html3d"></a>

The HTML 3D component adds a 3D DOM element to the entity, and lets you mix it with WebGL easily\. The 3D DOM element behaves like a Quad in 3D space and you can edit its content in the text editor\.

**Properties**

+ **Width** – The number of pixels that should fit into the 3D quad along the X axis\.

The technique behind the HTML 3D component is as follows\. The WebGL canvas is put in front of a DOM element, which is transformed using CSS3D\. Inside the WebGL scene, there's a Quad that masks the Canvas, so that the DOM element behind the canvas is visible through\. Synchronization of the WebGL and CSS3D transforms is done by the Sumerian engine internally\.

![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/components-html3d-css3d.jpg)

The most prominent limitation is that you cannot use transparency in your HTML\. Since there's nothing behind the 3D DOM element, you will see empty background behind it\.

To embed an iframe, simply use the following HTML for your HTML 3D component \(just replace the URL\)\.

```
<iframe src="https://en.wikipedia.org/wiki/WebGL" width="100%" height="100%"></iframe>
```

Embed a YouTube video

Go to a YouTube video, click *Share*, then *Embed*, and copy the embed code\. Paste it into your HTML3D component\.

```
<iframe width="100%" height="100%" src="https://www.youtube.com/embed/qpQFfMofc1I" frameborder="0" allowfullscreen></iframe>
```