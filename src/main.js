"use strict";
var module = require('./module.js');

function loadAndDefineModules (mainModulePath) {
  module.load(mainModulePath).then(function(m) {
    console.log('Main module ready', m)
    console.warn('===================Ignore Errors above this line===================')
    console.warn('===================================================================')
    m.execute()
  }, function(err) {
    console.error('Fail to load mainModule', err)
  });
}


/*
 Excecute module process:
 1. Load the main module file and define main module
 2. Load all dependencies recursively and define each module
 3. excute main moodule
*/
function bootstrap() {
  performance.mark('bootstrap_start')
  var blScript = document.currentScript || document.getElementById('bl-script')
  var mainModule = blScript.getAttribute('main') || './';

  loadAndDefineModules(mainModule);
}

bootstrap()
