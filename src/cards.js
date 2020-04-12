const themes = {
  "Action A" : [
    {
      name : "cry",
      image : "./assets/img/cry.jpg",
      translate: "плакать"
    },
    {
      name : "dance",
      image : "./assets/img/dance.jpg",
      translate: "танцевать"
    },
    {
      name : "dive",
      image : "./assets/img/dive.jpg",
      translate: "погружаться"
    },
    {
      name : "draw",
      image : "./assets/img/draw.jpg",
      translate: "рисовать"
    },
    {
      name : "fish",
      image : "./assets/img/fish.jpg",
      translate: "рыбачить"
    },
    {
      name : "fly",
      image : "./assets/img/fly.jpg",
      translate: "летать"
    },
    {
      name : "hug",
      image : "./assets/img/hug.jpg",
      translate: "обнимать"
    },
    {
      name : "jump",
      image : "./assets/img/jump.jpg",
      translate: "прыгать"
    },
  ],
  "Action B" : [
    {
      name : "open",
      image : "./assets/img/open.jpg"
    },
    {
      name : "play",
      image : "./assets/img/play.jpg"
    },
    {
      name : "point",
      image : "./assets/img/point.jpg"
    },
    {
      name : "ride",
      image : "./assets/img/ride.jpg"
    },
    {
      name : "run",
      image : "./assets/img/run.jpg"
    },
    {
      name : "sing",
      image : "./assets/img/sing.jpg"
    },
    {
      name : "skip",
      image : "./assets/img/skip.jpg"
    },
    {
      name : "swim",
      image : "./assets/img/swim.jpg"
    },
  ],
  "Clothes" : [
    {
      name : "skirt",
      image : "./assets/img/skirt.jpg"
    },
    {
      name : "pants",
      image : "./assets/img/pants.jpg"
    },
    {
      name : "blouse",
      image : "./assets/img/blouse.jpg"
    },
    {
      name : "dress",
      image : "./assets/img/dress.jpg"
    },
    {
      name : "boot",
      image : "./assets/img/boot.jpg"
    },
    {
      name : "shirt",
      image : "./assets/img/shirt.jpg"
    },
    {
      name : "coat",
      image : "./assets/img/coat.jpg"
    },
    {
      name : "shoe",
      image : "./assets/img/shoe.jpg"
    },
  ]

}
const cardsContainer = document.getElementById('card-container'); 

function cardsCreate (el) {
  if (localStorage.getItem('checkboxStatus') === 'bg-info') { 
    return `
      <div class ="col mb-3">
          <div id = "${el.name}" class ="card text-center text-white bg-info ">
            <div class="card-flip-front">
              <img class ="card-img-top" src="${el.image}" alt ="">
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
        <div id = "${el.name}" class ="card text-center text-white">
          <div class="card-flip-front">
            <img class ="card-img-top" src="${el.image}" alt ="">
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
    ${themes[localStorage.getItem('currentCard')].map(cardsCreate).join('')}
`;
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

let btnContainer = document.createElement('div');
btnContainer.id = 'start-btn'
btnContainer.innerHTML = '<p class = "start-btn-text">Start Game</p>'
document.body.querySelector('.container').append(btnContainer)

let startGame = false;
document.querySelector('.start-btn-text').addEventListener('click', event => {
  if(startGame === false) {
    event.target.innerHTML = '<img class = "repeat-btn" src ="./assets/repeat.png">'
  }
})