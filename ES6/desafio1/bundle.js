"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
var Usuario = /*#__PURE__*/function () {
  function Usuario(email, pwd) {
    var adm = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, Usuario);

    this.email = email;
    this.pwd = pwd;
    this.adm = adm;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return "Usu\xE1rio administrador do sistema? ".concat(this.adm);
    }
  }]);

  return Usuario;
}();

var Admin = /*#__PURE__*/function (_Usuario) {
  _inherits(Admin, _Usuario);

  function Admin(email, pwd) {
    _classCallCheck(this, Admin);

    return _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, email, pwd, true));
  }

  return Admin;
}(Usuario);

var User1 = new Usuario('andrusfk2@gmail.com', 'abd123');
var Adm1 = new Admin('rafael@lugos.com.br', 'abd123');
console.log(User1.isAdmin());
console.log(Adm1.isAdmin());
/**
 * -------------------------------------------------------------------------------------------------------
 * 2º exercício
 * A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find).
 */

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
/**
 * 2.1 Utilizando o map
 * Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
 */

var idades = usuarios.map(function (elem) {
  return elem.idade;
});
console.log(idades);
/**
 * 2.2 Utilizando o filter
 * Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18 anos.
 */

var filtro = usuarios.filter(function (elem) {
  return elem.idade > 18 ? elem : null;
});
console.log(filtro);
/**
 * 2.3 Utilizando o find
 * Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined.
 */

var finder = usuarios.find(function (elem) {
  return elem.empresa === 'Google';
});
console.log(finder);
/**
 * 2.4 Unindo operações
 * Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem no máximo 50 anos.
 */

setTimeout(function () {
  var newUsuarios = function newUsuarios(usuarios) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = usuarios[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var usr = _step.value;
        usr.idade *= 2;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return usuarios;
  };

  var filtro2 = newUsuarios(usuarios).filter(function (elem) {
    return elem.idade < 50 ? elem : null;
  });
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

var arr = [1, 2, 3, 4, 5];
var newArr = arr.map(function (item) {
  return item + 10;
});
console.log(newArr);
var usuario = {
  nome: 'Diego',
  idade: 23
};

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
};

console.log(mostraIdade(usuario));
var nome = "Diego";
var idade = 23;

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

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

var empresa = {
  nomeEmpresa: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nomeEmpresa = empresa.nomeEmpresa,
    cidade = empresa.endereco.cidade,
    estado = empresa.endereco.estado;
console.log(nomeEmpresa); // Rocketseat

console.log(cidade); // Rio do Sul

console.log(estado); // SC
// 4.2

var mostraInfo = function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
};

console.log(mostraInfo({
  nome: 'Diego',
  idade: 23
}));
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

var arrr = [1, 2, 3, 4, 5, 6];
var x = arrr[0],
    y = arrr.slice(1);
console.log(x);
console.log(y);

function somaParams() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(somaParams(1, 2, 3, 4, 5, 6)); // 21

console.log(somaParams(1, 2)); // 3

function concatenaStr() {
  for (var _len2 = arguments.length, paramsStr = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    paramsStr[_key2] = arguments[_key2];
  }

  return paramsStr.reduce(function (concat, next) {
    return "".concat(concat, ", ").concat(next);
  });
}

console.log(concatenaStr('Monique', 'Rafael', 'Thor', 'Halley')); // 5.2

var usrSprd = {
  nomeeee: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var usrSprd1 = _objectSpread({}, usrSprd, {
  nomeeee: 'Gabriel'
});

console.log(usrSprd1);

var usrSprd2 = _objectSpread({}, usrSprd, {
  endereco: _objectSpread({}, usrSprd.endereco, {
    cidade: 'Lontras'
  })
});

console.log(usrSprd2);
/**
 * -------------------------------------------------------------------------------------------------------
 * 6º exercício
 * Converta o seguinte trecho de código utilizando Template Literals:
 */

var usuario2 = 'Diego';
var idade2 = 23;
console.log("O usu\xE1rio ".concat(usuario2, " possui ").concat(idade2, " anos"));
/**
 * -------------------------------------------------------------------------------------------------------
 * 7º exercício
 * Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto
 */

var nome3 = 'Diego';
var idade3 = 23;
var usuario99 = {
  nome3: nome3,
  idade3: idade3,
  cidade: 'Rio do Sul'
};
