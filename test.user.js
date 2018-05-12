// ==UserScript==
// @name       Reddit Random Buttons
// @version    0.1
// @description  Add random buttons
// @match      https://www.reddit.com/*
// @author     everyone
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$(document).ready(function() {
   var rand = document.getElementsByClassName('s13pd7zx-24 koiZfk');
  $(rand).append('<a href="http://www.reddit.com/r/random">random</a>&nbsp;|&nbsp;<a href="http://www.reddit.com/r/randnsfw">randnsfw</a>&nbsp;&nbsp;');
});
