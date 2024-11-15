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


