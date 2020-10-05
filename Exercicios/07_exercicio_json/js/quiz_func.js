var cont_pontos = 0;
var alt_certa = 0;
var aleatorio = 200;
var ja_foi0 = 0;
var ja_foi1 = 1;
var ja_foi2 = 2;
var ja_foi3 = 3;
var ja_foi4 = 4;
var ja_foi5 = 5;
var ja_foi6 = 6;
var ja_foi7 = 7;
var ja_foi8 = 8;
var ja_foi9 = 9;


function verifica(escolheu) {
    var fim = 0;
    var gerar_novamente = 0;

   var arq = opcoes;

    // VERIFICAR SE ACERTOU 
        // DEIXA A CERTA VERDE SE ACERTOU
        if(escolheu == alt_certa){
            cont_pontos+= 10;
            document.getElementById('pontos').innerHTML = cont_pontos;
        }
    
  
    // GERAR PERGUNTA ALEATORIAMENTE SEM REPETIR E VERIFICA SE CONCLUIU O QUIZ
    do{
        aleatorio = Math.floor((Math.random() *10));
        gerar_novamente = 0;
        
        if(aleatorio == 0){  // JA FOI A PERGUNTA 0
            if(ja_foi0 == 99){
                gerar_novamente = 1;
            }
        }
        if(aleatorio == 1){  // JA FOI A PERGUNTA 1
            if(ja_foi1 == 99){
                gerar_novamente = 1;
            }
        }
        if(aleatorio == 2){  // JA FOI A PERGUNTA 2
            if(ja_foi2 == 99){
                gerar_novamente = 1;
            }
        }
        if(aleatorio == 3){  // JA FOI A PERGUNTA 3
            if(ja_foi3 == 99){
                gerar_novamente = 1;
            }
        }
        if(aleatorio == 4){  // JA FOI A PERGUNTA 4
            if(ja_foi4 == 99){
                gerar_novamente = 1;
            }
        }
        if(aleatorio == 5){  // JA FOI A PERGUNTA 5
            if(ja_foi5 == 99){
                gerar_novamente = 1;
            }
        }
        if(aleatorio == 6){  // JA FOI A PERGUNTA 6
            if(ja_foi6 == 99){
                gerar_novamente = 1;
            }
        }
        if(aleatorio == 7){  // JA FOI A PERGUNTA 7
            if(ja_foi7 == 99){
                gerar_novamente = 1;
            }
        }
        if(aleatorio == 8){  // JA FOI A PERGUNTA 8
            if(ja_foi8 == 99){
                gerar_novamente = 1;
            }
        }
        if(aleatorio == 9){  // JA FOI A PERGUNTA 9
            if(ja_foi9 == 99){
                gerar_novamente = 1;
            }
        }

        if((ja_foi0 == 99) && (ja_foi1 == 99) && (ja_foi2 == 99) && (ja_foi3 == 99) && (ja_foi4 == 99) && (ja_foi5 == 99) && (ja_foi6 == 99) && (ja_foi7 == 99) && (ja_foi8 == 99) && (ja_foi9 == 99)){
            fim = 1;
        }

    } while((gerar_novamente == 1) && (fim == 0));


    // SE ACABOU AS PERGUNTAS : QUIZ CONCLUIDO : VAI PARA PÁGINA FINAL
    if(fim == 1){
        concluido(cont_pontos);
    }


    // ATUALIZAR AS PERGUNTAS, ALTERNATIVAS E ALTERNATIVA CERTA PEGANDO DO ARQUIVO JSON
    document.getElementById('pergunta').innerHTML="<img src=" + arq[aleatorio].imagem + " class = imagens> ";
    document.getElementById('alt1').innerHTML=arq[aleatorio].alternativas[0];
    document.getElementById('alt2').innerHTML=arq[aleatorio].alternativas[1];
    document.getElementById('alt3').innerHTML=arq[aleatorio].alternativas[2];
    document.getElementById('alt4').innerHTML=arq[aleatorio].alternativas[3];
    alt_certa = arq[aleatorio].resposta;

    // MARCA QUAIS PERGUNTAS JÁ FORAM
    // PERGUNTA 0:
    if(aleatorio == ja_foi0){
        ja_foi0 = 99;
    }

     // PERGUNTA 1:
     if(aleatorio == ja_foi1){
        ja_foi1 = 99;
    }

    // PERGUNTA 2:
    if(aleatorio == ja_foi2){
        ja_foi2 = 99;
    }

    // PERGUNTA 3:
    if(aleatorio == ja_foi3){
        ja_foi3 = 99;
    }

    // PERGUNTA 4:
    if(aleatorio == ja_foi4){
        ja_foi4 = 99;
    }

    // PERGUNTA 5:
    if(aleatorio == ja_foi5){
        ja_foi5 = 99;
    }

    // PERGUNTA 6:
    if(aleatorio == ja_foi6){
        ja_foi6 = 99;
    }

    // PERGUNTA 7:
    if(aleatorio == ja_foi7){
        ja_foi7 = 99;
    }
    
    // PERGUNTA 8:
    if(aleatorio == ja_foi8){
        ja_foi8 = 99;
    }

    // PERGUNTA 9:
    if(aleatorio == ja_foi9){
        ja_foi9 = 99;
    }

}

function concluido(pontos){
    window.location.href = "tela_concluido.html?"+pontos; 
    // TROCA DE PÁGINA PASSANDO OS PONTOS POR PARAMETROS
}

function final(){
    // RECEBE OS PONTOS POR PARAMETROS
    var URL = window.location.search.substring(1);
    console.log(URL);
    var vet = URL.split('=');
    document.getElementById('pontos_finais').innerHTML=vet[0];
    vet[0] = vet[0] / 10;
    document.getElementById('perguntas').innerHTML=vet[0];
}