const right = document.getElementById("right");
const left = document.getElementById("left");

const dog_result =document.getElementById("dog_result");

document.addEventListener('DOMContentLoaded', getRandomDog, false);

let savedImages = [];
let imageIndex= 0 ;

right.addEventListener("click", getRandomDog);
left.addEventListener("click", getPreviousDog);

function getRandomDog(){
    
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res=>res.json())
    .then(data=>{
        imageIndex++;
        
        savedImages.push(data);
        dog_result.innerHTML = `<img src=${data.message} alt="dog"/>`})
    .catch(handleError);
    
    
}

function getPreviousDog(){
    imageIndex--;
    
    dog_result.innerHTML = '<img src='+savedImages[imageIndex-1].message+' alt="dog"/>';

}


function handleError(error) {
    console.log('this is an error', error);
}

