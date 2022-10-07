var saveBtn = $('.saveBtn')
var nineId =$('#hour9')
var tenId =$('#hour10')
var eleven =$('#hour11')
var twelve =$('#hour12')
var one =$('#hour13')
var two =$('#hour14')
var three =$('#hour15')
var four =$('#hour16')
var five =$('#hour17')
var textarea = $(".form-control")

//array variables
var nine =$('#hr9')
var ten =$('#hr10')
var eleven =$('#hr11')
var twelve =$('#hr12')
var one =$('#hr13')
var two =$('#hr14')
var three =$('#hr15')
var four =$('#hr16')
var five =$('#hr17')

var timeArray = [nine, ten, eleven, twelve, one, two, three, four, five]

var text;
var hourSpan;
// var textDisplay = text.text()
var currentHour = moment().hour()

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// create variable referencing the place the date will display in html
var currentDay = $('#currentDay')
//create function for moment that formats the date and displays it on the page
function displayCurrentDay () {
    var timeInterval = setInterval(function () {
    var now = moment().format('dddd, MMMM Do, YYYY[at] hh:mm:ss A')
    currentDay.text(now)
      })
} 
//call the function so it shows up on the page
displayCurrentDay ()

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
//create 8 timeblocks for 9a-5pm
//see html lines 32-86

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
//past times are grey
//current time is red
//future times are green

function colors() {
    for (let i=0; i < timeArray.length; i++) {
        // timeArray[i].removeClass("future past present")
        // timeArray[i].attr("class", "present form-control col-10 text");
        if (currentHour > timeArray[i].attr("data-time")){
            timeArray[i].attr("class", "past form-control col-10 text");

        } else if (currentHour == timeArray[i].attr("data-time")) {
            timeArray[i].attr("class", "present form-control col-10 text");

        } else {

            timeArray[i].attr("class", "future form-control col-10 text");
        }
        console.log (timeArray[i].attr("data-time"))
    }
}
      

// WHEN I click into a timeblock
// THEN I can enter an event
//add form for text
//see html lines 35, 41, 47, 53, 59, 65, 71, 77

// WHEN I click the save button for that timeblock
//write function for saving input to local storage
function saveText (event){
    event.preventDefault()
    {
        var text = $(this).siblings(".text").val()
        var time = $(this).parent().attr("id");
        console.log(text)
        console.log(time)
        // THEN the text for that event is saved in local storage
            localStorage.setItem(time, text)
        }
    }
    //add event listener for buttons that save to local storage
    saveBtn.on('click', saveText)
    
    // WHEN I refresh the page
    // THEN the saved events persist
    function refresh () {
        console.log("Current Hour " + currentHour);
        //get items from local storage
        $("#hour9 .text").val(localStorage.getItem("hour9"));
        $("#hour10 .text").val(localStorage.getItem("hour10"));
        $("#hour11 .text").val(localStorage.getItem("hour11"));
        $("#hour12 .text").val(localStorage.getItem("hour12"));
        $("#hour13 .text").val(localStorage.getItem("hour13"));
        $("#hour14 .text").val(localStorage.getItem("hour14"));
        $("#hour15 .text").val(localStorage.getItem("hour15"));
        $("#hour16 .text").val(localStorage.getItem("hour16"));
        $("#hour17 .text").val(localStorage.getItem("hour17"));
        
    } 
    //add recall from local storage
$(document).ready (function (){
refresh()
colors ()
} )

// Button for clear the day
$("#clearDay").on("click", function(){
    localStorage.clear();
    refresh()
  }) 
