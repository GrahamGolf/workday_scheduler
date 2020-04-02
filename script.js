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
});



