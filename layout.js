function CriaBotao(classe, valor, texto){
    botao = document.createElement("button");

    if(classe != "")
        botao.setAttribute("class", classe);
    
    if(valor != "")
        botao.setAttribute("value", valor);
    
    if(texto != "")
        botao.textContent = texto;

    return botao;
}

let container = document.getElementById("container");

let layout = document.createElement("div");
    layout.setAttribute("class", "layout");
    container.appendChild(layout);

let display = document.createElement("div");
    display.setAttribute("class", "display");
    layout.appendChild(display);

let valorAnterior = document.createElement("div");
let valorAtual = document.createElement("div");
    valorAnterior.setAttribute("id", "valor-anterior");
    valorAtual.setAttribute("id", "valor-atual");
    display.appendChild(valorAnterior);
    display.appendChild(valorAtual);

let botaoC = document.createElement("button");
    botaoC.setAttribute("class", "col-2");
    botaoC.setAttribute("onclick", "calculadora.apagarTudo()");
    botaoC.textContent = "C";

let botaoSeta = document.createElement("button");
    botaoSeta.setAttribute("onclick", "calculadora.apagar()");
    botaoSeta.textContent = "<--";

    layout.appendChild(botaoC);
    layout.appendChild(botaoSeta);
    layout.appendChild(CriaBotao("operador", "dividir", "%"));
    layout.appendChild(CriaBotao("numero", "", "7"));
    layout.appendChild(CriaBotao("numero", "", "8"));
    layout.appendChild(CriaBotao("numero", "", "9"));
    layout.appendChild(CriaBotao("operador", "multiplicar", "X"));
    layout.appendChild(CriaBotao("numero", "", "4"));
    layout.appendChild(CriaBotao("numero", "", "5"));
    layout.appendChild(CriaBotao("numero", "", "6"));
    layout.appendChild(CriaBotao("operador", "subtrair", "-"));
    layout.appendChild(CriaBotao("numero", "", "1"));
    layout.appendChild(CriaBotao("numero", "", "2"));
    layout.appendChild(CriaBotao("numero", "", "3"));
    layout.appendChild(CriaBotao("operador", "somar", "+"));
    layout.appendChild(CriaBotao("col-2 numero", "", "0"));
    layout.appendChild(CriaBotao("numero", "", "."));
    layout.appendChild(CriaBotao("operador", "igual", "="));

