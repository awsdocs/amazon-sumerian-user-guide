## Sample Scripts
These scripts use the Amazon Sumerian engine library to create or modify
scene content dynamically during playback.

Some of the scripts define setup functions that run when playback
starts. Attach these to an entity using a script component.

Scripts ending in "-action.js" are state machine script actions
that define enter and exit functions that run when a state is
entered or exited. Attach these to a state machine behavior with
the "execute script" action.

### add-quad.js
Create a quad element and add it to the world.

### add-skybox.js
Use a texture from Amazon S3 to create a skybox. 

### add-sphere.js
Create a sphere element and add it to the world.

### bot-selector.js
Change the Amazon Lex bot assigned to an entity.

### create-speech-action.js
Change the text of an entity's speech component.

### download-lists.js
Download a list of strings from Amazon S3 and store them for later use.

### hide-entity-action.js
Show or hide any entity in a scene.

### random-speech.js
Choose one of the speech files attached to an entity at random and play it.