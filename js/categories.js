fetch('https://dummyjson.com/recipes/tags')
.then(function(response){
    return response.json()
})
.then(function(data) {
    console.log(data);
    let lista= document.querySelector('.seccionSR')
    let categorias=""
    for (let i = 0; i < data.length; i++) {
            categorias += `<li><a href="../PRACTICA-INTEGRADORA/ category.html?id=${data[i]}">${data[i]}</a></li>`;
        }
        
    lista.innerHTML= categorias
    })
    .catch(function(error){
        console.log("Error: " + error)
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


