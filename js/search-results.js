let resultados = document.querySelector('.seccionSR')
let error = document.querySelector('#mensajeError')
let mensaje = document.querySelector('.ResultadosBusqueda')

let queryString = location.search;
let queryStringObjeto = new URLSearchParams(queryString);
let identificador = queryStringObjeto.get('q');

let lista= document.querySelector('.seccionSR')
let buscar=""
let h1SeccionSR = document.querySelector(".h1SeccionSR")

fetch(`https://dummyjson.com/recipes/search?q=${identificador}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data) {
        console.log(data);
        
        if (data.recipes.length > 0) {
            h1SeccionSR.innerText = `Resultados para ${identificador}`
            for (let i = 0; i < data.recipes.length; i++) {
                buscar += `<article>
                    <img src="${data.recipes[i].image}" alt="">
                    <h3>${data.recipes[i].name}</h3>
                    <p>Nivel de dificultad: ${data.recipes[i].difficulty}.</p>
                    <a class="botonSR" href="./receta.html?id=${data.recipes[i].id}">Ir al detalle</a>
                </article>`;
            
                mensaje.innerText = `Resultados de búsqueda para ${identificador}`

            }
        } else {
            buscar = "<p>No se encontraron resultados para la búsqueda.</p>";
        }
        lista.innerHTML= buscar
        })

            
        .catch(function(error) {
        console.log("Error: " + error);
        })

    // buscador 
let formulario = document.querySelector('form')
let completar = document.querySelector('.inputBuscador')
let mensajeError = document.querySelector('#mensajeError')

formulario.addEventListener('submit', function(evento){
     evento.preventDefault();
     if(completar.value == ''){
         console.log('buscador vacio')
         mensajeError.innerText = 'Campo de busqueda vacio'
         mensajeError.style.color = "red"
     }else if(completar.value.length < 3){
         console.log('caracteres insuficientes')
         mensajeError.innerText = 'Ingrese al menos 3 caracteres'
         mensajeError.style.color = "red"
     }else{
         formulario.submit()
     }

 })
