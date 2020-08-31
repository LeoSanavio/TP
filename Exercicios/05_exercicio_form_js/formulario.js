
    function confirma() {
        var opcao;
        opcao = confirm('Deseja limpar o formulario?');
        if(opcao == true){
            document.curriculo.reset();
        }
    }

    function verifica(){
        var ver1=0, ver2=0, ver3=0, ver4=0;
        var tamanho = document.curriculo.nome.value;
        if(tamanho.length < 3){
            alert('O nome precisa conter mais de 3 letras!');
        }

        else{
            document.curriculo.nome.value.toUpperCase();
            ver1=1;
        }

        document.curriculo.objetivo.value.toUpperCase();

        var estadocivil = document.curriculo.estado_civil.value;

            if(estadocivil == ""){
                document.getElementById('paragrafo').innerHTML = " Selecione um estado civil válido!";
            }
            else{
                document.getElementById('paragrafo').innerHTML = "";
                ver2=1;
            }
            
            var tel = document.curriculo.telefone.value;
            var em = document.curriculo.email.value;
          
            if(!(document.curriculo.telefone.value.match(document.curriculo.telefone.pattern)) && !(document.curriculo.email.value.match(document.curriculo.email.pattern)) ){
                alert("E-MAIL ou TELEFONE precisa ser preenchido corretamente!");
            }
            else{
                ver3=1;
            }
            
            var nv_ingles = document.curriculo.ingles.value;
            var nv_espa = document.curriculo.espanhol.value;

            if((nv_ingles == "") || (nv_espa == "")){
                alert("Selecione o nivel dos idiomas!");
            }
            else{
                ver4=1;
            }
            var selecionado=0;
            var ver5=0;
            var flag =0;
            for (let i = 0; i < 8; i++) {
                if (document.curriculo.conhecimento[i].checked)
                  flag=1;
                  selecionado=1;
            }
            
            if(flag==0){
                if(ver5==0){
                    var op = confirm("DESEJA ENVIAR SEM SELECIONAR NENHUMA LINGUAGEM?");
                if (op == false){
                    ver5=0;
                    selecionado=0;
                }
                if(op == true){
                    ver5=1;
                }
            }
        }
        if(selecionado ==1){
            ver5=1;
        }

        // Se todas as verificacoes estiverem corretas -> enviar
        if((ver1==1) && (ver2==1) && (ver3==1) && (ver4==1) && (ver5==1)){
            alert("FORMULARIO ENVIADO");
            document.curriculo.submit();
        }
}