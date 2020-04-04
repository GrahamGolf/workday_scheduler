$( document ).ready(function() {
    //if statement so it doesn't error out when theres nothing
    $("#input08").val(localStorage.getItem("hour08"));
    $("#input09").val(localStorage.getItem("hour09"));
    $("#input10").val(localStorage.getItem("hour10"));
    $("#input11").val(localStorage.getItem("hour11"));
    $("#input12").val(localStorage.getItem("hour12"));
    $("#input13").val(localStorage.getItem("hour13"));
    $("#input14").val(localStorage.getItem("hour14"));
    $("#input15").val(localStorage.getItem("hour15"));
    $("#input16").val(localStorage.getItem("hour16"));
    $("#input17").val(localStorage.getItem("hour17"));
    $("#input18").val(localStorage.getItem("hour18"));

    $( ".saveBtn" ).click(function() {
        var inputText = ($(this)[0].previousElementSibling.value)
        console.log ($(this))
        var time = ($(this)[0].parentElement.id)
        console.log (inputText,time)
        localStorage.setItem(time, inputText);
      });

      var currentHour = parseInt((moment().format('h a')).split(" ")[0]);
        console.log(currentHour);
    var amPm = (moment().format('h a')).split(" ")[1];
        console.log(amPm);
        if (amPm == "pm") {
            currentHour = currentHour + 12;
            console.log(currentHour);
        }

      $(".hour").each(function() {
            var hourBlock = parseInt(($(this).attr("id")).substring(4));
            console.log(hourBlock)
        if (currentHour > hourBlock) {
            $(this).addClass("past");
        }
        else if (currentHour == hourBlock) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
      })
    
      console.log(moment().format('h a'));
});



