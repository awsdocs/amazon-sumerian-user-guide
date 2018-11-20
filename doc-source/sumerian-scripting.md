# Scripting<a name="sumerian-scripting"></a>

Add scripts to your scene to update your scene based on user input or events\. You can use scripts to access the DOM, create and modify entities with the Sumerian engine library, or use the AWS SDK for JavaScript to access AWS services and resources\.

**Note**  
Visit this guide's [GitHub repo](https://github.com/awsdocs/amazon-sumerian-user-guide/tree/master/scripts) for a collection of useful sample scripts\. Contributions are welcome\!

**To create a blank script**

1. Open a scene in the Sumerian editor\.

1. Create a blank asset by clicking the plus icon next to the default pack and then click **Script**\. Select the pack name to see the icon\.  
![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/assets-bin-add.png)

1. Press j to open the text editor\.

1. Choose the new script under documents\. Use the pencil icon next to the script name to change its name\.

The script template includes 7 methods and a [parameters](scripting-parameters.md) array\. The methods correspond to a scene's lifecycle events and are called by the engine at the following times\.
+ `setup` – When scene playback starts\.
+ `fixedUpdate` – On every physics update\.
+ `update` – On every render frame\.
+ `lateUpdate` – After calling all `update` methods in the scene\.
+ `enter` – On a [state machine script action](statemachines-scripting.md), when the state is entered\.
+ `exit` – On a state machine script action, when the state is exited\.
+ `cleanup` – When scene playback stops\.

Reference documentation for the Sumerian engine library is available on the [Sumerian website](https://content.sumerian.amazonaws.com/engine/latest/docs/)\.

**Topics**
+ [Built\-in Scripts](scripting-builtins.md)
+ [The Context Object](scripting-context.md)
+ [Parameters and Arguments](scripting-parameters.md)
+ [External Dependencies](scripting-dependencies.md)
+ [Debugging](scripting-debugging.md)