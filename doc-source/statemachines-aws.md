# Amazon Sumerian State Machine AWS Feature Actions<a name="statemachines-aws"></a>

You can use state machine actions to control AWS\-integrated features\.

**AWS Feature Actions**
+ **AWS SDK ready** – Wait for the to get credentials prior to using features that call AWS services\. See [Configuring AWS Credentials for Your Amazon Sumerian Scene](scene-aws.md) for details\.
+ **Change speech volume** – Change the volume of the entity's [speech component](entities-speech.md)\.
+ **Send audio input to dialogue bot** – Send recorded audio to the Amazon Lex chatbot assigned to the entity's [dialogue component](entities-dialogue.md)\.
+ **Send text input to dialogue bot** – Send text input to the Amazon Lex chatbot assigned to the entity's dialogue component\.
+ **Start speech** and **Stop speech**– Play or stop a [speech component](entities-speech.md)\.