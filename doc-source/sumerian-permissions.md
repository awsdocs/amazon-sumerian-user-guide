# Amazon Sumerian Permissions<a name="sumerian-permissions"></a>

You can use AWS Identity and Access Management \(IAM\) to grant Sumerian permissions to users and compute resources in your account\. IAM controls access to AWS at the API level to enforce permissions uniformly and securely\.

## IAM Managed Policies for Sumerian<a name="permissions-managedpolicies"></a>

To make granting permissions easy, IAM supports **managed policies** for each service\. A service can update these managed policies with new permissions when it releases new APIs\. Sumerian provides managed policies for user permissions needed to use the Sumerian editor\.
+ `AmazonSumerianFullAccess` – Permission to use all Sumerian features\.

  ```
  {
      "Version": "2012-10-17",
      "Statement": [
          {
              "Effect": "Allow",
              "Action": [
                  "sumerian:*"
              ],
              "Resource": "*"
          }
      ]
  }
  ```

**To add a managed policy to an IAM user, group, or role**

1. Open the [IAM console](https://console.aws.amazon.com/iam/home)\.

1. Open the role associated with your instance profile, an IAM user, or an IAM group\.

1. Under **Permissions**, attach the managed policy\.

You only need access to Sumerians APIs\. Sumerian manages all of the storage \(Amazon S3\) and content delivery \(Amazon CloudFront\) related to the scenes that you create outside of your account\.

## Granting a Scene Access to AWS Services<a name="permissions-scene"></a>

To use AWS services in a scene, the scene needs credentials as well\. You can use Amazon Cognito Identity to create an identity pool that gives the scene access to a role with permission to use AWS\. Create a role that has permissions to any services that you will access from scripts, and permissions for components that use AWS services\.

**To create an identity pool for a Sumerian scene**

1. Open the [**Federated identities** page](https://console.aws.amazon.com/cognito/federated) in the Amazon Cognito console\.

1. Choose **Create new identity pool**\.

1. Create a pool with the following settings\.
   + **Unauthenticated identities** – enabled

1. Choose **Edit identity pool** to see the pool details\.

1. Note the **Identity pool ID** for later use\.

When you create an identity pool, Amazon Cognito prompts you to create two roles, an authenticated role, and an unauthenticated role\. Add permissions to the unauthenticated role\.

**To add permissions to an identity pool role for a Sumerian scene**

1. Open the [**Roles** page](https://console.aws.amazon.com/iam/home#/roles) in the IAM console\.

1. Choose the role named **Cognito\_*pool\-name*Unauth\_Role**\.

1. Choose **Attach policy** and add policies for the services that your scene uses\.
   + **Speech component** – `AmazonPollyReadOnlyAccess` gives the scene permission to use Amazon Polly to render text into audio with the [speech component](entities-speech.md)\.
   + **AWS SDK for JavaScript** – add policies that grant access to the services that you call with the SDK for JavaScript\. For example, `AmazonS3ReadOnlyAccess`\.

Assign the identity pool to your scene under **[AWS configuration](scene-aws.md)** in scene settings\.

## Restricting Access to a Published Scene<a name="permissions-amplify"></a>

To prevent public access to a scene, embed it in a web app by using AWS Amplify\. When you [deploy a scene privately](editor-publish.md), Amazon Sumerian packages it for playback but doesn't publish it to a public location\. You can then use the Amplify library to load it into your app\.

Amplify uses credentials from an Amazon Cognito identity pool to download a scene securely from Sumerian\. You can grant your identity pool's role access to all scenes in your account, or just to scenes in a specific project\.

To grant access to all scenes, add the following policy to your identity pool's role\.

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "sumerian:ViewRelease"
      ],
      "Resource": "*"
    }
  ]
}
```

To grant access to a single project, specify the project by using the `Resource` key\.

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "sumerian:ViewRelease"
      ],
      "Resource": "arn:aws:sumerian:region:accountid:project:projectname"
    }
  ]
}
```