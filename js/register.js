let formulario= document.querySelector("form")
let email= document.querySelector(".emailRegister")
let password= document.querySelector(".contraseñaRegister")
formulario.addEventListener("submit", function(evento){
    evento.preventDefault()
    if (email.value== ""){
        let mensaje= "Por favor complete el campo email"
        alert(mensaje)
    }else if (password.value== ""){
        let mensajec="Por favor complete el campo contraseña"
        alert(mensajec)
    }else{
        formulario.sumbit()
    }
    })

