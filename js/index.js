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
    <p>${data.recipes[i].name} </p>
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
    // let recetas =""
    // let lista = document.querySelector('.seccionIndex')
    //     for(let i=10; i<20;i++){
    //         recetas+=`<article>
    //     <img src=  ${data.recipes[i].image} alt=''>
    //     <p>${data.recipes[i].name} </p>
    //     <p>Nivel de dificultad: ${data.recipes[i].difficulty}</p>
    //     <a href="./receta.html">Ir al detalle</a>
    // </article>`
    //     }
    //     lista.innerHTML = recetas
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
        <p>${data.recipes[i].name} </p>
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



