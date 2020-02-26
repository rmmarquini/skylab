/**
 * 1º exercício
 * Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado
 * vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
 * aparecer na tela.
 * 
 * 2º exercício
 * Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de
 * algum quadrado troque sua cor para uma cor aleatória gerada por uma função.
 */

$(document).ready(function() {
    const btnSquares = document.querySelector('button.btn');
    const divSquares = document.querySelector('div#squares');
    
    btnSquares.onclick = function() {
        let divSquare = document.createElement('div');
        divSquares.appendChild(divSquare).classList.add('square');
        
        divSquare.onmouseover = function() {
            let newColor = getRandomColor();
            divSquare.setAttribute('style', 'background:'+newColor+';');
        };
    };
});

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i=0; i<6; i++)
        color += letters[Math.floor(Math.random()*16)];
    return color;
}
   