/**
 * -------------------------------------------------------------------------------------------------------
 * 1º exercício
 * Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve
 * extender uma segunda classe chamada "Usuario".
 * A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los
 * em propriedades da classe. A classe "Admin" por sua vez não recebe parâmetros mas deve
 * repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como
 * true na classe.
 * Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que
 * retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não.
 */
class Usuario {
    constructor(email, pwd, adm = false) {
        this.email = email;
        this.pwd   = pwd;
        this.adm   = adm;
    }

    isAdmin() {
        return `Usuário administrador do sistema? ${this.adm}`;
    }
}

class Admin extends Usuario {
    constructor(email, pwd) {
        super(email, pwd, true);
    }
}

const User1 = new Usuario('andrusfk2@gmail.com', 'abd123');
const Adm1  = new Admin('rafael@lugos.com.br', 'abd123');

console.log(User1.isAdmin());
console.log(Adm1.isAdmin());

/**
 * -------------------------------------------------------------------------------------------------------
 * 2º exercício
 * A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find).
 */
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

/**
 * 2.1 Utilizando o map
 * Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
 */
const idades = usuarios.map(elem => elem.idade);
console.log(idades);

/**
 * 2.2 Utilizando o filter
 * Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18 anos.
 */
const filtro = usuarios.filter(elem => (elem.idade > 18) ? elem : null);
console.log(filtro);

/**
 * 2.3 Utilizando o find
 * Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined.
 */
const finder = usuarios.find(elem => elem.empresa === 'Google');
console.log(finder);

/**
 * 2.4 Unindo operações
 * Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem no máximo 50 anos.
 */
setTimeout(() => {
    const newUsuarios = usuarios => {
        for (let usr of usuarios) usr.idade *= 2;
        return usuarios;
    }
    const filtro2 = newUsuarios(usuarios).filter(elem => (elem.idade < 50) ? elem : null );
    console.log(filtro2);
}, 3000);

/**
 * -------------------------------------------------------------------------------------------------------
 * 3º exercício
 * Converta as funções nos seguintes trechos de código em Arrow Functions.
 *  3.1
    const arr = [1, 2, 3, 4, 5];
    arr.map(function(item) {
        return item + 10;
    });

 * 3.2
    // Dica: Utilize uma constante pra function
    const usuario = { nome: 'Diego', idade: 23 };
    function mostraIdade(usuario) {
        return usuario.idade;
    }
    mostraIdade(usuario);

 * 3.3
    // Dica: Utilize uma constante pra function
    const nome = "Diego";
    const idade = 23;
    function mostraUsuario(nome = 'Diego', idade = 18) {
        return { nome, idade };
    }
    mostraUsuario(nome, idade);
    mostraUsuario(nome);

 * 3.4
    const promise = function() {
        return new Promise(function(resolve, reject) {
            return resolve();
        })
    }
 */

const arr = [1, 2, 3, 4, 5];
const newArr = arr.map(item => item + 10);
console.log(newArr);

const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = (usuario) => usuario.idade;
console.log(mostraIdade(usuario));

const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

const promise = () => {
    return new Promise((resolve, reject) => resolve());
}
console.log(promise());

/**
 * -------------------------------------------------------------------------------------------------------
 * 4º exercício
 * 4.1 Desestruturação simples
 * A partir do seguinte objeto:
 * Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, no
 * fim deve ser possível fazer o seguinte:
 * 
 * 4.2 Desestruturação em parâmetros
 * Na seguinte função:
 * Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário
 * separadamente e a função poder retornar apenas:
 */
// 4.1
const empresa = {
    nomeEmpresa: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const {nomeEmpresa, endereco: {cidade}, endereco: {estado}} = empresa;
console.log(nomeEmpresa); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

// 4.2
const mostraInfo = ({nome, idade}) => `${nome} tem ${idade} anos.`;
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));


/**
 * -------------------------------------------------------------------------------------------------------
 * 5º exercício
 * Utilizando o operador de rest/spread (...) realize as seguintes operações:
 * 5.1 Rest
 * A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeira
 * posição do vetor e outra variável y que recebe todo restante dos dados.
 * E depois, crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles.
 * 
 * 5.2 Spread
 * A partir do objeto e utilizando o operador spread:
 * Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.
 * Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.
 */
// 5.1
const arrr = [1, 2, 3, 4, 5, 6];
let [x, ...y] = arrr;
console.log(x);
console.log(y);

function somaParams(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(somaParams(1, 2, 3, 4, 5, 6)); // 21
console.log(somaParams(1, 2)); // 3

function concatenaStr(...paramsStr) {
    return paramsStr.reduce((concat, next) => `${concat}, ${next}`);
}
console.log(concatenaStr('Monique', 'Rafael', 'Thor', 'Halley'));

// 5.2
const usrSprd = {
    nomeeee: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil'
    }
};

const usrSprd1 = {...usrSprd, nomeeee: 'Gabriel'};
console.log(usrSprd1);
const usrSprd2 = {...usrSprd, endereco: {...usrSprd.endereco, cidade: 'Lontras'}};
console.log(usrSprd2);

/**
 * -------------------------------------------------------------------------------------------------------
 * 6º exercício
 * Converta o seguinte trecho de código utilizando Template Literals:
 */
const usuario2 = 'Diego';
const idade2 = 23;
console.log(`O usuário ${usuario2} possui ${idade2} anos`);


/**
 * -------------------------------------------------------------------------------------------------------
 * 7º exercício
 * Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto
 */
const nome3 = 'Diego';
const idade3 = 23;
const usuario99 = {
 nome3,
 idade3,
 cidade: 'Rio do Sul'
};