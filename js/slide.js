$(document).ready(function() {
    //Quando documento estiver pronto
    efeito();//chamar função responsável pelos efeitos
    $(".slide").hover(function() {
        $(".btn1, .btn2, .contar").show();
    }, function() { //Efeito hover : quando mouse posicionado sobre a section irá aparecer, quando não, desaparecer.
            $(".btn1, .btn2, .contar").hide();
        }
    );
    $(".btn1").click(function() {
        anterior(); //ao clicar em > chamará a função próxima responsável pela próxima imagem
    });
    $(".btn2").click(function() {
        proxima(); //idem imagem anterior
    });
});

var pos = 0; //contar imagens
var aux = 1; //auxiliar pra exibir a quantidade
var um, dois; //responsável pelos 2 timers

var imagens = Array(
    ['img1.jpg', 'Campo verde e campo, bom para passear com a família'],
    ['img2.jpg', 'Campo tranquilo e calmo, bom para um piquinique'],
    ['img3.jpg', 'Campo montanhoso, ótimo para atividades ao ar livre'],
    ['img4.jpg', 'Avião da Malaysia Airlines com 298 pessoas a bordo cai na Ucrânia']
    //array de imagens, com seus respectivos nomes e legendas
);

function efeito() {
    if(pos > (imagens.length)-1) {
        pos = 0;
        aux = 1;
        //se a atual imagem for maior que a última, ele voltará para o ínicio
    } else if(pos < 0) { //idem, caso < 0 voltará para a última
        pos = (imagens.length)-1;
        aux = imagens.length;
    }
    $(".contar").text('[' + aux + '/' + imagens.length + '] ' + imagens[pos][1]);
    //atribuir o texto na class contar exibindo imagem atual e legenda
    $(".imagem").attr("src", 'img/' + imagens[pos][0]). //setando o atributo src das imagens, de acordo com a posição do array
        slideDown(); //efeito fadeIn
    um = setTimeout(aparecer, 2000); //chamando timer responsável pelo efeito fadeOut
}

function aparecer() {
    $(".imagem").slideUp();
    dois = setTimeout(efeito, 500);
    pos ++;
    aux ++; //incrementa a imagem e chama novamente o efeito()
}

//função responsável pela próxima imagem ao clicar. Ele destroi os timers corrente e avança a imagem.
function proxima() {
    pos ++;
    aux ++;
    clearTimeout(um); 
    clearTimeout(dois);   
    efeito();
}

//idem
function anterior() {
    pos --;
    aux --;
    clearTimeout(um); 
    clearTimeout(dois);
    efeito();
}