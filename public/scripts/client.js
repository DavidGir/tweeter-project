/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Implementing event listener for when user accesses textarea "the mainframe" with the combination of setTImeout to give that extra immersion:
$(document).ready(function() {
  $("#tweet-text").focus(function() {
    // 500ms delay
    setTimeout(function() {
      console.log("Neural Link Established...");
    }, 500);
    // Then wait another 1000ms before this logs
    setTimeout(function() {
      console.log("Broadcast booting...");
    }, 1500);
    // Then wait another 1000ms before this logs
    setTimeout(function() {
      console.log("Welcome to subnet");
    }, 2500);
  });
});