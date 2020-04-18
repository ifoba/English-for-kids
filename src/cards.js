const getCurrentCard = localStorage.getItem('currentCard');
const cardsContainer = document.getElementById('card-container');
const err = new Audio('./assets/audio/error1.mp3');
const success = new Audio('./assets/audio/success.mp3');
const correct = new Audio('./assets/audio/correct.mp3');
const failure = new Audio('./assets/audio/failure.mp3');
let startGame = false;
let countGame = 0;
let reloadStatus = true;
let wrongAnswer = 0;
let correctAnswer = 0;
let currentStatistic;
let currentPage = 'Cards'
if(localStorage.getItem('statistic') === null) {
  currentStatistic = statistic;
}else {
  currentStatistic = JSON.parse(localStorage.getItem('statistic'));
}

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
      </div>`
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
      </div>`
  }    
}
cardsContainer.innerHTML = `${themes[getCurrentCard].map(cardsCreate).join('')}`;
let btnContainer = document.createElement('div');
btnContainer.id = 'start-btn';
btnContainer.innerHTML = '<p class = "start-btn-text">Start Game</p>';
document.body.querySelector('.container').append(btnContainer);
let iconClickStatus = false;
let flipIcon = document.querySelectorAll('.flip-icon');
flipIcon.forEach((icon, index)=> {
  icon.addEventListener('click', (event)=>{
    event.target.style.display = 'none';
    document.querySelectorAll('.col.mb-3')[index].classList.add('flip')
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
let audio = new Audio();

document.querySelector('.start-btn-text').addEventListener('click', event => {
  if(startGame === false) {
    event.target.innerHTML = '<img class = "repeat-btn" src ="./assets/repeat.png">'
    audio = new Audio(`./assets/audio/${randomCardArr[countGame]}.mp3`);
    audio.play();
    startGame = true;
  }else {
    audio.play();
  }
});

function getResult (countWrongAnswer) {
  document.querySelectorAll('.col.mb-3').forEach(el => el.classList.add('hidden'));
        document.querySelector('.star-container').innerHTML = '';
        document.getElementById('start-btn').style.display = 'none';
        document.querySelector('.col.mb-3').addEventListener('transitionend', () => {
          document.querySelectorAll('.col.mb-3').forEach(el => el.style.display = 'none');
          (countWrongAnswer === 0) ? (document.querySelector('.end-game').innerHTML = `
          <div class="col col-auto">
            <img src="./assets/succes.png" alt="">
          </div>`):
          (document.querySelector('.end-game').innerHTML = `
          <div class="col col-auto">
            <h5 class="text-center text-white">${wrongAnswer} wrong answer</h5>
            <img src="./assets/failure.png" alt="">
          </div>`)
        })
        setTimeout(() => {document.location.href = "./statistic.html";}
        , 5000)        
}

for (let el of document.querySelectorAll('.card')) {
  el.addEventListener('click', event => {
    if(event.target.id === randomCardArr[countGame] && countGame !== 7 && startGame) {
      currentStatistic[randomCardArr[countGame]].clickCorrect += 1
      countGame += 1;
      correct.play();
      audio = new Audio(`./assets/audio/${randomCardArr[countGame]}.mp3`);
      correct.onended = () => audio.play();
      event.target.parentNode.parentNode.classList.add('inactive');
      correctAnswer += 1;
      document.querySelector('.star-container').innerHTML += `<img src= "./assets/star_yes.png">`;
    }else if (event.target.id !== randomCardArr[countGame] && countGame !== 8 && startGame) {
      wrongAnswer += 1;
      currentStatistic[randomCardArr[countGame]].clickWrong += 1
      err.play();
      document.querySelector('.star-container').innerHTML += `<img src= "./assets/no.png">`;
    }else if(event.target.id === randomCardArr[countGame] && countGame === 7 && startGame) {
      document.querySelector('.star-container').innerHTML += `<img src= "./assets/star_yes.png">`;
      event.target.parentNode.parentNode.classList.add('inactive');
      currentStatistic[randomCardArr[countGame]].clickCorrect += 1
      if (wrongAnswer === 0){
        success.play(); 
        getResult(wrongAnswer); 
      }else {
        failure.play();
        getResult(wrongAnswer);
      }
    }else if(!document.querySelector('.switch-btn').checked && event.target.classList.contains('card-img-top')){
      audio = new Audio(`./assets/audio/${event.target.id}.mp3`);
      audio.play();
      currentStatistic[event.target.id].clickTrain += 1
    }
  })
}

document.addEventListener('beforeunload', (event)=>{
  localStorage.setItem('statistic', JSON.stringify(currentStatistic))
  alert('asdasd')
})
