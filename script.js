$(document).ready(function(){

    var currentDay = $("#currentDay");
    currentDay.text(moment().format("MMMM DD, YYYY"));

    //capital H makes it military time
    var actualHour = moment().format("H");
    actualHour = parseInt(actualHour);
       
    var container = $(".container");

    var businessHours = [{businessTime: "9AM", militaryTime:9}, {businessTime: "10AM", militaryTime:10}, {businessTime: "11AM", militaryTime:11}, {businessTime: "12PM", militaryTime:12}, {businessTime: "1PM", militaryTime: 13}, {businessTime: "2PM", militaryTime:14}, {businessTime: "3PM", militaryTime:15}, {businessTime: "4PM", militaryTime:16}, {businessTime: "5PM", militaryTime:17}]

        for (var i=0; i < businessHours.length; i++) {
            
            var hourRow = $("<div>");
            container.append(hourRow);
            hourRow.attr("style", "height:80px");

            var hour = $("<button>");
            hour.text(businessHours[i].businessTime);
            hour.attr("style", "float:left; height:80px");
            hour.attr("class", "col-sm-1");
            hourRow.append(hour);

            // parseInt(hour.text) or
            
            // var hourNumber = parseInt(businessHours[i])
            var hourNumber = businessHours[i].militaryTime

            console.log (actualHour, hourNumber);
            if (hourNumber < actualHour) {
            
            // color of the main schedule input field equals the before color

            }
            else if (hourNumber = actualHour) {
            // color of the main schedule input field equals the current hour color

            }
            
            else {
                // color of the main schedule input field equals the after hour color


            }

             

            //if hour is < (before) the current hour, color is xxxx
            //else if hour is the current hour, color is yyyy
            //else color is zzzz

            var schedule = $("<input>");
            schedule.attr("style", "float:left; width;100%; height:80px");
            schedule.attr("class", "col-sm-10");
            hourRow.append(schedule);

            //populating the input from local storage if anything is in there
            // var existingTasks = localStorage.getItem(hourNumber);
            // schedule.val(existingTasks);

            var saveButton = $("<button>");
            
            //this will come out later
            saveButton.text("save");
            saveButton.attr("style", "float:left; height:80px");
            saveButton.attr("class", "col-sm-1");
            hourRow.append(saveButton);

//input box text "to do" goes into local storage and then it persists.
//add another to do as necessary in the same hours and that persists as well.

saveButton.on("click", function(){ 
    console.log("click happened");

    var schedule =$(this).siblings("input");
    var hourNumber =$(this).siblings("button").text();
    localStorage.setItem(hourNumber, schedule.val());

    //so that the save button knows to save the input right next to it
    // var schedule =$(this).siblings("input");
    
    // // so that the save button knows to pair the input with the hour
    // var hourNumber =$(this).siblings("button").text(); 

    // //setting the input into local storage, will pull out by key existingTasks
    // localStorage.setItem(hourNumber, schedule.val(existingTasks));

    

})
       


        }






})