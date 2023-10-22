$(function () {
    // Added a click event listener to all elements with class "saveBtn"
    $(".saveBtn").on("click", function () {
      // Used $(this) to reference the specific button that will be clicked
      var clickedButton = $(this);
      // looks through the DOM to find the id of the time-block containing the clicked button
      var timeBlockId = clickedButton.closest(".time-block").attr("id");
      // Uses the id as a key to save the user input from the text area in local storage
      var userInput = clickedButton.siblings(".userInput").val();

      // Saves the userInput in local storage with the time-block id as the key
      localStorage.setItem(timeBlockId, userInput);
    });
    //this retrieves the stored values from local storage when the page refreshes
    $(".time-block").each(function () {
      var timeBlockId = $(this).attr("id");
      var storeduserInput = localStorage.getItem(timeBlockId);

      if (storeduserInput) {
        $(this).find(".userInput").val(storeduserInput);
        console.log(storeduserInput)
      } 
    });
  });

