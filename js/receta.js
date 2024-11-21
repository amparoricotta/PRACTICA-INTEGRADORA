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
        let inst =''
        for (i=0; i<data.instructions.length;i++){
            inst+=`<li>${data.instructions[i]}</li>`
    

        }
        instrucciones.innerHTML=inst

        let tiempo=document.querySelector(".tiempo")
        tiempo.innerText=data.cookTimeMinutes
        let imagen= document.querySelector(".imgReceta")
        imagen.src=data.image
    

        let lista= document.querySelector(".categorias")
        let cate=""
        for (i=0; i<data.tags.length;i++){
            
          cate+=`<li><a href="../PRACTICA-INTEGRADORA/ category.html?id=${data.tags[i]}">${data.tags[i]}</a></li>`
        }
        lista.innerHTML= cate

    } )

    .catch(function(error){
        console.log(error);
    })




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
