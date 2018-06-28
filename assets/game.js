var score1 = 0;
var score2 = 0;
var user1 = "";
var user2 = "";

$(document).ready(function(){

    RPS = ["Rock", "Paper", "Scissors"];

    rockbtn = $("#rockbtn").on("click", function(){
        user1 = RPS[0];
    });

    paperbtn = $("#paperbtn").on("click", function(){
        console.log("clicked paper");
    });

    scissorsbtn = $("#scissorsbtn").on("click", function(){
        console.log("clicked scissors");
    });

    // function play() {
    
    //     if(user1 === RPS[0] && user2 === RPS[1]) {
    //       console.log("user2, you're the winner, paper beats rock!");
    //       winUser2 ++;
    //     } else if(user1 === RPS[0] && user2 === RPS[2]) {
    //       console.log("user1, you're the winner, rock beats scissors!");
    //       winUser1 ++;
    //     } else if(user1 === RPS[0] && user2 === RPS[0]) {
    //       console.log("You both tie since you both chose rock!");
    //       draw ++;
    //     } else if(user1 === RPS[1] && user2 === RPS[0]) {
    //       console.log("user 1, you're the winner, paper beats rock!");
    //       winUser1 ++;
    //     } else if(user1 === RPS[1] && user2 === RPS[1]) {
    //       console.log("You both tie since you both chose paper!");
    //       draw ++;
    //     } else if(user1 === RPS[1] && user2 === RPS[2]) {
    //       console.log("user 2, you're the winner, scissors beats paper!");
    //       winUser2 ++;
    //     } else if(user1 === RPS[2] && user2 === RPS[0]) {
    //       console.log("user2, you're the winner, rock beats scissors!");
    //       winUser2 ++;
    //     } else if(user1 === RPS[2] && user2 === RPS[1]) {
    //       console.log("user1, you're the winner, scissors beats paper!");
    //       winUser1 ++;
    //     } else {
    //       console.log("You both tie since you both chose scissors!");
    //       draw ++;
    //     }
    // };

    // play();

});