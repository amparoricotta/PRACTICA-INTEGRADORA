let queryString=location.search;
let queryStringObjeto=new URLSearchParams(queryString)

let identificador= queryStringObjeto.get("id");


fetch(`https://dummyjson.com/recipes/${identificador}`)
    .then(function(response){
        return response.json();

    })

    .then(function(data){
        console.log(data)
        let nombre=document.querySelector(".nombre")
        nombre.innerText=data.name
        nombre.style.color="green"
        let instrucciones=document.querySelector(".instrucciones")
        instrucciones.innerText=data.instructions

        let tiempo=document.querySelector(".tiempo")
        tiempo.innerText=data.cookTimeMinutes
        let imagen= document.querySelector(".imgReceta")
        imagen.src=data.image
    

        let lista= document.querySelector(".categorias")
        let cate=""
        for (i=0; i<data.tags.length;i++){
            // cambiamos lo de la linea de abajo!!
          cate+=`<li><a href="../PRACTICA-INTEGRADORA/ category.html?id=${data.tags[i]}">${data.tags[i]}</a></li>`
        }
        lista.innerHTML= cate
    } )

    .catch(function(error){
        console.log(error);
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
