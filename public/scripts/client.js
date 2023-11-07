/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Implementing event listener for when user accesses textarea "the mainframe" with the combination of setTImeout to give that extra immersion:
$(document).ready(function() {
  $("#tweet-text").focus(function() {
    console.log("Neural Link Established ... Broadcast booting ... Welcome to subnet");
  });
});