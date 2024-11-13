
let recetasMostradas = 0; 
let recetasPorBoton = 10;

fetch('https://dummyjson.com/recipes')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    let lista = document.querySelector('.seccionIndex')
    let recetas = ''
    for (i=0; i<recetasMostradas+recetasPorBoton;i++){
        recetas+=`<article>
    <img src=  ${data.recipes[i].image} alt=''>
    <p>${data.recipes[i].name} </p>
    <p>Nivel de dificultad: ${data.recipes[i].difficulty}</p>
    <a href="./receta.html">Ir al detalle</a>
</article>`
    }
    recetasMostradas+=recetasPorBoton
    lista.innerHTML = recetas
})
.catch(function(error){
    console.log("Error: " + error)
}
)
document.querySelector('.botonIndex').addEventListener('click', loadMoreRecipes);

