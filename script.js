$(document).ready(function(){

    var currentDay = $("#currentDay");
    currentDay.text(moment().format("MMMM DD, YYYY"));

    //capital H makes it military time
    var actualHour = moment().format("H");
    actualHour = parseInt(actualHour);
       
    var container = $(".container");

    //build array for a for Loop to iterate over and create rows
    var businessHours = [{businessTime: "9AM", militaryTime:9}, {businessTime: "10AM", militaryTime:10}, {businessTime: "11AM", militaryTime:11}, {businessTime: "12PM", militaryTime:12}, {businessTime: "1PM", militaryTime: 13}, {businessTime: "2PM", militaryTime:14}, {businessTime: "3PM", militaryTime:15}, {businessTime: "4PM", militaryTime:16}, {businessTime: "5PM", militaryTime:17} ,{businessTime: "6PM", militaryTime:18} ,{businessTime: "7PM", militaryTime:19},{businessTime: "8PM", militaryTime:20},{businessTime: "9PM", militaryTime:21},{businessTime: "10PM", militaryTime:22},{businessTime: "11PM", militaryTime:23}]

        for (var i=0; i < businessHours.length; i++) {
            
            var hourRow = $("<div>");
            container.append(hourRow);
            hourRow.attr("style", "height:80px");

            var hourNumber = $("<div>");
            hourNumber.text(businessHours[i].businessTime);
            hourNumber.attr("style", "float:left; height:40px; border-top: 1px solid black");
            hourNumber.attr("class", "col-sm-1");
            hourRow.append(hourNumber);

            var hourNumber = businessHours[i].militaryTime
            var hourNumber = parseInt(hourNumber);

            // console.log (actualHour, hourNumber);
            

            //if hour is < (before) the current hour, color is xxxx
            //else if hour is the current hour, color is yyyy
            //else color is zzzz

            var schedule = $("<input>");


            schedule.attr("style", "float:left; width:100%; height:80px; border-radius: 15px;");
            schedule.attr("class", "col-sm-10");
            hourRow.append(schedule);

            if (hourNumber < actualHour) {
               schedule.attr("style", "float:left; width:100%; height:80px; background-color:#d3d3d3; color:white");

            // color of the main schedule input field equals the before color

            }
            else if (hourNumber === actualHour) {
                schedule.attr("style", "float:left; width:100%; height:80px; background-color:#ff6961; color:white");
            // color of the main schedule input field equals the current hour color
           
            }
            
            else  {
                // color of the main schedule input field is greater than the after hour color
                schedule.attr("style", "float:left; width:100%; height:80px; background-color:#77dd77; color:white");

            }
            
            // FROM HERE I TRIED TO SET UP LOCAL STORAGE.  I WAS ABLE TO GET IT IN TO LOCAL STORAGE BUT NOT OUT.
            
            //EXPERIMENTED WITH SETTING NEW VARIABLES
            // var existingTasks = localStorage.getItem(hourNumber);
            // schedule.val(existingTasks);

            // var schedule = localStorage.getItem(hourNumber);
            // schedule.val(existingTasks);
            // schedule = storage.getItem(hourNumber);

            //EXPERIMENTED WITH FUNCTIONS AND JSON
                // function getSavedTasks () {
                //     var schedule = JSON.parse(localStorage.getItem("input"));


                // }

                // function saveTasks () {
                //     localStorage.setItem("hourNumber"),JSON.stringify({
                //      schedule: $(this).siblings("input");,
                //      hourNumber: $(this).siblings("div").text();   
                //     })


                // }

            //// EXPERIMENTED WITH ADDING ANOTHER INPUT ONTO THE INPUT VARIABLE
                // var existingTasks = $("<input>");
                // var existingTasks = localStorage.getItem(hourNumber, schedule);
                // schedule.append(existingTasks);
                // console.log(existingTasks);
    
           
            var saveButton = $("<button>");

            
            //this will come out later
            saveButton.text("save");
            saveButton.attr("style", "float:left; height:80px; background-color: #06AED5; color:white; border-left: 1px solid black; border-top-right-radius: 15px; border-bottom-right-radius: 15px;");
            saveButton.attr("class", "col-sm-1");
            hourRow.append(saveButton);

                var saveIcon = $("<img>");
                saveIcon.attr("src", "https://www.iconfinder.com/data/icons/apple-classic/100/Apple_classic_10Icon_5px_grid-04-512.png");
                saveIcon.attr("alt", "save");
                saveIcon.attr("style", "height:30px; width:30px");
                saveButton.append(saveIcon);


//input box text "to do" goes into local storage and then it persists.

    saveButton.on("click", function(){ 
    // console.log("click happened");

    //using $(this) so that the save button knows to save the inputs right next to it
    var schedule =$(this).siblings("input");
    var hourNumber =$(this).siblings("div").text();
    

    localStorage.setItem(hourNumber, schedule.val());

    //LAST DITCH EFFORT TO TRY SOMETHING SIMPLE AND SEE IT WORKED
    // schedule.getItem(hourNumber);

})
       
}

})