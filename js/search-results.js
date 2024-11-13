let resultados = document.querySelector('.seccionSR')

let queryString = location.search;
let queryStringObjeto = new URLSearchParams(queryString);
let identificador = queryStringObjeto.get('q');

fetch(`https://dummyjson.com/recipes/search?q=${identificador}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data) {
        console.log(data);
        let lista= document.querySelector('.seccionSR')
        let buscar=""
        for (i=0; i<data.recipes.length;i++){
          buscar+=`<article>
        <img src=  ${data.recipes[i].image} alt=''>
        <p>${data.recipes[i].name} </p>
        <p>Nivel de dificultad: ${data.recipes[i].difficulty}</p>
        <a href="./receta.html">Ir al detalle</a>
        </article>`

        }
        lista.innerHTML= buscar
       
       
       })
       .catch(function(error) {
        console.log("Error: " + error);
       })