$("").on("click", function(){
  $("").hide();
  $("").show();
});

var musica = new Audio('');
var tentativas = 3;

$("section.inicio button").on("click", function(){
  musica = new Audio('musica/musica.mp3')
  musica.play();
  erros = 0;

  $("section").hide();
  $("section.cantores-1").show();

  setInterval(function(){

    tempo = $("span.tempo").text();
    soma = parseInt(tempo) + 1;
    if(soma < 10){
      soma = "0" + soma;
    }
  
    if(soma > 14){
      //acabando o tempo
      $('span.tempo').css({"color":"red"});
    }

    if(soma > 40){
      //usuario perdeu
      musica.pause();
      musica = new Audio("musica/game-over-acarde.wav");
      musica.play();
      $("section").hide();
      $("section.cantores-2").show();
    }

    $("span.tempo").text(soma);
  
  },1000);
});

$("section.cantores-1 ul img.certo").one("click",function(){

    musica.pause();
    musica = new Audio("musica/correct.mp3");
    musica.play();
    $("section").hide();
    $("section.cantores-3").show();

});

var erros = 0;
$("section.cantores-1 ul img.errado").one("click",function(){
  tentativas--;
  $(this).css({
    opacity: 0.5
  });
  if(tentativas < 1){
    musica.pause();
    musica = new Audio("musica/game-over-acarde.wav");
    musica.play();

    //transição de tela
    $("section").hide();
    $("section.cantores-2").show();

  }
  document.querySelector(".valTentativas").innerHTML = tentativas;

});

$("#home").on('click',function(){
  $('section').hide();
  $('section.inicio').show();
  document.location.reload();
});

$('#som').on('click',function(){
  if(!musica.paused){
    $(this).text('volume_off');
    musica.pause();
  }else {
    $(this).text('volume_up');
    musica.play();
  }
  
});

$("#ajuda").on('click',function(){
  var random = Math.floor(Math.random()*10);
  $("section.cantores-1 ul img.errado").eq(random).fadeOut();
});

$('section.cantores-2 button').on('click',function(){
  $('section').hide();
  $('section.inicio').show();
  document.location.reload();
});

$('section.cantores-3 button').on('click',function(){
  $('section').hide();
  $('section.inicio').show();
  document.location.reload();
});

