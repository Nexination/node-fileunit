# NodeJS FileUnit
A small library for easy handling of files and logs.
## Filer
Filer serves the purpose of attaching to a filename and then allowing the user to read/write to this file as they see fit.

To initiate the filer use the following, 'data' is the filename that will be used:
```javascript
"use strict";
// Initiate the filer
let fileUnitFiler = new (require('fileunit').Filer)('data');
```

To load or save anything from the file, save or load is called on the object, save with data to save and an optional callback and load with a callback.
```javascript
// To load
fileUnitFiler.load(callback)
// To save
fileUnitFiler.save(data, callback)
```

The callback will bed fed two variables a read/write error state and the data. The error state will default to null if no errors have happened.
```javascript
function(error, data) {
  if(error === null) {
    console.log(data);
  };
};
```
