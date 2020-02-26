/**
 * 1º exercício
 * Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
 * segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
 * idade o resultado deve cair no .then, caso contrário, no .catch
 * 
 * 2º exercício
 */

$(document).ready(function() {
    checaMaioridade();
    getRepoInfo();
});

/**
 * Função para verificar a maioridade
 */
function checaMaioridade() {
    $('#loadingImg').hide();
    let btnElement = document.querySelector('.inputIdade .btn');
    btnElement.onclick = () => {
        let inputElement = document.querySelector('#idade');
        let divRetMaioridade = document.querySelector('.retornaMaioridade');
        divRetMaioridade.innerHTML = '';
        let idade = inputElement.value;
        $('#loadingImg').show();
        if (idade === '') {
            divRetMaioridade.setAttribute('style', 'color: red;');
            divRetMaioridade.innerHTML = 'Preencha o campo idade.';
            $('#loadingImg').hide();
        } else {
            retornaMaioridade(idade)
                .then((response) => {
                    $('#loadingImg').hide();
                    divRetMaioridade.setAttribute('style', 'color: green;');
                    divRetMaioridade.innerHTML = response;
                })
                .catch((error) => {
                    $('#loadingImg').hide();
                    divRetMaioridade.setAttribute('style', 'color: orange;');
                    divRetMaioridade.innerHTML = error;
                });
        }
    }
}

/**
 * Promise para retornar a maioridade
 * @param {int} idade 
 */
const retornaMaioridade = (idade) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (idade >= 18) {
                resolve('Usuário maior de idade.');
            } else {
                reject('Usuário menor de idade.');
            }
        }, 2000);
    });
}

/**
 * Coleta as informações do repositório Github do usuário informado
 */
function getRepoInfo() {
    $('#loadingImg1').hide();
    let inputElement = document.querySelector('#user');
    let buttonElement = document.querySelector('.getUsrGithub .btn');
    let divRepoInfo = document.querySelector('.repoInfo');
    let tbRepoInfo = document.querySelector('.repoInfoList tbody');
    buttonElement.onclick = () => {
        desmontaTable();
        let user = inputElement.value;
        $('#loadingImg1').show();
        if (user === '') {
            divRepoInfo.setAttribute('style', 'color: red;');
            divRepoInfo.innerHTML = 'Informe o usuário do Github.';
            $('#loadingImg1').hide();
        } else {
            getInfoUsr(user)
                .then((response) => {
                    $('#loadingImg1').hide();
                    montaTable(response, tbRepoInfo);
                })
                .catch((error) => {
                    $('#loadingImg1').hide();
                    divRepoInfo.setAttribute('style', 'color: red;');
                    divRepoInfo.innerHTML = error;
                });
                
        }
    }
}

const getInfoUsr = (user) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            dataType: 'JSON',
            url: 'https://api.github.com/users/' + user + '/repos',
            type: 'GET',
            async: 'false',
            success: (content) => {
                resolve(content);
            },
            error: (status, message) => {
                reject(message);
            }
        });
    });
}

function montaTable(response, tbRepoInfo) {
    for (i=0; i<response.length; i++) {
        let trElem = document.createElement('tr');
        let tdRepo = document.createElement('td');
        let repo = document.createTextNode(response[i].name);
        tdRepo.appendChild(repo);
        let tdProp = document.createElement('td');
        let prop = document.createTextNode(response[i].owner.login);
        tdProp.appendChild(prop);
        let tdDesc = document.createElement('td');
        let desc = document.createTextNode(response[i].description);
        tdDesc.appendChild(desc);
        let tdLink = document.createElement('td');
        let link = document.createTextNode(response[i].svn_url);
        let aLink = document.createElement('a');
        aLink.setAttribute('href', response[i].svn_url);
        aLink.setAttribute('target', '_blank');
        aLink.appendChild(link);
        tdLink.appendChild(aLink);
        trElem.appendChild(tdRepo);
        trElem.appendChild(tdProp);
        trElem.appendChild(tdDesc);
        trElem.appendChild(tdLink);
        tbRepoInfo.appendChild(trElem);
    }
}

function desmontaTable() {
    let trElements = document.querySelectorAll('.repoInfoList tbody tr');
    if (trElements.length > 0) {
        for (i=0; i<trElements.length; i++) {
            trElements[i].remove();
        }
    }
}

   