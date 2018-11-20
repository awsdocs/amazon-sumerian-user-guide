# AWS Feature State Machine Actions in Amazon Sumerian<a name="statemachines-aws"></a>

You can use state machine actions to control Sumerian features that call other AWS services, including speech \(Amazon Polly\) and dialogue \(Amazon Lex\)\.

**AWS Feature Actions**
+ **AWS SDK ready** – Wait for the AWS SDK for JavaScript to get credentials before using features that call AWS services\. See [Configuring AWS Credentials for Your Amazon Sumerian Scene](scene-aws.md) for details\.
+ **Change speech component voice** – Change the voice of the entity's [speech component](entities-speech.md)\. Cannot be used during speech playback\.
+ **Change speech component volume** – Change the volume of the entity's speech component\.
+ **Send audio input to dialogue bot** – Send recorded audio to the Amazon Lex chatbot assigned to the entity's [dialogue component](entities-dialogue.md)\.
+ **Send text input to dialogue bot** – Send text input to the Amazon Lex chatbot assigned to the entity's dialogue component\.
+ **Start speech** and **Stop speech** – Play or stop a speech\.
  + **Speech** – Choose a speech from those attached to the entity's speech component\.
  + **Use Amazon Lex Response** – Play the response from an Amazon Lex chatbot, passed from a **Send input to dialogue bot** action on the previous state\.