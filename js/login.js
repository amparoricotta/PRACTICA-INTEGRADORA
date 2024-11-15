let email =document.querySelector(".emailLogin")
let boton=document.querySelector(".botonLogin")
let contraseña =document.querySelector(".contraseñaLogin")
boton.addEventListener("click", function(){
    if (email.value=== ""){
        let mensaje= "Por favor complete el campo email"
        alert(mensaje)
    }
    else if (contraseña.value=== ""){
        let mensajec="Por favor complete el campo contraseña"
        alert(mensajec)
    }
})


