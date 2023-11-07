// Targeting textarea by its ID:
$(document).ready(function() {
  $("#tweet-text").on("input", function() {
    // "This" refers to the textarea DOM element
    // Convert "This" to a jQuery object to use jQuery methods like .val()
    const textLength = $(this).val().length;
    const charactersLeft = 140 - textLength;

    console.log(charactersLeft);
  });
});

