# The Amazon Sumerian HTML Component<a name="entities-html"></a>

The HTML component adds a 2D DOM element to the entity, and lets you edit its HTML contents using the text editor\. You can position the component using the entity transform, or use CSS to position it relative to the viewport\.

**Properties**

+ **Move with transform** – uncheck to position the component with CSS, instead of using the transform component\.

+ **Pixel perfect** – snap the HTML component to the closest pixel position\.

+ **Attributes** – add HTML attributes to the DOM\. This can be useful for positioning, for example\. If you want to set the position to the bottom right corner, you can do this:  
![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/components-html-attribute.png)

  Note that other attributes on the DOM element will be overridden by the attributes you add here\.

Choose the **Open in editor** button to open the HTML editor for the component\. This lets you edit the HTML contents\.

This is the HTML used for the HTML component shown in the screenshot above\.

```
<style>
.my-paragraph{
  background:#fefefe;
  font-size:16px;
  padding:10px;
  border-radius:3px;
  margin:0;
  font-family:sans-serif;
}
</style>
<pclass="my-paragraph">
  This is HTML
</p>
```