# Debugging<a name="scripting-debugging"></a>

To debug a script in the Sumerian editor, use the built in tools in your browser\. In Google Chrome, open Developer Tools by pressing ALT\-CMD\-J on Mac or F12 on Windows\.

Open the *Sources* panel at the top of Devtools\. To the left you can see all scripts loaded in the browser\. If you have a script in your scene, it will be listed in below *sumerian\-custom\-scripts*\. Choose your script to view it\.

The simplest way to start debugging a script is by adding a `debugger;` statement in your Custom Script in the editor\. If you have Devtools open, and this statement is executed, Devtools will automatically go to the file and line where your statement is\.

![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/)