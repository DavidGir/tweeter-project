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
    
    // After 500ms, clear interval and log message
    setTimeout(function() {
      // Stop adding dots
      clearInterval(loadingDots);
      console.log("Neural Link Established...");

      // Start new loading sequence
      loadingDots = setInterval(function() {
        console.log('......');
      }, 500);

      // After 1500ms, clear interval and log next message
      setTimeout(function() {
        clearInterval(loadingDots);
        console.log("Broadcast booting...");
      
        // Start final loading sequence
        loadingDots = setInterval(function() {
          console.log('......');
        }, 500);

        // After another 1500ms, clear interval and log final message
        setTimeout(function() {
          clearInterval(loadingDots);
          console.log("Welcome to subnet");
        }, 1500);
      // After 1500ms from the initial message
      }, 1500);

    }, 500);
  });
});

