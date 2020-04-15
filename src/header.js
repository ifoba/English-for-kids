const header = document.querySelector('.header');
const navList = document.querySelector('.nav-list');

const cardsFlip = document.querySelectorAll('.col.mb-3');
const switchBtn = document.querySelector('.switch-btn');

const startBtn = document.getElementById('start-btn');


localStorage.getItem('checkboxStatus') === '' ? switchBtn.checked = true : switchBtn.checked = false;
if (switchBtn.checked) {
    cards.forEach(el => el.classList.remove('bg-info'));
    if (getCurrentCard !== 'Home')
    startBtn.style.display = 'flex';
    startGame = false;
}

function controlMenu(event) {
    if (event.target.id === 'burger' || event.target.classList.contains('icon-bar')) {
        navList.classList.add('active');
    }else {
        navList.classList.remove('active');
    }
};

function controlGameStatus (event) {
    if (event.target.checked) {
        if(getCurrentCard === "Home"){
            cards.forEach(el=>el.classList.remove('bg-info'));
            localStorage.setItem('checkboxStatus', '');
        }else {
            startGame = false;
            countGame = 0;
            randomCardArr = themes[getCurrentCard].map(el=>el.name).sort(rnd);
            cards.forEach(el=> {
                document.querySelector('.start-btn-text').innerHTML = 'Start Game';                
                startBtn.style.display = 'flex';
                el.classList.remove('bg-info');
                el.querySelectorAll('.card-body').forEach(item => item.classList.add('hidden'));
            });
            localStorage.setItem('checkboxStatus', '');            
        }
    }else if (!event.target.checked) {
        if(getCurrentCard === "Home") {
            cards.forEach(el=>el.classList.add('bg-info'));
            localStorage.setItem('checkboxStatus', 'bg-info');
        }else {
            startBtn.style.display = 'none';
            cards.forEach(el=> {
                el.classList.add('bg-info');
                el.querySelectorAll('.card-body').forEach(item => item.classList.remove('hidden'));
                cards.forEach(el=>el.classList.remove('inactive'));
                startGame = false;
            });
            localStorage.setItem('checkboxStatus', 'bg-info');
        }
    }
}

for (let href of navList.querySelectorAll('a')) {
    href.addEventListener('click', function(event){
        localStorage.setItem('currentCard', href.innerText);
        reloadStatus = false;
    });
};

header.addEventListener('click', controlMenu);
switchBtn.addEventListener('click', controlGameStatus);
window.addEventListener('beforeunload', (event) => {
    if (reloadStatus === true) {
        localStorage.setItem('checkboxStatus', 'bg-info');
    }
});