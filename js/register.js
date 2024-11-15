let email =document.querySelector(".emailRegister")
let boton=document.querySelector(".botonRegister")
let contraseña =document.querySelector(".contraseñaRegister")
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
