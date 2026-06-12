/* ========================= */
/* ELEMENTOS */
/* ========================= */

const telaInicial = document.getElementById("telaInicial");
const telaPerguntas = document.getElementById("telaPerguntas");
const telaResultado = document.getElementById("telaResultado");

const btnIniciar = document.getElementById("btnIniciar");

const perguntaElemento = document.getElementById("pergunta");
const alternativasElemento = document.getElementById("alternativas");

const numeroPergunta = document.getElementById("numeroPergunta");
const totalPerguntas = document.getElementById("totalPerguntas");

const valorProducao = document.getElementById("valorProducao");
const valorAmbiente = document.getElementById("valorAmbiente");
const valorEconomia = document.getElementById("valorEconomia");

const barraProducao = document.getElementById("barraProducao");
const barraAmbiente = document.getElementById("barraAmbiente");
const barraEconomia = document.getElementById("barraEconomia");

/* ========================= */
/* VARIÁVEIS */
/* ========================= */

let producao = 50;
let ambiente = 50;
let economia = 50;

let perguntaAtual = 0;

/* ========================= */
/* PERGUNTAS */
/* ========================= */

const perguntas = [

{
    pergunta: "Uma área próxima à propriedade possui mata nativa. O que você faz?",

    alternativas: [
        { texto: "Desmatar para ampliar a produção.", producao: 15, ambiente: -20, economia: 5 },
        { texto: "Preservar parte da área.", producao: 5, ambiente: 5, economia: 0 },
        { texto: "Preservar totalmente a mata.", producao: 0, ambiente: 10, economia: 0 },
        { texto: "Preservar a mata e criar trilhas educativas.", producao: 5, ambiente: 15, economia: 10 }
    ]
},

{
    pergunta: "Como você pretende irrigar sua plantação?",

    alternativas: [
        { texto: "Usar água sem controle.", producao: 10, ambiente: -15, economia: -5 },
        { texto: "Controlar parcialmente o consumo.", producao: 5, ambiente: 5, economia: 5 },
        { texto: "Instalar irrigação por gotejamento.", producao: 10, ambiente: 10, economia: 5 },
        { texto: "Usar irrigação inteligente com sensores.", producao: 15, ambiente: 15, economia: 15 }
    ]
},

{
    pergunta: "O solo começa a apresentar sinais de desgaste. O que fazer?",

    alternativas: [
        { texto: "Ignorar o problema.", producao: -15, ambiente: -10, economia: -10 },
        { texto: "Aplicar fertilizantes em excesso.", producao: 10, ambiente: -10, economia: 0 },
        { texto: "Fazer rotação de culturas.", producao: 10, ambiente: 10, economia: 5 },
        { texto: "Rotação de culturas e cobertura vegetal.", producao: 15, ambiente: 15, economia: 10 }
    ]
},

{
    pergunta: "Como lidar com resíduos da produção?",

    alternativas: [
        { texto: "Descartar em qualquer local.", producao: 0, ambiente: -20, economia: -5 },
        { texto: "Separar apenas parte dos resíduos.", producao: 0, ambiente: 5, economia: 0 },
        { texto: "Fazer reciclagem dos materiais.", producao: 5, ambiente: 10, economia: 5 },
        { texto: "Transformar resíduos em compostagem.", producao: 10, ambiente: 15, economia: 10 }
    ]
},

{
    pergunta: "Uma nova tecnologia agrícola foi lançada. O que fazer?",

    alternativas: [
        { texto: "Ignorar a inovação.", producao: -5, ambiente: 0, economia: -10 },
        { texto: "Testar em pequena escala.", producao: 5, ambiente: 5, economia: 5 },
        { texto: "Adotar tecnologias sustentáveis.", producao: 10, ambiente: 10, economia: 10 },
        { texto: "Integrar tecnologia e monitoramento ambiental.", producao: 15, ambiente: 15, economia: 15 }
    ]
},

{
    pergunta: "Como proteger os recursos hídricos da propriedade?",

    alternativas: [
        { texto: "Não tomar nenhuma medida.", producao: 0, ambiente: -15, economia: -5 },
        { texto: "Proteger apenas as áreas principais.", producao: 5, ambiente: 5, economia: 0 },
        { texto: "Recuperar matas ciliares.", producao: 10, ambiente: 15, economia: 5 },
        { texto: "Recuperar e monitorar toda a área.", producao: 15, ambiente: 20, economia: 10 }
    ]
},

{
    pergunta: "Como será o uso de energia na propriedade?",

    alternativas: [
        { texto: "Usar apenas energia convencional.", producao: 5, ambiente: -10, economia: 0 },
        { texto: "Reduzir desperdícios.", producao: 5, ambiente: 5, economia: 5 },
        { texto: "Instalar painéis solares.", producao: 10, ambiente: 15, economia: 10 },
        { texto: "Combinar energia solar e eficiência energética.", producao: 15, ambiente: 20, economia: 15 }
    ]
},

{
    pergunta: "Como equilibrar produção e preservação ambiental?",

    alternativas: [
        { texto: "Priorizar apenas o lucro.", producao: 15, ambiente: -20, economia: 10 },
        { texto: "Buscar algum equilíbrio.", producao: 10, ambiente: 5, economia: 5 },
        { texto: "Produzir preservando o ambiente.", producao: 10, ambiente: 15, economia: 10 },
        { texto: "Integrar sustentabilidade em toda a propriedade.", producao: 15, ambiente: 20, economia: 15 }
    ]
}

];
/* ========================= */
/* INICIAR */
/* ========================= */

btnIniciar.addEventListener("click", iniciarJogo);

function iniciarJogo() {

    telaInicial.classList.remove("ativa");

    telaPerguntas.classList.add("ativa");

    totalPerguntas.textContent = perguntas.length;

    carregarPergunta();

}

/* ========================= */
/* CARREGAR PERGUNTA */
/* ========================= */

function carregarPergunta() {

    const atual = perguntas[perguntaAtual];

    numeroPergunta.textContent = perguntaAtual + 1;

    perguntaElemento.textContent = atual.pergunta;

    alternativasElemento.innerHTML = "";

   const alternativasMisturadas =
[...atual.alternativas].sort(() => Math.random() - 0.5);

alternativasMisturadas.forEach(alternativa => {

        const botao = document.createElement("button");

        botao.classList.add("opcao");

        botao.textContent = alternativa.texto;

        botao.addEventListener("click", () => {
            responder(alternativa);
        });

        alternativasElemento.appendChild(botao);

    });

}

/* ========================= */
/* RESPONDER */
/* ========================= */

function responder(alternativa) {

    producao += alternativa.producao;
    ambiente += alternativa.ambiente;
    economia += alternativa.economia;

    atualizarIndicadores();

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {

        carregarPergunta();

    } else {

        mostrarResultado();

    }

}

/* ========================= */
/* INDICADORES */
/* ========================= */

function atualizarIndicadores() {

    valorProducao.textContent = producao;
    valorAmbiente.textContent = ambiente;
    valorEconomia.textContent = economia;

    barraProducao.style.width = producao + "%";
    barraAmbiente.style.width = ambiente + "%";
    barraEconomia.style.width = economia + "%";

}

/* ========================= */
/* RESULTADO */
/* ========================= */

function mostrarResultado() {

    telaPerguntas.classList.remove("ativa");
    telaResultado.classList.add("ativa");

    const perfilFinal =
    document.getElementById("perfilFinal");

    const descricaoPerfil =
    document.getElementById("descricaoPerfil");

    const imagemResultado =
    document.getElementById("imagemResultado");

    document.getElementById(
        "resultadoProducao"
    ).textContent =
    "🌾 Produção: " + producao;

    document.getElementById(
        "resultadoAmbiente"
    ).textContent =
    "🌎 Meio Ambiente: " + ambiente;

    document.getElementById(
        "resultadoEconomia"
    ).textContent =
    "💰 Economia: " + economia;

    const media =
    (producao + ambiente + economia) / 3;

    if(media >= 85){

        perfilFinal.textContent =
        "Guardião do Futuro";

        descricaoPerfil.textContent =
        "Você encontrou o melhor equilíbrio entre produção, economia e preservação ambiental.";

        imagemResultado.src =
        "img/guardiao-futuro.png";

    }

    else if(media >= 75){

        perfilFinal.textContent =
        "Produtor Sustentável";

        descricaoPerfil.textContent =
        "Suas decisões mostram forte compromisso com a sustentabilidade.";

        imagemResultado.src =
        "img/produtor-sustentavel.png";

    }

    else if(media >= 65){

        perfilFinal.textContent =
        "Produtor Equilibrado";

        descricaoPerfil.textContent =
        "Você busca equilibrar produtividade e preservação ambiental.";

        imagemResultado.src =
        "img/produtor-equilibrado.png";

    }

    else if(media >= 55){

        perfilFinal.textContent =
        "Produtor Tradicional";

        descricaoPerfil.textContent =
        "Suas decisões favorecem a produção, mas ainda há espaço para melhorar a sustentabilidade.";

        imagemResultado.src =
        "img/produtor-tradicional.png";

    }

    else if(media >= 45){

        perfilFinal.textContent =
        "Explorador Ambiental";

        descricaoPerfil.textContent =
        "Você demonstrou preocupação ambiental, mas precisa melhorar a gestão produtiva.";

        imagemResultado.src =
        "img/explorador-ambiental.png";

    }

    else{

        perfilFinal.textContent =
        "Produtor em Risco";

        descricaoPerfil.textContent =
        "Suas decisões podem comprometer o futuro da propriedade e do meio ambiente.";

        imagemResultado.src =
        "img/produtor-risco.png";

    }

}
const reiniciar =
document.getElementById("reiniciar");

reiniciar.addEventListener("click", () => {

    location.reload();

});
/* ========================= */
/* MODO ESCURO */
/* ========================= */

const btnTema =
document.getElementById("btnTema");

btnTema.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        btnTema.textContent = "☀️";

    }else{

        btnTema.textContent = "🌙";

    }

});
/* ========================= */
/* TAMANHO DA FONTE */
/* ========================= */

let tamanhoFonte = 16;

const aumentarFonte =
document.getElementById("aumentarFonte");

const diminuirFonte =
document.getElementById("diminuirFonte");

aumentarFonte.addEventListener("click", () => {

    tamanhoFonte += 2;

    document.body.style.fontSize =
    tamanhoFonte + "px";

});

diminuirFonte.addEventListener("click", () => {

    if(tamanhoFonte > 10){

        tamanhoFonte -= 2;

        document.body.style.fontSize =
        tamanhoFonte + "px";

    }

});
/* ========================= */
/* LEITURA POR VOZ */
/* ========================= */

const btnAudio =
document.getElementById("btnAudio");

function lerTexto(texto){

    speechSynthesis.cancel();

    const fala =
    new SpeechSynthesisUtterance(texto);

    fala.lang = "pt-BR";

    speechSynthesis.speak(fala);

}

btnAudio.addEventListener("click", () => {

    let texto = "";

    if(telaInicial.classList.contains("ativa")){

        texto =
        document.body.innerText;

    }

    else if(
        telaPerguntas.classList.contains("ativa")
    ){

        texto =
        perguntaElemento.textContent;

    }

    else{

        texto =
        document.getElementById(
        "descricaoPerfil"
        ).textContent;

    }

    lerTexto(texto);

});