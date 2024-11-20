let lista = document.querySelector('.sectionCategory')
let resultados = ""
let queryString=location.search;
let queryStringObjeto=new URLSearchParams(queryString)
let identificador= queryStringObjeto.get("id");
let h1 = document.querySelector("h1")

fetch(`https://dummyjson.com/recipes/tag/${identificador}`)
.then(function(response){
    return response.json()
})
.then(function(data) {
    console.log(data);
    h1.innerHTML = `${identificador}`
    for (let i = 0; i < data.recipes.length; i++) {
        resultados += `<article>
            <img src="${data.recipes[i].image}" alt="">
            <h3>${data.recipes[i].name}</h3>
            <p>Nivel de dificultad: ${data.recipes[i].difficulty}.</p>
            <a href="./receta.html?id=${data.recipes[i].id}">Ir al detalle</a>
    </article>`;}

    lista.innerHTML= resultados
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
     }else if(completar.value.length < 3){
         console.log('caracteres insuficientes')
         mensajeError.innerText = 'Ingrese al menos 3 caracteres'
     }else{
         formulario.submit()
     }

 })

