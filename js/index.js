// cargar mas:
let largoDelArray 
fetch('https://dummyjson.com/recipes?limit=10')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    let lista = document.querySelector('.seccionIndex')
    let recetas = ''
    largoDelArray = data.recipes.length
    for (i=0; i<largoDelArray; i++){
        recetas+=`<article>
    <img src=  ${data.recipes[i].image} alt=''>
    <h3>${data.recipes[i].name} </h3>
    <p>Nivel de dificultad: ${data.recipes[i].difficulty}</p>
    <a href="./receta.html?id=${data.recipes[i].id}">Ir al detalle</a>
</article>`
    }
    lista.innerHTML = recetas
})
.catch(function(error){
    console.log("Error: " + error)
})

let boton = document.querySelector('.botonIndex')
boton.addEventListener('click', function(){
    fetch(`https://dummyjson.com/recipes?limit=10&skip=${largoDelArray}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        let lista = document.querySelector('.seccionIndex')
        let recetas = ''
        todas = data.recipes
        for (i=0; i<10;i++){
            recetas+=`<article>
        <img src=  ${data.recipes[i].image} alt=''>
        <h3>${data.recipes[i].name} </h3>
        <p>Nivel de dificultad: ${data.recipes[i].difficulty}</p>
        <a href="./receta.html?id=${data.recipes[i].id}">Ir al detalle</a>
    </article>`
        }
        lista.innerHTML += recetas
        largoDelArray += 10;
    })
    .catch(function(error){
        console.log("Error: " + error)
    })
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
