// Targeting textarea by its ID:
$(document).ready(function() {
  const maxLength = 140;
  $("#tweet-text").on("input", function() {
    // "This" refers to the textarea DOM element
    // Convert "This" to a jQuery object to use jQuery methods like .val()
    const textLength = $(this).val().length;
    const charactersLeft = maxLength - textLength;

    // Traverse up the common parent and find the counter within that parent:
    // Find closest ancestor to textarea which is form element and then find descendant element with the class counter within the form:
    let $counter = $(this).closest("form").find(".counter");
    // Add text setter; it will set text content to update the displayed count
    $counter.text(charactersLeft);

    // Adjust the counter color based on validity (no more characters)
    if (charactersLeft < 0) {
      // Add class dynamically on browser html and not on the source code:
      $counter.addClass("invalid");
    } else {
      $counter.removeClass("invalid");
    }
  });
});

