const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorAtual = document.getElementById('valor-atual');
const botoesNumeros = document.querySelectorAll('.numero');
const botoesOperadores = document.querySelectorAll('.operador');

const calculadora = new Calculadora(displayValorAnterior, displayValorAtual);

botoesNumeros.forEach(boton => {
    boton.addEventListener('click', () => calculadora.agregarNumero(boton.innerHTML));
});

botoesOperadores.forEach(boton => {
    boton.addEventListener('click', () => calculadora.computar(boton.value))
});