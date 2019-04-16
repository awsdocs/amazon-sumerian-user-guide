# Configuring AWS Credentials for Your Amazon Sumerian Scene<a name="scene-aws"></a>

The **AWS configuration** section lets you configure credentials to use with the AWS SDK for JavaScript\. You can set an Amazon Cognito identity pool ID, which Sumerian uses to retrieve credentials when the scene is loaded\. The identity pool must have an unauthenticated role with permission to use the AWS APIs that your scripts access\.

**Note**  
If you don't have an identity pool, follow the instructions under [Amazon Sumerian Permissions](sumerian-permissions.md) to create one\.

**To configure AWS SDK for JavaScript credentials**

1. Open a scene in the Sumerian editor\.

1. Choose the root node in the **Entities** panel\.  
![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/editor-entities-scene.png)

1. Expand the **AWS configuration** section in the inspector panel\.

1. Enter an Amazon Cognito identity pool ID\.  
![\[Image NOT FOUND\]](http://docs.aws.amazon.com/sumerian/latest/userguide/images/scene-sections-aws.png)

To use the credentials, create a script that listens for `aws.sdkReady` before initializing an SDK for JavaScript client\. The following example lists the contents of an Amazon S3 bucket named `mybucket` in the browser console\. To test its functionality, [create a script](sumerian-scripting.md), attach it to an entity, and play the scene\.

**Example S3listobjects script**  

```
'use strict';

var setup = function(args, ctx) {
    sumerian.SystemBus.addListener('aws.sdkReady',
        () => {
            let s3 = new AWS.S3();
            s3.listObjects({Bucket: "mybucket"}, function(err, data) {
                    if (err) {
                        console.log('ERROR', err, data);
                    } else {
                        console.log('DATA', data);
                    }
                }
            );
        },
        true
    );
};
```