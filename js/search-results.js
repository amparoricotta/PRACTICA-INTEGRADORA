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
                        <p>Nivel de dificultad: ${data.recipes[i].difficulty}.</p>
                        <a href="./receta.html">Ir al detalle</a>
                    </article>`;
                }
            } else {
                buscar = "<p>No se encontraron resultados para la búsqueda.</p>";
            }
            lista.innerHTML= buscar
       
       
            })
            .catch(function(error) {
            console.log("Error: " + error);
            })
        }else {
            resultados.innerHTML = "<p>Por favor, ingresa un término de búsqueda válido de al menos 3 caracteres.</p>";
        }
        /* hay que hacer otro fetch hola*/
