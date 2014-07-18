$(document).ready(function() {
    efeito();
    $("section").hover(function() {
        $(".btn1, .btn2, .contar").show();
    }, function() {
            $(".btn1, .btn2, .contar").hide();
        }
    );
    $(".btn1").click(function() {
        anterior();
    });
    $(".btn2").click(function() {
        proxima();
    });
});

var pos = 0;
var aux = 1;
var um, dois;
var imagens = Array(
    'img1',
    'img2',
    'img3'
);
        
function efeito() {
    if(pos > (imagens.length)-1) {
        pos = 0;
        aux = 1;
    } else if(pos < 0) {
        pos = (imagens.length)-1;
        aux = imagens.length;
    }
    $(".contar").text(aux + '/' + imagens.length);
    $(".imagem").attr("src", 'img/' + imagens[pos] + '.jpg').
        slideDown();
    um = setTimeout(aparecer, 1000);
}

function aparecer() {
    $(".imagem").slideUp();
    dois = setTimeout(efeito, 500);
    pos ++;
    aux ++;
}

function proxima() {
    pos ++;
    aux ++;
    clearTimeout(um); 
    clearTimeout(dois);   
    efeito();
}

function anterior() {
    pos --;
    aux --;
    clearTimeout(um); 
    clearTimeout(dois);
    efeito();
}