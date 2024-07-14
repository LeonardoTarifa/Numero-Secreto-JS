let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextaNaTela(tag, texto ){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.0});
}

exibirMensagemInicial()

function verificarChute(){
    let chute = document.querySelector("input").value;
    if(chute == numeroSecreto){
        exibirTextaNaTela("h1","Acertou!")
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagem = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextaNaTela("p",mensagem);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else if(chute > numeroSecreto){
        exibirTextaNaTela("h1","Errou");
        exibirTextaNaTela("p","O Número é menor");
        tentativas++
    }else{
        exibirTextaNaTela("h1","Errou");
        exibirTextaNaTela("p","O Número é maior");
        tentativas++
    }
    limparCampo();
}

function limparCampo(){
    chute = document.querySelector("input")
    chute.value = "";
}

function gerarNumeroAleatorio(){
   let numeroEscolhido =  parseInt(Math.random() * 3 + 1);

   if(listaDeNumerosSorteados.length == 3){
    listaDeNumerosSorteados = [];
   }

   if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   }else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
   }
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

function exibirMensagemInicial(){
    exibirTextaNaTela("h1","Jogo do Número Secreto");
    exibirTextaNaTela("p","Escolha um numero entre 1 e 10");
}