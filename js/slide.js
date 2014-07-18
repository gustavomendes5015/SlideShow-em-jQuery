$(document).ready(function() {
            efeito();
            $("section").hover(function() {
                $(".btn1, .btn2").show();
                }, function() {
                    $(".btn1, .btn2").hide();
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
        var um, dois;
        var imagens = Array(
            'img1',
            'img2',
            'img3'
        );
        
        function efeito() {
            if(pos > (imagens.length)-1) {
                pos = 0;
            } else if(pos < 0) {
                pos = (imagens.length)-1;
            }
            $("#imagem").attr("src", 'img/' + imagens[pos] + '.jpg').
                slideDown();
            um = setTimeout(aparecer, 5000);
        }
        function aparecer() {
            $("#imagem").slideUp();
            dois = setTimeout(efeito, 500);
            pos ++;
        }
        function proxima() {
            pos++;
            clearTimeout(um); 
            clearTimeout(dois);   
            efeito();
        }
        function anterior() {
            pos--;
            clearTimeout(um); 
            clearTimeout(dois);
            efeito();
        }