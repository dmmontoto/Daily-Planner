$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  $('.saveBtn').on('click', function () {
    console.log('button listener works');
    // Get the id of the parent time-block
    var timeBlock = $(this).parent().attr('id');
    console.log(timeBlock);
    // Get the value of the plans from this hour 
    var timeEvent = $(this).siblings('.description').val();
    console.log(timeEvent);
    // Save the plans in local storage using id
    localStorage.setItem(timeBlock, timeEvent);
  })

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  $('.time-block').each(function() {
    var currentHour = dayjs().hour();
    console.log(currentHour);
    var blockHour = parseInt($(this).attr('id'));
    console.log(blockHour);
    if (currentHour > blockHour) {
      $(this).attr('class', 'row time-block past');
    } else if (currentHour === blockHour) {
      $(this).attr('class', 'row time-block present');
    } else {
      $(this).attr('class', 'row time-block future');
    }
  })

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  // Get any user input saved in localStorage
  $('.time-block').each(function() {
    var timeBlock = $(this).attr('id');
    var potentialText = localStorage.getItem(timeBlock);
    if (potentialText) {
      $(this).find('.description').val(potentialText);
    }
  })

  // TODO: Add code to display the current date in the header of the page.

  // Setup time on top 
  var today = dayjs();
  $('#currentDay').text('Calender for today: ' + today.format('MMM D, YYYY'));
});