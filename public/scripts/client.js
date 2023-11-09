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
      // Append return value to the tweets container
      $("#tweets-container").append($tweet);
    }
  };

  // Takes in a tweet object and is responsible for returning a tweet <article> element containing the entire HTML structure of the tweet
  const createTweetElement = function(tweetObject) {
    const $tweet = $(`
      <article class="tweet">
        <header class="tweet-header">
          <img class="avatar" src="${tweetObject.user.avatars}" alt="${tweetObject.user.name} Avatar">
          <div class="user-details">
            <h2 class="name">${tweetObject.user.name}</h2>
            <h2 class="handle">${tweetObject.user.handle}</span>
          </div>
        </header>
        <p>${tweetObject.content.text}</p>
        <footer class="tweet-footer">
          <span class="timestamp">${new Date(tweetObject.created_at).toLocaleString()}</span>
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
  // Call load tweets on page load
  loadTweets();

});
