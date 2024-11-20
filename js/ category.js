// // tdo esto es nuevo 

// let lista = document.querySelector('.secionCategory')
// let resultados = ""
// let queryString=location.search;
// let queryStringObjeto=new URLSearchParams(queryString)
// let identificador= queryStringObjeto.get("id");
// let h1 = document.querySelector("h1")

// fetch(`https://dummyjson.com/recipes/tag/${identificador}`)
// .then(function(response){
//     return response.json()
// })
// .then(function(data) {
//     console.log(data);
//     h1.innerHTML = `${identificador}`
//     fetch('https://dummyjson.com/recipes')
//     for (let i = 0; i < data.recipes.length; i++) {
//     resultados += `<article>
        
       
//     </article>`;
    
// }
// lista.innerHTML= resultados
// })

// .catch(function(error) {
// console.log("Error: " + error);
// })

// tdo esto es nuevo 

let lista = document.querySelector('.sectionCategory')
let resultados = ""
let queryString=location.search;
let queryStringObjeto=new URLSearchParams(queryString)
let identificador= queryStringObjeto.get("id");
let h1 = document.querySelector("h1")

fetch(`https://dummyjson.com/recipes`)
.then(function(response){
    return response.json()
})
.then(function(data) {
    console.log(data);
    h1.innerHTML = `${identificador}`
    for (let i = 0; i < data.recipes.length; i++) {
        if (identificador in data.recipes[i].tags){
            resultados += `<article>
                <img src="${data.recipes[i].image}" alt="">
                <p>${data.recipes[i].name}</p>
                <p>Nivel de dificultad: ${data.recipes[i].difficulty}.</p>
                <a href="./receta.html?id=${data.recipes[i].id}">Ir al detalle</a>
    </article>`;}}

    lista.innerHTML= resultados
})

.catch(function(error) {
console.log("Error: " + error);
})

