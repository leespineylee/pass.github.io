window.sr = ScrollReveal({
    reset: true
});;
sr.reveal('.cps');
sr.reveal('.idm-container');
sr.reveal('.ccim-container');
sr.reveal('.fizz-container');
sr.reveal('.rec-container');
sr.reveal('.tai-container');
sr.reveal('.emjac');
sr.reveal('.heinz');

/*var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
if(isChrome) alert("dd");
if(isFirefox) alert("dd");*/

// The above code was my first attempt, but Micrsoft edge cept picking it up????

/*
var chrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
/*this second check is where edge was messing up. So, I checked for another user agent string. My source for learning what these were is from here: https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/userAgent
 */


/*
var firefox = /Firefox/.test(navigator.userAgent); //this one check for firefox was all that was needed 
var edge = (/Edge\/\d./i.test(navigator.userAgent)); // I'm not sure why edge was so difficult, but I found it here: https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx
var explorer_eleven = (/rv:11.0/i.test(navigator.userAgent));
var opera = /Opera/.test(navigator.userAgent);
var safari = /Safari/.test(navigator.userAgent);

if(safari) alert("dd");
if (chrome) alert("dd");
if (firefox) alert("dd");
if (edge) alert("dd");
if (explorer_eleven) alert("dd");
*/



