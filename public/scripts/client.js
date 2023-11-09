/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Implementing event listener for when user accesses textarea "the mainframe" with the combination of setTimeout ans setInterval to give that extra immersion:
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

$(document).ready(function() {
  
  // Responsible for taking in an array of tweet objects and then appending each one to the #tweets-container
  const renderTweets = function(arrayOfTweetObjects) {
    // Loop through tweets
    for (const tweet of arrayOfTweetObjects) {
      // Call createTweetElement for each tweet
      const $tweet = createTweetElement(tweet);
      // Prepend return value to the tweets container to see our tweet first
      $("#tweets-container").prepend($tweet);
    }
  };

  // Takes in a tweet object and is responsible for returning a tweet <article> element containing the entire HTML structure of the tweet
  const createTweetElement = function(tweetObject) {
    // Create an escape function to prevent XSS attacks
    const escape = function(str) {
      // Create an element instance in memory; it doesn't add it to the src code it justs creates a new element we can work with in JS
      const div = document.createElement("div");
      // Create a text node; html will be treated as plain test then appended to div element
      div.appendChild(document.createTextNode(str));
      // Return the string containing the div element and the innerHTML property will contain the text with any HTML characters converted to their respective HTML entities
      return div.innerHTML;
    };
    // Use the escape function to "sanitize" user input, ensuring that any input is treated as plain text and not as executable HTML or JavaScript.
    const $tweet = $(`
    <article class="tweet">
      <header class="tweet-header">
        <img class="avatar" src="${escape(tweetObject.user.avatars)}" alt="${escape(tweetObject.user.name)} Avatar">
        <div class="user-details">
          <h2 class="name">${escape(tweetObject.user.name)}</h2>
          <h2 class="handle">${escape(tweetObject.user.handle)}</h2>
        </div>
      </header>
      <p>${escape(tweetObject.content.text)}</p>
      <footer class="tweet-footer">
        <span class="timestamp">${escape(timeago.format(new Date(tweetObject.created_at)))}</span>
        <div class="interactions">
          <i class="fas fa-reply"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
          <i class="fas fa-share-alt"></i>
        </div>
      </footer>
    </article>
      `);
    return $tweet;
  };

  // Add event listener for submit and prevent submission from behavior
  $("#tweet-form").on("submit", function(event) {
    event.preventDefault();
    
    // Implement form validation before sending data to the server
    // Get the content of the tweet
    const tweetContent = $("#tweet-text").val();
    // Check if the tweet content is empty
    if (!tweetContent) {
      alert("Tweet post denied! Transmission content is empty!");
      return;
    }
    // Check if tweet content exceeds 140 characters limit
    if (tweetContent.length > 140) {
      alert("Transmission is too long! Limit your tweet to 140 characters!");
      return;
    }
    
    // Serialize the form data
    const serializedData = $(this).serialize();
    // Submit a POST request with the serialized data
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: serializedData
    })
      .then(response => {
        // Clear the form
        $("#tweet-text").val("");
        // Restart counter
        $(".counter").text("140");
        // Reload the tweets
        loadTweets();
        // Log the response from the server
        console.log('Server response:', response);
      })
      .catch(error => {
        // Log any error
        console.log('Error:', error);
      });
  });

  // The loadTweets function will use jQuery to make a request to /tweets and receive the array of tweets as JSON from the server
  const loadTweets = function() {
    $.ajax({
      url: "/tweets",
      method: "GET",
      dataType: "json",
    })
      .then((tweets) => {
        // Clear tweets container to avoid duplication
        $("#tweets-container").empty();
        // Call renderTweets with the response data
        renderTweets(tweets);
      })
      .catch((error) => {
        console.error(`There was an error: ${error}`);
      });
  };
  // Call load tweets on initial-tweets JSON
  loadTweets();

});
