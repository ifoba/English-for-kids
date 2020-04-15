import './header.js';
const getCurrentCard = localStorage.getItem('currentCard');
const themes = {
  "Action A" : [
    {
      name : "cry",
      image : "./assets/img/cry.jpg",
      translate: "плакать",
      audio: "./assets/audio/cry.mp3",
    },
    {
      name : "dance",
      image : "./assets/img/dance.jpg",
      translate: "танцевать",
      audio: "./assets/audio/dance.mp3",
    },
    {
      name : "dive",
      image : "./assets/img/dive.jpg",
      translate: "погружаться",
      audio: "./assets/audio/dive.mp3",
    },
    {
      name : "draw",
      image : "./assets/img/draw.jpg",
      translate: "рисовать",
      audio: "./assets/audio/draw.mp3",
    },
    {
      name : "fish",
      image : "./assets/img/fish.jpg",
      translate: "рыбачить",
      audio: "./assets/audio/fish.mp3",
    },
    {
      name : "fly",
      image : "./assets/img/fly.jpg",
      translate: "летать",
      audio: "./assets/audio/fly.mp3",
    },
    {
      name : "hug",
      image : "./assets/img/hug.jpg",
      translate: "обнимать",
      audio: "./assets/audio/hug.mp3",

    },
    {
      name : "jump",
      image : "./assets/img/jump.jpg",
      translate: "прыгать",
      audio: "./assets/audio/jump.mp3",
    },
  ],
  "Action B" : [
    {
      name : "open",
      image : "./assets/img/open.jpg",
      translate: "открывать",
      audio: "./assets/audio/jump.mp3",
    },
    {
      name : "play",
      image : "./assets/img/play.jpg",
      translate: "играть",
      audio: "./assets/audio/jump.mp3",
    },
    {
      name : "point",
      image : "./assets/img/point.jpg",
      translate: "указывать",
      audio: "./assets/audio/jump.mp3",
    },
    {
      name : "ride",
      image : "./assets/img/ride.jpg",
      translate: "ездить",
      audio: "./assets/audio/jump.mp3",
    },
    {
      name : "run",
      image : "./assets/img/run.jpg",
      translate: "бежать",
      audio: "./assets/audio/jump.mp3",
    },
    {
      name : "sing",
      image : "./assets/img/sing.jpg",
      translate: "петь",
      audio: "./assets/audio/jump.mp3",
    },
    {
      name : "skip",
      image : "./assets/img/skip.jpg",
      translate: "пропускать, прыгать",
      audio: "./assets/audio/jump.mp3",
    },
    {
      name : "swim",
      image : "./assets/img/swim.jpg",
      translate: "плавать",
      audio: "./assets/audio/jump.mp3",
    },
  ],
  "Clothes" : [
    {
      name : "skirt",
      image : "./assets/img/skirt.jpg",
      translate: "юбка",
      audio: "./assets/audio/jump.mp3",
    },
    {
      name : "pants",
      image : "./assets/img/pants.jpg",
      translate: "брюки",
      audio: "./assets/audio/jump.mp3",
    },
    {
      name : "blouse",
      image : "./assets/img/blouse.jpg",
      translate: "блузка",
      audio: "./assets/audio/jump.mp3",
    },
    {
      name : "dress",
      image : "./assets/img/dress.jpg",
      translate: "платье",
      audio: "./assets/audio/jump.mp3",
    },
    {
      name : "boot",
      image : "./assets/img/boot.jpg",
      translate: "ботинки",
      audio: "./assets/audio/jump.mp3",
    },
    {
      name : "shirt",
      image : "./assets/img/shirt.jpg",
      translate: "рубашка",
      audio: "./assets/audio/jump.mp3",
    },
    {
      name : "coat",
      image : "./assets/img/coat.jpg",
      translate: "пальто",
      audio: "./assets/audio/jump.mp3",
    },
    {
      name : "shoe",
      image : "./assets/img/shoe.jpg",
      translate: "туфли",
      audio: "./assets/audio/jump.mp3",
    },
  ]

}
const cardsContainer = document.getElementById('card-container'); 
let reloadStatus = true;

function cardsCreate (el) {
  if (localStorage.getItem('checkboxStatus') === 'bg-info') { 
    return `
      <div class ="col mb-3">
          <div  class ="card text-center text-white bg-info ">
            <div class="card-flip-front">
              <img id = "${el.name}" class ="card-img-top" src="${el.image}" alt ="">
              <div class="card-body">
                <h5>${el.name}</h5>
                <img class="flip-icon" src="./assets/flip.png">
              </div>
            </div>  
            <div class="card-flip-back">
              <img class ="card-img-top" src="${el.image}" alt ="">
              <div class="card-body">
                <h5>${el.translate}</h5>
              </div>
            </div>
          </div>
      </div>
      `
  }else {
    return `
      <div class ="col mb-3">
        <div class ="card text-center text-white">
          <div class="card-flip-front">
            <img id = "${el.name}" class ="card-img-top" src="${el.image}" alt ="">
            <div class="card-body hidden">
              <h5>${el.name}</h5>
              <img class="flip-icon" src="./assets/flip.png">
            </div>
          </div>  
          <div class="card-flip-back">
              <img class ="card-img-top" src="${el.image}" alt ="">
              <div class="card-body hidden">
                <h5>${el.translate}</h5>
              </div>
          </div> 
        </div>
      </div>
      `
  }
    
}
cardsContainer.innerHTML = `
    ${themes[getCurrentCard].map(cardsCreate).join('')}
`;
let btnContainer = document.createElement('div');
btnContainer.id = 'start-btn';
btnContainer.innerHTML = '<p class = "start-btn-text">Start Game</p>';
document.body.querySelector('.container').append(btnContainer);
const cards = document.querySelectorAll('.card');
let iconClickStatus = false;
let flipIcon = document.querySelectorAll('.flip-icon');
flipIcon.forEach((icon, index)=> {
  icon.addEventListener('click', (event)=>{
    event.target.style.display = 'none';
    cardsFlip[index].classList.add('flip')
    iconClickStatus = true;
  })
})

document.querySelectorAll('.col.mb-3').forEach((el, i)=>{
  el.addEventListener('mouseleave', event =>{
    if (iconClickStatus === true){
    event.target.classList.remove('flip');
    iconClickStatus = false;
    flipIcon[i].style.display = '';
    }
  })
})

function rnd(a, b) {
  return Math.random()- 0.5;
}
let randomCardArr = themes[getCurrentCard].map(el=>el.name).sort(rnd);
let startGame = false;
let countGame = 0;
let audio = new Audio();
let err = new Audio('./assets/audio/error1.mp3');
let success = new Audio('./assets/audio/success.mp3');
document.querySelector('.start-btn-text').addEventListener('click', event => {
  if(startGame === false) {
    event.target.innerHTML = '<img class = "repeat-btn" src ="./assets/repeat.png">'
    console.log(randomCardArr[countGame]);
    audio = new Audio(`./assets/audio/${randomCardArr[countGame]}.mp3`);
    audio.play();
    startGame = true;
  }else {
    console.log(randomCardArr[countGame-1]);
    audio.play();
  }
});


for (let el of document.querySelectorAll('.card')) {
  el.addEventListener('click', event => {
    if(event.target.id === randomCardArr[countGame] && countGame !== 7 && startGame) {
      countGame += 1;
      audio = new Audio(`./assets/audio/${randomCardArr[countGame]}.mp3`);
      audio.play()
      event.target.parentNode.parentNode.classList.add('inactive');
      console.log('yes');
      document.querySelector('.star-container').innerHTML += `<img src= "./assets/star_yes.png">`;
    }else if (event.target.id !== randomCardArr[countGame] && countGame !== 8 && startGame) {
      console.log('nope')
      err.play();
      document.querySelector('.star-container').innerHTML += `<img src= "./assets/no.png">`;
    }else if(event.target.id === randomCardArr[countGame] && countGame === 7 && startGame) {
      success.play();
      document.querySelector('.star-container').innerHTML += `<img src= "./assets/star_yes.png">`;
      event.target.parentNode.parentNode.classList.add('inactive');
    }else if(!startGame && event.target.classList.contains('card-img-top')){
      audio = new Audio(`./assets/audio/${event.target.id}.mp3`);
      audio.play();
      
    }
  })
}