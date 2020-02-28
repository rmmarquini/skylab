class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

/*
class TodoList extends List {
    constructor() {
        // A PROPRIEDADE super() É UTILIZADA PARA INVOCAR A CLASSE PARENT 
        // DENTRO DE UMA CLASSE CHILD ONDE OCORREU O extends
        super();

        this.usuario = 'Rafael';
    }

    mostraUsuario() {
        return this.usuario;
    }
}
*/

class UserList extends List {
    static returnUser(name) {return name}
}

// const MinhaLista = new TodoList();
const MinhaLista = new List();
document.getElementById('novotodo').onclick = () => MinhaLista.add( UserList.returnUser('Rafael') );


// MUTACAO DE CONSTANTES QDO UTILIZA-SE OBJETOS
const Usuario = {nome: 'Rafael'};
Usuario.nome = 'Monique';
console.log(Usuario);


// TRABALHANDO COM VETORES
const arr = [1, 3, 4, 5, 8, 9];
console.log(`Meu array ${arr}`);

// UTILIZEI TBM TEMPLATE LITERAL PARA ESCREVER STRING COM VARIAVEL
// MAP -> percorre o vetor e retorna o desejado
const newArr = arr.map( item => item * 2 );
console.log(`MAP -> percorre o vetor e retorna o desejado ${newArr}, no caso multiplicamos todos os itens do array por 2.`);

const newArr1 = arr.map( (item, index) => item + index );
console.log(`MAP -> tbm posso somar os itens ao index de cada posição do array: ${newArr1}`);

// REDUCE -> uma forma de transformar nosso vetor em um único valor ou informação
const sum = arr.reduce( (total, next) => total + next);
console.log(`REDUCE -> é uma forma de transformar nosso vetor em um único valor, por exemplo somar os valores do array, cujo resultado seria ${sum}.`);

// FILTER
const filter = arr.filter( item => item % 2 === 0 );
console.log(`FILTER -> retorna apenas os itens desejados conforme expressão aplicada, por exemplo em nosso array retornar somente os pares teríamos ${filter}`);

// FIND -> verifica se existe uma informação dentro de um array
const find = arr.find( item => item === 4);
console.log(`FIND -> possibilita encontrarmos determinados itens em nosso array. Por exemplo, existe o item ${find} em nosso array.`);

// ARROW FUNCTIONS SIMPLIFICAM A FORMA COMO ESCREVEMOS NOSSO CODIGO. REDUZINDO E OTIMIZANDO A VERBOSE!!!
// MAS NAO É RECOMENDADO APLICAR ARROW FUNCTION EM FUNÇÕES, POR EXEMPLO
const teste = () => ({nome: 'Rafael'});
console.log(teste());


// FUNCOES COM PARAMETROS DE VALORES PREDEFINIDOS
const soma = (a = 3, b = 6) => a + b;
console.log(soma(1));
console.log(soma());

// DESESTRUTURACAO
const usuarioo = {
    nome: 'Rafael',
    idade: 35,
    endereco: {
        cidade: 'Amparo',
        uf: 'SP'
    }
};

const { nome, idade, endereco: {cidade} } = usuarioo;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraDados( {nome, idade} ) {
    console.log(nome, idade);
}

mostraDados(usuarioo);

// REST -> pega o resto das propriedades
const dadosUsuario = {
    nomee: 'Rafael',
    idade: 35,
    empresa: 'Lugos Lab'
};

const { nomee, ...resto } = dadosUsuario;
console.log(nomee);
console.log(resto);

const arrRest = [1, 2, 3, 4];
const [a, b, ...c] = arrRest;
console.log(a);
console.log(b);
console.log(c);


function novaSoma(...params) {
    return params.reduce( (total, next) => total + next );
}
console.log(novaSoma(1, 2, 3, 4, 5, 6, 7, 8, 9));



// SPREAD -> propaga informações entre estruturas de dados
const arrX = [1, 2, 3, 4];
const arrY = [5, 6, 7, 8];
const arrZ = [...arrX, ...arrY];
console.log(arrZ);

const dadosUsuario2 = { ...dadosUsuario, nome: 'Monique' };
console.log(dadosUsuario2);


