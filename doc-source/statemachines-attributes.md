# Attribute and Tag State Machine Actions in Amazon Sumerian<a name="statemachines-attributes"></a>

You can use state machine actions in Amazon Sumerian to manage attributes and tags on an entity\.

Attribute actions manage attributes on the state machine's entity or transition based on the value of an attribute\.

**Attribute Actions**
+ **Duplicate attribute** – Copy the value of an attribute into the value of a second attribute\.
+ **Toggle boolean attribute** – Change the value of an attribute from true to false, or vice versa\.
+  **Set boolean attribute**, **Set numeric attribute**, **Set string attribute** – Set the value of an attribute\.
+ **Log attribute** – Log the value of an attribute\.
+ **Attribute math**, **Attribute math with constant** – Modify the value of an attribute by doing arithmetic using a number or using the value of second attribute\.
+ **Check boolean attribute**, **Compare boolean attributes**, **Compare numeric attribute to constant**, **Compare numeric attributes**, **Compare string attribute to constant**, **Compare string attribute with regex**, **Compare string attributes** – Transition based on the value of an attribute\.

Tag actions modify an entity's tags, or transition based on the presence or absence of a tag\.

**Tag Actions**
+ **Add tag**, **Clear tag** – Add or remove a tag\.
+ **Toggle tag** – Add a tag if it isn't present; remove it if it is present\.
+ **Check for tag** – Transition based on the presence of a tag\.