import campeones from "./script.js";


export const buscarCampeonNombre = (inputSearch, character) =>{
   let checker = inputSearch.toLowerCase().trim() === character.toLowerCase().trim()

   return checker
}


export const extraerCampeonAleatorio = () =>{
 let character = campeones[Math.floor(campeones.length * Math.random())]

document.getElementById('title').innerHTML = `
<h2>El campeon que debes adivinar es un <span id="cate">${character.categoria[0]}</span> y su ataque especial se llama <span id="attack">${character.ataque_especial}</span></h2>`

return character

}

