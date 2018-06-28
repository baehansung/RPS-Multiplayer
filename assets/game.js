var score1 = 0;
var score2 = 0;

$(document).ready(function(){

    $("#rockbtn").on("click", function(){
        console.log("clicked rock");
    });

    $("#paperbtn").on("click", function(){
        console.log("clicked paper");
    });

    $("#scissorsbtn").on("click", function(){
        console.log("clicked scissors");
    });

});