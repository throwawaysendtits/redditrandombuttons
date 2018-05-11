// ==UserScript==
// @name       Reddit randnsfw
// @version    0.1
// @description  Add randnsfw button
// @match      https://www.reddit.com/*
// @author     everyone
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$(document).ready(function() {
   var rand = document.getElementById('header');
  $(rand).append('<a href="http://www.reddit.com/r/randnsfw">randnsfw</a>&nbsp;&nbsp;');
});
