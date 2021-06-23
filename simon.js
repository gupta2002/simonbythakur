var buttoncolours=["red","blue","green","yellow"];
var gamepattern=[];
var userclickedpattern=[];
var started=false;
var level=0;

$(document).keypress(function(){
    if(!started){
        
        $("#level-title").text("Level "+level);
        nextsequence();
        started=true;
    }
   
});

$(".btn").click(function(){
    var userchosencolour = $(this).attr("id");
 
    userclickedpattern.push(userchosencolour);
    console.log(userclickedpattern);
    playSound(userchosencolour);
    animatepress(userchosencolour);
    checkanswer(userclickedpattern.length-1);
 });
 

function checkanswer(currentlevel){
if(gamepattern[currentlevel]===userclickedpattern[currentlevel]){
    if(gamepattern.length===userclickedpattern.length){
        setTimeout(nextsequence, 1000);
    }
}
else{
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over,Press Any Key To Start Again");
    setTimeout(function()  {
        $("body").removeClass("game-over");
    }, 200);
    startover();
}
}


   
function nextsequence(){
    userclickedpattern=[];
level++;
$("#level-title").text("Level "+level);
    var randomnumber=Math.floor(Math.random()*4);

    var randomchosencolour=buttoncolours[randomnumber];
    
    gamepattern.push(randomchosencolour);
    $("#"+randomchosencolour).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomchosencolour);
    

}
   


function playSound(name){
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatepress(currentcolour){
    $("#"+currentcolour).addClass("pressed");
   setTimeout(function() {
    $("#"+currentcolour).removeClass("pressed");
   },100);
}

function startover(){
    level=0;
    gamepattern=[];
    started=false;

}



