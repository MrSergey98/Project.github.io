$(document).ready(function () {
    var a = 0;
    $('#faq_id').click(function() {
        a=a+1;
        if(a%2!=0){
            $("#text, #faq_id").css( "color", "rgb(241, 77,52)");
            $("#one").css("border", "3px solid rgb(241, 77,52)");
        }
        else{
            $("#text, #faq_id").css( "color", "black");
            $("#one").css("border", "0px");
        }
    });
});
