
    // buscador 
let formulario = document.querySelector('.formBuscador')
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



let formularioRegsiter = document.querySelector('.formRegister')
let email= document.querySelector(".emailRegister")
let password= document.querySelector(".contraseñaRegister")
let errormsj=document.querySelector(".errormsj")
let errorcontra=document.querySelector(".errorcontra")
formularioRegsiter.addEventListener("submit", function(evento){
    evento.preventDefault()
    if (email.value== ""){
        console.log('buscador vacio')
            errormsj.innerText = "Por favor complete el campo email"
            errormsj.style.color = "red"
    
    }else if (password.value== ""){
        errorcontra.innerText = "Por favor complete el campo contraseña"
            errorcontra.style.color = "red"
    }else{
        formularioRegsiter.submit()
    }
    })
