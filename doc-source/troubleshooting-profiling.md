# Profiling Amazon Sumerian Scenes<a name="troubleshooting-profiling"></a>

You can use browser performance analysis tools to measure your Amazon Sumerian scene's performance during playback and to identify issues\. For additional insight, you can use a cookie to configure Sumerian to record detailed timing information about the engine's update and render loops for each frame\.

Use [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/) to set the cookie and profile your scene\.

**To profile a scene in Chrome**

1. Open a scene in the Sumerian editor\.

1. In the **Entities** panel, choose the root node of your scene to access [scene settings](sumerian-scene.md)\. In the scene panel, expand the **Details** section, and then choose **View scene** to open the scene in a new tab\.

1. Open the **Console** panel in Chrome DevTools as follows:
   + Windows, Linux, Chrome –  Ctrl Shift J 
   + Mac –  Command Option J 

1. To set the cookie, run the following statement at the console prompt\.

   ```
   document.cookie = 'sumerianProfiling=useSystemTimingMarks;path=/'
   ```

1. Reload the page\.

1. Choose **Performance** in the navigation bar of the DevTools panel\.

1. Click the record button to start a recording\. Use your scene for a few seconds, and then click the record button again to stop recording\.

1. The top section of the performance graph shows the scene's frames per second \(FPS\) in green\. Locate a section where the frame rate dropped\. Click and drag to zoom in on a few frames\.

![\[Performance testing a Sumerian scene.\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/devtools-performance.png)

The Sumerian profiling information appears under **User Timing**\. Each frame has an **updateWorld** phase, where the engine logic runs, and a **render** phase, where the user's view of the world is generated\.

Under the **updateWorld** section, a second timeline shows the timings for each subsystem that's engaged by the engine during this phase\. Use this information to identify components in your scene, like scripts and state machines, that take a long time to update\. If the render phase is too long, reduce the visual complexity of your scene or reduce the number of lights\.

When detailed profiling is enabled, the Sumerian engine uses additional resources\. When you're done profiling, unset the cookie to disable it\.

```
document.cookie = 'sumerianProfiling=;path=/'
```

For Oculus Go and other Android devices, put your device in developer mode and connect to it from the **DevTools** menu\. For Oculus Go, see [Device Setup \- Oculus Go](https://developer.oculus.com/documentation/mobilesdk/latest/concepts/mobile-device-setup-go/)\. For other devices, see [Get Started with Remote Debugging Android Devices](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/)\.

For Firefox, you can use the Gecko Profiler Add\-on\. Use the same commands in the browser console to set and unset the cookie\. See [Profiling with the Gecko Profiler](https://developer.mozilla.org/en-US/docs/Mozilla/Performance/Profiling_with_the_Built-in_Profiler) for more information\.