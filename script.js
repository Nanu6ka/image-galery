const inputValue = document.getElementById("input")
const buttonElement = document.getElenentById("submit")
const apiImage = document.getElementById("id="api-img"")

async function searchImage(value){
  try{

  const output = await fetch(`https://api.unsplash.com/photos/?query=${inputValue}&client_id=81coXwfASfuLYr1xMIfWvSHp93omc6R9QCKm70xxkA8`);
  const data = await output.json();
  const imges = data.results;

  apiImage.innerHTML = "";
  
  const itemsNumber = 18;
  for(let i =0; 1<Math.min(imges.lenght, itemNumber); i++){
    const image = images[i];
    const item = document.createElement('img');
    img.src=${image.urls.small};
    img.alt="api-img";
    img.classList.add('api-img');
    apiImage.appendChild(img);
  }

  }
}
inputValue.addEventListener

buttonElement.addEventListener("click", () =>{
  const value = inputValue.value.trim();
  if (value){
    searchImage(value)
  }
}
)
window.addEventListener('load', () =>{
  searchImage('sport');
})

