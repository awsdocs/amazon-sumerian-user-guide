# Audio and Camera State Machine Actions in Amazon Sumerian<a name="statemachines-audio"></a>

You can use state machine actions in Amazon Sumerian to control audio settings and the scene camera\.

**Audio Actions**
+ **Mute**, **Toggle mute**, and **Unmute** – Mute or unmute sounds in the scene\. **Toggle mute** mutes if sound is currently unmuted and vice\-versa\.
  + **Audio system** – Mute all audio in the scene, just [sound component](entities-sound.md) audio, or just [speech component](entities-speech.md) audio\.
+ **Play sound**, **Pause sound**, and **Stop sound** – Play, pause, or stop a sound from the entity's sound component\.
+ **Sound fade in** and **Sound fade out** – Start or stop a sound with a fade\.
+ **Start microphone recording** – Start recording audio from microphone input\.
+ **Stop microphone recording** – Stop recording audio from microphone input and store it on the entity\. The audio can then be used by the [Send audio input to dialogue bot](#statemachines-audio) action\.

Camera actions interact with the entity's camera component\.

**Camera Actions**
+ **Dolly zoom** – Perform a dolly zoom\.
+ **Switch camera** – Switch to a different camera\.