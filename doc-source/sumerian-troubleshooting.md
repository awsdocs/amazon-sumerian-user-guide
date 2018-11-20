# Troubleshooting Issues with Amazon Sumerian Scenes<a name="sumerian-troubleshooting"></a>

This topic lists common errors and issues that you might encounter when using the Sumerian editor and player\. If you find an issue that is not listed here, you can use the **Feedback** button on this page to report it\.

**Issue:** \(Chrome\) Can't enter virtual reality mode\.

You may need to set the following flags to use virtual reality mode in Chrome\.
+ **WebVR** – `#enable-webvr`
+ **Gamepad Extensions** – `#enable-gamepad-extensions`
+ **Override software rendering list** – `#override-software-rendering-list`

To access Chrome flags, type chrome://flags into your search bar\.

**Issue:** Browser uses the wrong GPU for hardware acceleration\.

If you have multiple graphics cards, you may need to configure your system to use the right GPU for browser applications\. For example, the NVIDIA control panel has an option named **target GPU** that you can set for each application\.