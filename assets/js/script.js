$(document).ready(function() {
    // Current date and time
    $("#currentDay").text(moment().format("MMMM Do YYYY h:mm a"));

     // Save button for scheduled task and time - works on click
     $(".saveBtn").on("click", function () {
         console.log(this);
         var text = $(this).siblings(".description").val();
         var time = $(this).parent().attr("id");

         // Save items in local storage
         localStorage.setItem(time, text);
     })

     // Load saved data from local storage based on designated time
     $("#hour9 .description").val(localStorage.getItem("hour9"));
     $("#hour10 .description").val(localStorage.getItem("hour10"));
     $("hour11 .description").val(localStorage.getItem("hour11"));
     $("hour12 .description").val(localStorage.getItem("hour12"));
     $("hour13 .description").val(localStorage.getItem("hour13"));
     $("hour14 .description").val(localStorage.getItem("hour14"));
     $("hour15 .description").val(localStorage.getItem("hour15"));
     $("hour16 .description").val(localStorage.getItem("hour16"));
     $("hour17 .description").val(localStorage.getItem("hour17"));

     function timeTracker() {
         // Current time block
         var currentHour = moment().hour();

         // Time block loop
         $(".time-block").each(function() {
             var blockHour = parseInt($(this).attr("id").split("hour")[1]);
             console.log(blockHour, currentHour);

             // Compare current time to scheduler time
             if (blockHour < currentHour) {
                 $(this).addClass("past");
                 $(this).removeClass("future");
                 $(this).removeClass("present");
             }
             else if (blockHour === currentHour) {
                 $(this).removeClass("past");
                 $(this).addClass("future");
                 $(this).removeClass("present");
             }
             else {
                 $(this).removeClass("past");
                 $(this).removeClass("future");
                 $(this).addClass("present");
             }
         });
     };
     timeTracker();
});