import { extraerCampeonAleatorio, buscarCampeonNombre } from "./funciones.js";

const campeones = [
    {
        id: 0,
        nombre: "Miss Fortune",
        foto: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7865e388-e2a4-4883-ac4b-b279fd7a596f/dfn1ukl-97ea6275-4f7a-440a-aa80-3ea0a69a538b.png/v1/fill/w_1280,h_1707,q_80,strp/miss_fortune__lunar_beast__by_sticklove_dfn1ukl-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcwNyIsInBhdGgiOiJcL2ZcLzc4NjVlMzg4LWUyYTQtNDg4My1hYzRiLWIyNzlmZDdhNTk2ZlwvZGZuMXVrbC05N2VhNjI3NS00ZjdhLTQ0MGEtYWE4MC0zZWEwYTY5YTUzOGIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.aAjByorJfGuhf_0f3vy55SwYJk8KiiSpbE0uOCikcnY",
        categoria: ["tirador", "mago"],
        ataque_especial: "lluvia de balas"
    },
    {
        id: 1,
        nombre: "Viejo",
        foto: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbDACIVyuloVT0PdSPx4qiutGxyIj-jiiK1_sPzjxbINKoVouqJILb2nw3Ijo5RN-q_gvv7BveVwGmA6WcIXSAp8MA8GjnO9cJAhtide9_FAgkz6KGQXGvbZ7PdWLGtntauPZVtnkQ1tG-/w919/lunar-beast-viego-splash-art-lol-uhdpaper.com-8K-7.2977-wp.thumbnail.jpg",
        categoria: ["luchador", "asesino"],
        ataque_especial: "rompecorazones"
    },
    {
        id: 2,
        nombre: "Alistar",
        foto: "https://wallpaper.forfun.com/fetch/d5/d5a380f1d1403ff73e4bfe1bc03cee2c.jpeg",
        categoria: ["tanque", "support"],
        ataque_especial: "voluntad inquebrantable"
    },
    {
        id: 3,
        nombre: "Darius",
        foto: "https://i.pinimg.com/474x/39/09/0a/39090a7213031e1927683fdb8de0b850.jpg",
        categoria: ["tanque", "luchador"],
        ataque_especial: "Guillotina noxiana"
    }
];

export default campeones;

let inputSearch = document.getElementById("boxAnswers")
let searchButton = document.getElementById('search')
let againButton = document.getElementById('again')
let selected = extraerCampeonAleatorio()
let imagenRandom = document.getElementById('imageRandom')
let cajaImagen = document.getElementById('BoxImg')

console.log(selected)

let errorToast = () => {Toastify({
    text: "No adivinaste el nombre del campeon, pulsa otra vez",
    duration: 2000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(0deg, rgba(52,93,93,0.8333333333333334) 0%, rgba(95,185,106,0.8472222222222222) 100%)",
    },
    onClick: function(){} // Callback after click
  }).showToast()
};
searchButton.addEventListener('click', ()=>{

    buscarCampeonNombre(inputSearch.value, selected.nombre) === true?
    (imagenRandom.style.display = 'none',
    cajaImagen.innerHTML = `<img src="${selected.foto}" alt="" id="characterPhoto">`): (cajaImagen.style.border = '1px solid red', errorToast())
})

againButton.addEventListener('click', ()=>{
    location.reload()
    inputSearch.value = ''
})