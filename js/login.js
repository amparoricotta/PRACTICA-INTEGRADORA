
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

let formularioLogin= document.querySelector('.formLogin')
let email= document.querySelector(".emailLogin")
let password= document.querySelector(".contraseñaLogin")
formularioLogin.addEventListener("submit", function(evento){
    evento.preventDefault()
    if (email.value== ""){
        let mensaje= "Por favor complete el campo email"
        alert(mensaje)
        
    }else if (password.value== ""){
        let mensajec="Por favor complete el campo contraseña"
        alert(mensajec)
    }else{
        formularioLogin.submit()
    }
    })

