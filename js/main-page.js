
setTimeout(function() {
var nome = sessionStorage.getItem("nomeInd")
var avatar = sessionStorage.getItem("imagem")
var color = sessionStorage.getItem("color")
$("#av1").attr("src", avatar).css("background", "#"+color)
$(".visitor").text(nome)
$("#fundo").fadeOut("1000")
$(".baner-lateral").animate({left: '160'});

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
abilit("#q1", ".img4", "React Native")
abilit("#q1", ".img5", "Mysql")

$(document).ready(function(){

    $(".baner-lateral").mouseover(function(){
      $(".baner-lateral").animate({left: '160px'});
      setTimeout(function() {

        $(".baner-lateral").animate({left: '0px'});
    
    }, 3000);
    });
   
  });

 
  let ver = 0
  $(document).on('click', "#skills", function(){
    ver++
    $("#projects").fadeOut("1000")
    $("#banSkill").animate({height: '85%'});
    $(".hidden").fadeIn("1000").css("display", "flex")
    $("#skills").text("Ver Menos")
    if(ver == 2){
      $("#projects").fadeIn("1000")
      $("#banSkill").animate({height: '39%'});
      $(".hidden").fadeOut("1000").css("display", "flex")
      $("#skills").text("Ver Todos")
      ver = 0
    }
  })
  
    $(document).on('click', "#verProje", function(){
      ver++

      $("#banSkill").animate({height: '0%'})
      $("#projects").animate({marginTop: '-0%'})
      $("#projects").animate({height: '70%'});
      $("#verProje").text("Ver Menos")
      $("#newProj1").fadeIn("1000")
  

    
      if(ver == 2){
        $("#banSkill").animate({height: '39%'})
        $("#projects").animate({marginTop: '20px'}).animate({height: '44%'});
        $("#verProje").text("Ver Todos")
        $("#newProj1").fadeOut("1000")
       



        ver = 0
      }
  
    
  })
  function getMovieo(btn, link){
    $(document).on('click', btn, function(){
      $("#fundo2").fadeIn("1000")
      $("#makeMovie").attr("src", link)

    })
  }
  $(document).on("click", "#fundo2", function(){
    $("#fundo2").fadeOut("1000")

  })
  getMovieo("#openMovie1", "https://www.youtube.com/embed/kdfCEBjClDs")
  getMovieo("#openMovie2", "https://www.youtube.com/embed/BhMcBkmxUfY")
  getMovieo("#openMovie3", "https://www.youtube.com/embed/aSfDYzWaSvk")
  getMovieo("#openMovie4", "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJEe2iIcInjoeCTTfJDZZat%2FProt%25C3%25B3tipo-final%3Fpage-id%3D622%253A1057%26node-id%3D622%253A3450%26viewport%3D294%252C48%252C0.05%26scaling%3Dscale-down%26starting-point-node-id%3D622%253A5794")
  getMovieo("#openMovie5", "https://www.youtube.com/embed/9two6beTzAE")
    
