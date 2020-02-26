$(document).ready(function() {

    console.log('------------------------------');
    console.log('Exercício 1:');
    var endereco = {
        rua: 'Rua dos Pinheiros',
        numero: 1293,
        bairro: 'Centro',
        cidade: 'São Paulo',
        uf: 'SP'
    }
    console.log('O usuário mora em ' + endereco.cidade + '/' + endereco.uf + ', no bairro ' + endereco.bairro + ', na rua ' + endereco.rua + ' com nº ' + endereco.numero);
    console.log('------------------------------');
    
    console.log('------------------------------');
    console.log('Exercício 2:');
    function pares(x, y) {
        var arrPares = [];
        for (i=x; i<=y; i++) 
            if (i%2===0) arrPares.push(i);
        console.log(arrPares);
    }
    pares(32, 321);
    console.log('------------------------------');
    
    console.log('------------------------------');
    console.log('Exercício 3:');
    function temHabilidade(skills) {
        var validaSkills = (skills.indexOf('Javascritp')) ? true : false;
        console.log(validaSkills);
    }
    var skills = ['Javascript', 'ReactJS', 'React Native'];
    temHabilidade(skills);
    console.log('------------------------------');

    console.log('------------------------------');
    console.log('Exercício 4:');
    function experiencia(anos) {
        var level;
        if (anos <= 1)
            level = 'Iniciante';
        else if (anos <= 3)
            level = 'Intermediário';
        else if (anos <= 6)
            level = 'Avançado';
        else if (anos > 6)
            level = 'Master';
        else
            level = 'Pirulito'
        console.log(level);
    }
    var anosEstudo = 7;
    experiencia(anosEstudo);
    console.log('------------------------------');

    console.log('------------------------------');
    console.log('Exercício 5:');
    function myFunction(users) {
        for (let usr of users) {
            console.log('O ' + usr.nome + ' possui as habilidades: ' + usr.habilidades.join(', '));
        }
    }

    var usuarios = [
        {
            nome: "Diego",
            habilidades: ["Javascript", "ReactJS", "Redux"]
        },
        {
            nome: "Gabriel",
            habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
        }
    ];
    myFunction(usuarios);
    console.log('------------------------------');

});