
setTimeout(function() {
var nome = sessionStorage.getItem("nomeInd")
var avatar = sessionStorage.getItem("imagem")
var color = sessionStorage.getItem("color")
$("#av1").attr("src", avatar).css("background", "#"+color)
$(".visitor").text(nome)
$("#fundo").fadeOut("1000")
$(".baner-lateral").animate({left: '180px'});

}, 1000);
setTimeout(function() {

    $(".baner-lateral").animate({left: '0px'});

}, 3000);

// alert(nome)
// alert(avatar)
// alert(color)

function abilit(popUp, img, texto){
    $(document).on('mouseover',img, function() {
        $(popUp).fadeIn("1000");
        $("#tecno").text(texto)
    });
    $(document).on('mouseout',img, function() {
        $(popUp).fadeOut("1000");
    });
  
}
abilit("#q1", ".img1", "JavaScript")
abilit("#q1", ".img2", "PHP")
abilit("#q1", ".img3", "Node.Js")
abilit("#q1", ".img4", "Python")
abilit("#q1", ".img5", "Mysql")
abilit("#q1", ".img6", "React Native")

$(document).ready(function(){
    $(".baner-lateral").click(function(){
      $(".baner-lateral").animate({left: '180px'});
      setTimeout(function() {

        $(".baner-lateral").animate({left: '0px'});
    
    }, 3000);
    });
   
  });

 
