# External Dependencies<a name="scripting-dependencies"></a>

You can load external JavaScript libraries from the web into your script, enter a URL in the left panel of the script editor, and click the *\+* button\.

Note that the URLs you enter should start with *//* and not *http://* or *https://*\.

**To declare external dependencies**

1. Open a scene in the Sumerian editor\.

1. Press J to open the text editor\.

1. Choose a script asset in the **Documents** list\.

1. Under **External resources**, enter a URL starting with `//` \(excluding the protocol\)\.

1. Click the plus icon to add the library to the list\.  
![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/components-script-externalresource.png)

The JavaScript dependencies will be loaded and executed immediately inside the editor \(click “Refresh resources” to re\-download and execute\)\. In your published scene, all dependencies will be loaded and executed during the loading phase\.