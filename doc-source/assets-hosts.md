# Amazon Sumerian Hosts<a name="assets-hosts"></a>

A host is an asset provided by Sumerian that has built in animation, speech, and behavior for interacting with users\. Use hosts to engage users in conversation and convey information\.

![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/hosts.png)

**To add a host to your scene**

1. Open a scene in the Sumerian editor\.

1. Choose **Import assets**\.

1. Choose one of the following hosts:
   + **Cristine**
   + **Preston**
   + **Luke**

1. Choose **Add**\.

1. Drag the host entity from the assets panel onto the canvas\.  
![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/assets-host.png)

All of a host's meshes, materials, animations, and scripts are bundled into a single entity with three configurable components:
+ **[Transform](entities-transform.md)** – The host's location relative to the scene or its parent entity\.
+ **[Host](entities-host.md)** – Animation and behavior settings\.
+ **[Speech](entities-speech.md)** – Text\-to\-speech capability with Amazon Polly\.

Models and animations for hosts are locked\. You cannot modify or extend them\.