/* http://home.iprimus.com.au/kbwood/jquery/localisation.html
   Localisation assistance for jQuery v1.0.
   Written by Keith Wood (kbwood@iprimus.com.au) June 2007. 
   Under the Creative Commons Licence http://creativecommons.org/licenses/by/3.0/
   Share or Remix it but please Attribute the author. */
$.localise=function(c,d){saveSettings={async:$.ajaxSettings.async,timeout:$.ajaxSettings.timeout};$.ajaxSetup({async:false,timeout:(d&&d.timeout?d.timeout:500)});localiseOne=function(a,b){if(d&&d.loadBase){$.getScript(a+'.js')}if(b.length>=2){$.getScript(a+'-'+b.substring(0,2)+'.js')}if(b.length>=5){$.getScript(a+'-'+b.substring(0,5)+'.js')}};lang=(d&&d.language?d.language:$.defaultLanguage).toLowerCase();if(c.isArray){for(i=0;i<c.length;i++){localiseOne(c[i],lang)}}else{localiseOne(c,lang)}$.ajaxSetup(saveSettings)};$.defaultLanguage=(navigator.language?navigator.language:navigator.userLanguage);Array.prototype.isArray=true;