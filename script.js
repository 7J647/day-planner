$(document).ready(function(){

    var currentDay = $("#currentDay");
    currentDay.text(moment().format("MMMM DD, YYYY"));
       
    var container = $(".container");

    var businessHours = ["9AM", "10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM"]

        for (var i=0; i < businessHours.length; i++) {
            
            var hourRow = $("<div>");
            container.append(hourRow);

            var hour = $("<div>");
            hour.text(businessHours[i]);
            hour.attr("style", "float:left");
            hour.attr("class", "col-sm-1");
            hourRow.append(hour);

            var schedule = $("<input>");
            schedule.attr("style", "float:left");
            schedule.attr("style", "width:100%");
            schedule.attr("class", "col-sm-10");
            hourRow.append(schedule);

            var save = $("<button>");
            
            //this will come out later
            save.text("save");
            hour.attr("style", "float:left");
            hour.attr("class", "col-sm-1");
            hourRow.append(save);





        }






})