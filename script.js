$( document ).ready(function() {
    //if statement so it doesn't error out when theres nothing
    $("#input09").val(localStorage.getItem("hour09")); //figure this out
    $( ".button" ).click(function() {
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

      $(".hours").each(function() {
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



