/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Implementing event listener for when user accesses textarea "the mainframe" with the combination of setTImeout to give that extra immersion:
$(document).ready(function() {
  $("#tweet-text").focus(function() {
    // Start loading sequence; adding dots every 500ms
    let loadingDots = setInterval(function() {
      console.log('......');
    }, 500);
    
    // 500ms delay
    setTimeout(function() {
      clearInterval(loadingDots); // Stop adding dots
      console.log("Neural Link Established");
    }, 500);

    loadingDots = setInterval(function() {
      console.log('......');
    }, 500);

    // Then wait another 1000ms before this logs
    setTimeout(function() {
      clearInterval(loadingDots);
      console.log("Broadcast booting");
    
      loadingDots = setInterval(function() {
        console.log('......');
      }, 500);

      // Then wait another 1000ms before this logs
      setTimeout(function() {
        clearInterval(loadingDots);
        console.log("Welcome to subnet");
      }, 1500);
      // After 1500ms from the initial message
    }, 1500);
  });
});