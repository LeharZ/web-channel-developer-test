function getList() {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://pokeapi.co/api/v2/pokemon');
    request.send();
    request.onload = async function () {
        let data = JSON.parse(this.response);
        data.results.map(pokemon => {
            fillList(pokemon);
        });
    }
};

function fillList(pokemon) {
    let pokeList = document.getElementById('pokeList');
    let row = pokeList.insertRow();
    let cellName = row.insertCell(0);
    let cellAction = row.insertCell(1);
    cellName.innerHTML = pokemon.name;
    cellAction.innerHTML = '<button onclick="getDetail(\'' + pokemon.url + '\')">Ver Detalles</button>';
}

function getDetail(url) {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();
    request.onload = async function () {
        let data = JSON.parse(this.response);
        document.getElementById('pokePic').src = data.sprites.back_default;
        document.getElementById('pokePic').src = data.sprites.back_default;
        document.getElementById('pokeName').innerHTML = 'Nombre: ' + data.name;
        document.getElementById('pokeWeight').innerHTML = 'Peso: ' + data.weight;
        document.getElementById('pokeHeight').innerHTML = 'Altura: ' + data.height;
        document.getElementById('pokeDetail').classList.remove('hidden');
    }
}