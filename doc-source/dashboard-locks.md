# Locks<a name="dashboard-locks"></a>

The Amazon Sumerian editor uses locks to control modifications to a scene\. When you open a scene, the editor creates a lock on the scene and refreshes it periodically\. If you try to open the scene in a different browser while the lock is active, you will see an error\.

![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/dashboard-lock.png)

You can force Sumerian to discard the lock if you are sure that no one else is working on the scene, or create a copy of the scene and work on that\.