$(document).ready(function(){

    var container = $(".container");
    var rows = $(".rows");

    var businessHours = ["9AM", "10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM"]

        for (var i=0; i < businessHours.length; i++) {
            // tested the forLoop
            // console.log(businessHours[i]);
            var hourRow = $("<div>");
            hourRow.text(businessHours[i]);
            rows.append(hourRow);
            console.log(hourRow);



        }






})