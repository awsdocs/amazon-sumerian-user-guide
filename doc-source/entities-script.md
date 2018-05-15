# Amazon Sumerian Script Component<a name="entities-script"></a>

You can add scripts to any entity\. A script component can contain multiple scripts\. Scripts run in order from top to bottom and you can adjust the order in the script component properties\.

To support reuse, you add an instance of a script to the script component, not the script itself\. The instance contains the state and parameters of the script, letting you add multiple instances of the same script with different behavior on each, based on the arguments provided\.

**Properties**
+ **Enabled** – Clear the check box to disable a script\.
+ **Instance of** – Each script instance in the list has a reference to the script it is using\. Choose a script to go to the script's own panel\.
+ **Parameters** – Any parameters defined in the script's [`parameters` array](scripting-parameters.md) appear here\. Adjust the values to customize the behavior of this script instance\.

To structure your parameters, you can store them in a JSON file\. Start by defining the parameters in the script itself\. Then add the JSON file and reference it from the script settings\.

**Example Script with JSON parameter**  

```
varsetup=function(args,ctx){
  console.log(args.myJsonParameter);// Prints the parsed JSON data
};

var parameters=[{
  key:'myJsonParameter',
  type:'json'
}];
```

**To create a script with JSON parameters**

1. [Create a blank entity](sumerian-entities.md)\.

1. Choose **Add component**, and then choose **Script**\.

1. Choose **Add script**, and then choose **Custom**\.  
![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/components-script-addscript.png)

1. Choose **Edit script**\.  
![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/components-script-editscript.png)

1. Replace the default `parameters` declaration with the following\.

   ```
   var parameters=[{
     key:'myJsonParameter',
     type:'json'
   }];
   ```

1. Return to the script settings\. The settings automatically update to include the JSON parameter\.

1. Drop a JSON file in the parameter field\.  
![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/components-script-addjson.png)