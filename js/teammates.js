
var show1=false;
var show2=false;
$("#player1-img").click(function(){
    if(!show1){
        $("#player1-teammate-wrapper1").fadeIn(200);
        setTimeout(function() {
            $("#player1-teammate-wrapper2").fadeIn(200)
        },200);
        setTimeout(function() {
            $("#player1-teammate-wrapper3").fadeIn(200)
        },400);
        setTimeout(function() {
            $("#player1-teammate-wrapper4").fadeIn(200)
        },600);
        show1=true;
    }else{
        $("#player1-teammate-wrapper4").fadeOut(200);
        setTimeout(function() {
            $("#player1-teammate-wrapper3").fadeOut(200)
        },200);
        setTimeout(function() {
            $("#player1-teammate-wrapper2").fadeOut(200)
        },400);
        setTimeout(function() {
            $("#player1-teammate-wrapper1").fadeOut(200)
        },600);
        show1=false;
    }
});

$("#player2-img").click(function(){
    if(!show2){
        $("#player2-teammate-wrapper1").fadeIn(200);
        setTimeout(function() {
            $("#player2-teammate-wrapper2").fadeIn(200)
        },200);
        setTimeout(function() {
            $("#player2-teammate-wrapper3").fadeIn(200)
        },400);
        setTimeout(function() {
            $("#player2-teammate-wrapper4").fadeIn(200)
        },600);
        show2=true;
    }else{
        $("#player2-teammate-wrapper4").fadeOut(200);
        setTimeout(function() {
            $("#player2-teammate-wrapper3").fadeOut(200)
        },200);
        setTimeout(function() {
            $("#player2-teammate-wrapper2").fadeOut(200)
        },400);
        setTimeout(function() {
            $("#player2-teammate-wrapper1").fadeOut(200)
        },600);
        show2=false;
    }
});



function updateTeammateData(playerid,playerNum){
    //console.log(playerid);
    var player_teammates= lineupData.filter(function(d){return d.player==playerid});
    if (playerNum==1){
        for (var i=0;i<player_teammates.length;i++){
            //d3.select("#player1-img").attr("src","http://stats.nba.com/media/players/230x185/"+playerid[0].person_id+".png");player1-teammate-1
            $("#player1-teammate-"+ (i+1).toString()).attr("src","http://stats.nba.com/media/players/230x185/"+player_teammates[i].lineup+".png")
        }
    }else{
        for (var i=0;i<player_teammates.length;i++){
            //d3.select("#player1-img").attr("src","http://stats.nba.com/media/players/230x185/"+playerid[0].person_id+".png");player1-teammate-1
            $("#player2-teammate-"+ (i+1).toString()).attr("src","http://stats.nba.com/media/players/230x185/"+player_teammates[i].lineup+".png")
        }
    }



}







