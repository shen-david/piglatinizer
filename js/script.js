$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.

$("button").click(function(){
    var ask = $("input").val();
    $(".output").append(ask);
});






});
