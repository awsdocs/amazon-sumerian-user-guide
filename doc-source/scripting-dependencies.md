# External Dependencies<a name="scripting-dependencies"></a>

If your script uses external JavaScript libraries from the web into your script, declare them in the **External resources** section of the text editor\.

**To declare external dependencies**

1. Open a scene in the Sumerian editor\.

1. Press J to open the text editor\.

1. Choose a script asset in the **Documents** list\.

1. Under **External resources**, enter a URL starting with `//` \(excluding the protocol\)\.

1. Click the plus icon to add the library to the list\.  
![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/components-script-externalresource.png)

The editor loads libraries as soon as you add them to this list\. To reload a library, choose **Refresh resources**\. In your published scene, all dependencies are loaded and executed during the loading phase\.