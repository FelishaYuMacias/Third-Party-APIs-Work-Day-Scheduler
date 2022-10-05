// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// create variable referencing the place the date will display in html
var currentDay = $('#currentDay')
//create function for moment that formats the date and displays it on the page
function displayCurrentDay () {
    var now = moment().format('dddd, MMMM Do, YYYY')
    currentDay.text(now)
} 
    //call the function so it shows up on the page
    displayCurrentDay ()

// TODO: WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
    //create 8 timeblocks for 9a-5pm

// TODO: WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
    //past times are grey
    //current time is red
    //future times are green

// TODO: WHEN I click into a timeblock
// THEN I can enter an event
    //add form for text

// TODO: WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
    //add event listener for buttons that save to local storage

// TODO: WHEN I refresh the page
// THEN the saved events persist
    //add recall from local storage


