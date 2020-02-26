/**
 * A partir do seguinte vetor:
 * var nomes = ["Diego", "Gabriel", "Lucas"];
 * Preencha uma lista (<ul>) no HTML com os itens da seguinte forma:
 *    ● Diego
 *    ● Gabriel
 *    ● Lucas
 * 
 * Seguindo o resultado do exercício anterior adicione um input em tela e um botão como a seguir:
 *      <input type="text" name="nome">
 *      <button onClick="adicionar()">Adicionar</button>
 * Ao clicar no botão, a função adicionar() deve ser disparada adicionando um novo item a lista de
 * nomes baseado no nome preenchido no input e renderizando o novo item em tela juntos aos
 * demais itens anteriores. Além disso, o conteúdo do input deve ser apagado após o clique.
 */

$(document).ready(function() {

    let nomes = ['Rafael', 'Monique', 'Halley', 'Thor'];
    let objMyList = document.querySelector('div#app ul.myList');

    for (let nome of nomes) {
        let item = document.createElement('li');
        let addNome = document.createTextNode(nome);
        item.appendChild(addNome);
        objMyList.appendChild(item);
    }

    let myBtn = document.querySelector('button.myBtn');
    myBtn.onclick = function() {
        let myInput = document.querySelector('input.myInput');
        let inputVal = myInput.value;
        let item = document.createElement('li');
        let addNome = document.createTextNode(inputVal);
        item.appendChild(addNome);
        objMyList.appendChild(item);
        myInput.value = '';
    }
    
});


   