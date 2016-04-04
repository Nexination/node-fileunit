"use strict";
class Filer {
  constructor(fileName) {
    this.fileName = fileName;
    this.fs = require('fs');
  }
  load(runAfter) {
    this.fs.readFile(this.fileName, (error, data) => {this.dataHandler(error,data,runAfter);});
  }
  save(fileData, runAfter) {
    this.fs.writeFile(this.fileName, fileData, (error, data) => {this.dataHandler(error,data,runAfter);});
  }
  dataHandler(error, data, runAfter) {
    if(typeof runAfter === 'function') {
        runAfter(error, data);
    };
  }
}
exports.Filer = Filer;