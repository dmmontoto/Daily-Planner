// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  // Setup time on top 
  var today = dayjs();
  $('#currentDay').text('Calender for today: ' + today.format('MMM D, YYYY'));

  // Add listener 
  var hour9 = $('#hour-9');
  var hour10 = $('#hour-10');
  var hour11 = $('#hour-11');
  var hour12 = $('#hour-12');
  var hour1 = $('#hour-1');
  var hour2 = $('#hour-2');
  var hour3 = $('#hour-3');
  var hour4 = $('#hour-4');
  var hour5 = $('#hour-5');

  $('.saveBtn').on('click', function () {
    console.log('button listener works');
    // Get the id of the parent time-block
    var timeBlock = $(this).parent().attr('id');
    console.log(timeBlock);
    // Get the value of the plans from this hour 
    var timeEvent = $(this).siblings('.description').val();
    console.log(timeEvent);
  })
});

// Have global variable containing current time
// Run for-loop through each till specific hour is found 

// use button ids for save action 

// id = currentDay
// 

// 5 13 last 