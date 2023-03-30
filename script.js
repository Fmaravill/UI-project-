const next = document.querySelector('.next')
const previous = document.querySelector('.previous')
let character = document.querySelector('.character')
let title = document.querySelector(".title")
let image = document.querySelector(".image")
let baseURL = "https://hp-api.onrender.com/api/characters";

const characters = [] // Array of all our characters; to be fill by api call (getCharacterData)
let charIndex = 0 // Current index of character we will view from characters array

async function getCharacterData() {
  let res = await fetch(baseURL)
  let data = await res.json()

  characters.push(...data.splice(0, 25))

  buttonCheck()
  updateUI()
}

getCharacterData()

function updateUI(){
  title.innerHTML = characters[charIndex].name; 
  image.src = characters[charIndex].image;
}

next.addEventListener('click', () => {
  charIndex++

  if (charIndex <= characters.length - 1) {
    updateUI()
  } 

  buttonCheck()
})

previous.addEventListener('click', () => {
  charIndex--

  if (charIndex >= 0) {
    updateUI()
  } 

  buttonCheck()
})

function buttonCheck(){
  charIndex > 0 ? previous.disabled = false : previous.disabled = true
  charIndex < characters.length - 1 ? next.disabled = false : next.disabled = true
}
//put click event on button that fetches next image/name in api



// character.forEach(() => {
//     next.addEventListener('click',(e) => {
//         fetch(baseURL + e.target.dataset.name)
//         .then((res) => {
//             return res.json();
//           })
//           .then((data) => {
//             console.log(data)
//         character.innerHTML = data[0].name; 
//             })
//         })
// })

