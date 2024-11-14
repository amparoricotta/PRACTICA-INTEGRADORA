let resultados = document.querySelector('.seccionSR')

let queryString = location.search;
let queryStringObjeto = new URLSearchParams(queryString);
let identificador = queryStringObjeto.get('q');

if (identificador && identificador.length >= 3) {
    fetch(`https://dummyjson.com/recipes/search?q=${identificador}`)
        .then(function(response){
            return response.json()
        })
        .then(function(data) {
            console.log(data);
            let lista= document.querySelector('.seccionSR')
            let buscar=""
            if (data.recipes.length > 0) {
                for (let i = 0; i < data.recipes.length; i++) {
                    buscar += `<article>
                        <img src="${data.recipes[i].image}" alt="">
                        <p>${data.recipes[i].name}</p>
                        <p>Nivel de dificultad: ${data.recipes[i].difficulty}</p>
                  