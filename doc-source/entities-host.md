# The Amazon Sumerian Host Component<a name="entities-host"></a>

A host is a asset provided by Sumerian that has built in animation, speech, and behavior for interacting with users\. Add a host to your scene from the [asset library](editor-assetlib.md)\.

![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/hosts.png)

When you add a host to your scene, it includes a **Host** component for configuring the host's behavior, and a [**Speech** component](entities-speech.md) that you can use to configure the host's voice and script\.

![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/components-host.png)

**Properties**

+ **Point of interest** – set to **Look at entity** to keep the host's eyes trained on a camera, object, or other entity during playback\.

+ **Target entity** – drop an entity here to set it as the host's point of interest\.

+ **Lip sync** – play lip sync animations during speech\.

+ **Gestures** – play gesture animations during speech\.

+ **Gesture hold time** – the number of seconds to play a gesture animation\.

+ **Minimum gesture period** – number of seconds to wait after a gesture is complete before another gesture can occur\.