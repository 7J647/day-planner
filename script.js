$(document).ready(function(){

    var currentDay = $("#currentDay");
    currentDay.text(moment().format("MMMM DD, YYYY"));

    //capital H makes it military time
    var actualHour = moment().format("H");
    actualHour = parseInt(actualHour);
       
    var container = $(".container");

    var businessHours = [{businessTime: "9AM", militaryTime:9}, {businessTime: "10AM", militaryTime:10}, {businessTime: "11AM", militaryTime:11}, {businessTime: "12PM", militaryTime:12}, {businessTime: "1PM", militaryTime: 13}, {businessTime: "2PM", militaryTime:14}, {businessTime: "3PM", militaryTime:15}, {businessTime: "4PM", militaryTime:16}, {businessTime: "5PM", militaryTime:17} ,{businessTime: "6PM", militaryTime:18} ,{businessTime: "7PM", militaryTime:19},{businessTime: "8PM", militaryTime:20},{businessTime: "9PM", militaryTime:21},{businessTime: "10PM", militaryTime:22},{businessTime: "11PM", militaryTime:23}]

    

        for (var i=0; i < businessHours.length; i++) {
            
            var hourRow = $("<div>");
            container.append(hourRow);
            hourRow.attr("style", "height:80px");

            var hourNumber = $("<div>");
            hourNumber.text(businessHours[i].businessTime);
            hourNumber.attr("style", "float:left; height:40px");
            hourNumber.attr("class", "col-sm-1");
            hourRow.append(hourNumber);

            // parseInt(hour.text) or
            
            // var hourNumber = parseInt(businessHours[i])
            var hourNumber = businessHours[i].militaryTime
            var hourNumber = parseInt(hourNumber);

            console.log (actualHour, hourNumber);
            

             

            //if hour is < (before) the current hour, color is xxxx
            //else if hour is the current hour, color is yyyy
            //else color is zzzz

            var schedule = $("<input>");
            schedule.attr("style", "float:left; width:100%; height:80px; background-color:orange");
            schedule.attr("class", "col-sm-10");
            hourRow.append(schedule);

            if (hourNumber < actualHour) {
               schedule.attr("style", "float:left; width:100%; height:80px; background-color:purple");

            // color of the main schedule input field equals the before color

            }
            else if (hourNumber === actualHour) {
                schedule.attr("style", "float:left; width:100%; height:80px; background-color:green");
            // color of the main schedule input field equals the current hour color
            // schedule.attr("background-color:#77dd77; color:white");
            
            }
            
            else if (hourNumber > actualHour) {
                // color of the main schedule input field is greater than the after hour color
                // schedule.attr("background-color:#77dd77; color:white");
                schedule.attr("style", "float:left; width:100%; height:80px; background-color:yellow");

            }
            
            //populating the input from local storage if anything is in there
            // var existingTasks = localStorage.getItem(hourNumber);
            // schedule.val(existingTasks);

            // var schedule = localStorage.getItem(hourNumber);
            // schedule.val(existingTasks);
            // schedule = storage.getItem(hourNumber);
           
            var saveButton = $("<button>");
            
            //this will come out later
            saveButton.text("save");
            saveButton.attr("style", "float:left; height:80px");
            saveButton.attr("class", "col-sm-1");
            hourRow.append(saveButton);

//input box text "to do" goes into local storage and then it persists.
//add another to do as necessary in the same hours and that persists as well.

    saveButton.on("click", function(){ 
    // console.log("click happened");

    //using $(this) so that the save button knows to save the inputs right next to it
    var schedule =$(this).siblings("input");
    var hourNumber =$(this).siblings("div").text();
    
    localStorage.setItem(hourNumber, schedule.val());
    
    // var schedule = JSON.parse(localStorage.getItem(hourNumber);
   

    // localStorage.getItem(hourNumber, schedule.val(existingTasks));

    //so that the save button knows to save the input right next to it
    // var schedule =$(this).siblings("input");
    
    // // so that the save button knows to pair the input with the hour
    // var hourNumber =$(this).siblings("button").text(); 

    // //setting the input into local storage, will pull out by key existingTasks
    localStorage.getItem(hourNumber, schedule.val());

    

})
       


        }






})