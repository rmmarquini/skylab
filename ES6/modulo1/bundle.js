"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var List = /*#__PURE__*/function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}();
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


var UserList = /*#__PURE__*/function (_List) {
  _inherits(UserList, _List);

  function UserList() {
    _classCallCheck(this, UserList);

    return _possibleConstructorReturn(this, _getPrototypeOf(UserList).apply(this, arguments));
  }

  _createClass(UserList, null, [{
    key: "returnUser",
    value: function returnUser(name) {
      return name;
    }
  }]);

  return UserList;
}(List); // const MinhaLista = new TodoList();


var MinhaLista = new List();

document.getElementById('novotodo').onclick = function () {
  return MinhaLista.add(UserList.returnUser('Rafael'));
}; // MUTACAO DE CONSTANTES QDO UTILIZA-SE OBJETOS


var Usuario = {
  nome: 'Rafael'
};
Usuario.nome = 'Monique';
console.log(Usuario); // TRABALHANDO COM VETORES

var arr = [1, 3, 4, 5, 8, 9];
console.log("Meu array ".concat(arr)); // UTILIZEI TBM TEMPLATE LITERAL PARA ESCREVER STRING COM VARIAVEL
// MAP -> percorre o vetor e retorna o desejado

var newArr = arr.map(function (item) {
  return item * 2;
});
console.log("MAP -> percorre o vetor e retorna o desejado ".concat(newArr, ", no caso multiplicamos todos os itens do array por 2."));
var newArr1 = arr.map(function (item, index) {
  return item + index;
});
console.log("MAP -> tbm posso somar os itens ao index de cada posi\xE7\xE3o do array: ".concat(newArr1)); // REDUCE -> uma forma de transformar nosso vetor em um único valor ou informação

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log("REDUCE -> \xE9 uma forma de transformar nosso vetor em um \xFAnico valor, por exemplo somar os valores do array, cujo resultado seria ".concat(sum, ".")); // FILTER

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log("FILTER -> retorna apenas os itens desejados conforme express\xE3o aplicada, por exemplo em nosso array retornar somente os pares ter\xEDamos ".concat(filter)); // FIND -> verifica se existe uma informação dentro de um array

var find = arr.find(function (item) {
  return item === 4;
});
console.log("FIND -> possibilita encontrarmos determinados itens em nosso array. Por exemplo, existe o item ".concat(find, " em nosso array.")); // ARROW FUNCTIONS SIMPLIFICAM A FORMA COMO ESCREVEMOS NOSSO CODIGO. REDUZINDO E OTIMIZANDO A VERBOSE!!!
// MAS NAO É RECOMENDADO APLICAR ARROW FUNCTION EM FUNÇÕES, POR EXEMPLO

var teste = function teste() {
  return {
    nome: 'Rafael'
  };
};

console.log(teste()); // FUNCOES COM PARAMETROS DE VALORES PREDEFINIDOS

var soma = function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
};

console.log(soma(1));
console.log(soma()); // DESESTRUTURACAO

var usuarioo = {
  nome: 'Rafael',
  idade: 35,
  endereco: {
    cidade: 'Amparo',
    uf: 'SP'
  }
};
var nome = usuarioo.nome,
    idade = usuarioo.idade,
    cidade = usuarioo.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraDados(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraDados(usuarioo); // REST -> pega o resto das propriedades

var dadosUsuario = {
  nomee: 'Rafael',
  idade: 35,
  empresa: 'Lugos Lab'
};

var nomee = dadosUsuario.nomee,
    resto = _objectWithoutProperties(dadosUsuario, ["nomee"]);

console.log(nomee);
console.log(resto);
var arrRest = [1, 2, 3, 4];
var a = arrRest[0],
    b = arrRest[1],
    c = arrRest.slice(2);
console.log(a);
console.log(b);
console.log(c);

function novaSoma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(novaSoma(1, 2, 3, 4, 5, 6, 7, 8, 9)); // SPREAD -> propaga informações entre estruturas de dados

var arrX = [1, 2, 3, 4];
var arrY = [5, 6, 7, 8];
var arrZ = [].concat(arrX, arrY);
console.log(arrZ);

var dadosUsuario2 = _objectSpread({}, dadosUsuario, {
  nome: 'Monique'
});

console.log(dadosUsuario2);
