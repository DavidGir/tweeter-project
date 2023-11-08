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
  
  // Fake data from the initial-tweets.json
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];
  
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
  renderTweets(data);

  //
});

