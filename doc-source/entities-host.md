# Amazon Sumerian Host Component<a name="entities-host"></a>

A host is an asset provided by Sumerian that has built in animation, speech, and behavior for interacting with users\. Add a host to your scene from the [asset library](editor-assetlib.md)\.

![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/hosts.png)

When you add a host to your scene, it includes a **Host** component for configuring the host's behavior, and a [**speech** component](entities-speech.md) that you can use to configure the host's voice and script\.

![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/components-host.png)

**Properties**
+ **Point of interest** – Set to **Look at entity** to keep the host's eyes trained on a camera, object, or other entity during playback\.
+ **Target entity** – Drop an entity here to set it as the host's point of interest\.
+ **Lip sync** – Play lip sync animations during speech\.
+ **Gestures** – Play gesture animations during speech\.
+ **Gesture hold time** – Set the number of seconds to play a gesture animation\.
+ **Minimum gesture period** – Set the number of seconds to wait after a gesture is complete before another gesture can occur\.