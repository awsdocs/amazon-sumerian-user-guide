# Publishing Scenes in the Amazon Sumerian Editor<a name="editor-publish"></a>

Publish your Amazon Sumerian scene to share it with users on the internet\. When you publish a scene, Sumerian creates a static website with your scene and hosts it on Amazon CloudFront\. You can link users directly to the scene, or embed it in a frame in your website\.

You can also deploy a scene for use with AWS Amplify\. When you choose a private deployment, Sumerian generates a configuration file that you can load into your web app to embed a scene that can only be accessed with credentials from Amazon Cognito\.

**To publish a scene**

1. Open your scene in the Sumerian editor\.

1. Choose **Publish**\.

1. Choose **Create public link** or **Host privately**\.

1. Choose **Publish**\.

For a public scene, open the URL to view it\. This URL is publicly hosted with Amazon CloudFront and can be viewed by anyone\.

For a private scene, load the configuration file into your Amplify app with the XR module\. For more information, see [AWS Amplify](https://aws-amplify.github.io/amplify-js/media/xr_guide)\.

With Amplify, access to your scene is granted to users who log in with Amazon Cognito\. For details about adding permissions to your app's identity pool, see [Restricting Access to a Published Scene](sumerian-permissions.md#permissions-amplify)\.