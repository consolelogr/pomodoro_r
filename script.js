$(function(){ //onload
var worktime=45*60;
var breaktime=10*60;
var flip=0;
var startreset=0;
/*if(worktime/60<10){
$("#time").html("0"+worktime/60+":00");

}
if(worktime*60>=10){
$("#time").html(worktime/60+":00");
}*/

function startTimer(xsecondz) {

  if(startreset===1){
  $('.reset').on( "click", function() {
    $(".reset").unbind();
    $(".start").bind();
  if(worktime/60<10){
    $("#time").html("0"+worktime/60+":00");

  }
  if(worktime/60>=10){
    $("#time").html(worktime/60+":00");
  }
startreset=0;

    clearInterval(counter);

  });
  }



    var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

    function timer() {
        minutes = (xsecondz / 60) | 0;
        seconds = (xsecondz % 60) | 0;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        $('#time').html(minutes + ":" + seconds);

        $('#progress').attr('value',xsecondz/worktime*100);

        xsecondz = xsecondz - 1;

        if (xsecondz <= 0 &&flip===0) {
            clearInterval(counter);
            flip=1;
            xsecondz=1;
            setTimeout(
                function() {
                  $('.breaktitle').css("text-decoration", "underline");
                  $('.dotitle').css("text-decoration", "none");
                  $("#breaksound").trigger('play');
                },
                (1000));

            startTimer(breaktime);
        }

        if (xsecondz <= 0 &&flip===1) {
            clearInterval(counter);
            setTimeout(
                function() {
                  $('.breaktitle').css("text-decoration", "none");
                  $('.dotitle').css("text-decoration", "underline");
                    $("#worksound").trigger('play');
                },
                (1000));
            flip=0;
            startTimer(worktime);

        }

    }
}


$('.start').on( "click", function() {
if(startreset===0){
startreset=1;
  startTimer(worktime);}
});



$('#doplus').on( "click", function() {
if(startreset===0){

if(worktime<99*60){  worktime+=60;
$(".dotime").html(worktime/60);

  if(worktime/60<10){
    $("#time").html("0"+worktime/60+":00");

  }
  if(worktime/60>=10){
    $("#time").html(worktime/60+":00");
  }
}

}
});

$('#dominus').on( "click", function() {
if(startreset===0){

  if(worktime>=120){  worktime-=60;
  $(".dotime").html(worktime/60);

  if(worktime/60<10){
    $("#time").html("0"+worktime/60+":00");

  }
  if(worktime/60>=10){
    $("#time").html(worktime/60+":00");
  }
}

}
});




$('#breakplus').on( "click", function() {
  if(startreset===0){

    if(breaktime<99*60){  breaktime+=60;
    $(".breaktime").html(breaktime/60);}

  }
});

$('#breakminus').on( "click", function() {
  if(startreset===0){

    if(breaktime>=120){  breaktime-=60;
    $(".breaktime").html(breaktime/60);}

  }
});









}); //onload end