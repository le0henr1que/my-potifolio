function colorElemento(elemento){

    $(document).on('click', elemento, function(){
        $("#fundo").fadeIn("1000")
        $(elemento+"selecionado").css("width", "180px")
        $(elemento+"selecionado").css("border-radius", "150px")
        $(elemento+"selecionado").fadeIn("1000")
        sessionStorage.setItem('imagem',  $(elemento+"selecionado").attr('src'))


    })

     
    
}

function getColor(elementoColor){
    $(document).on('click', elementoColor, function(){
        var id = $(elementoColor).attr('id');
    $(".avatar").css("background", "#"+id )
    sessionStorage.setItem('color', id)

    })
}

$(document).on('click', "#back", function(){
    $("#fundo").fadeOut("1000")
    $(".avSelect").fadeOut("1000")

})

var click = 0
$(document).on('click', "#next", function(){
click++
    $(".cor").fadeOut('fast')
    setTimeout(function() {
        $(".nome").fadeIn("slow")
    }, 100);

    if(click == 2){
        sessionStorage.setItem('nomeInd',  $(".txt").val())
        window.location.href = "file:///C:/Users/leona/Desktop/Portifolio/Port/page.html";
    }


})

getColor(".cor1")
getColor(".cor2")
getColor(".cor3")
getColor(".cor4")
getColor(".cor5")
colorElemento("#av1")
colorElemento("#av2")
colorElemento("#av3")
colorElemento("#av4")
colorElemento("#av5")