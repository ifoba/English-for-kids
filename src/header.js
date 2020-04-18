const switchBtn = document.querySelector('.switch-btn');
const navList = document.querySelector('.nav-list');
const header = document.querySelector('.header'); 


localStorage.getItem('checkboxStatus') === '' ? switchBtn.checked = true : switchBtn.checked = false;

if (switchBtn.checked) {
    document.querySelectorAll('.card').forEach(el => el.classList.remove('bg-info'));
    if (localStorage.getItem('currentCard') !== 'Home') {
    document.getElementById('start-btn').style.display = 'flex';
    startGame = false;
    }
    
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
        if(localStorage.getItem('currentCard') === "Home"){
            document.querySelectorAll('.card').forEach(el=>el.classList.remove('bg-info'));
            localStorage.setItem('checkboxStatus', '');
        }else {
            startGame = false;
            countGame = 0;
            randomCardArr = themes[localStorage.getItem('currentCard')].map(el=>el.name).sort(rnd);
            document.querySelectorAll('.card').forEach(el=> {
                document.querySelector('.start-btn-text').innerHTML = 'Start Game';                
                document.getElementById('start-btn').style.display = 'flex';
                el.classList.remove('bg-info');
                el.querySelectorAll('.card-body').forEach(item => item.classList.add('hidden'));
            });
            localStorage.setItem('checkboxStatus', '');            
        }
    }else if (!event.target.checked) {
        if(localStorage.getItem('currentCard') === "Home") {
            document.querySelectorAll('.card').forEach(el=>el.classList.add('bg-info'));
            localStorage.setItem('checkboxStatus', 'bg-info');
        }else {
            document.querySelector('.star-container').innerHTML = '';
            document.getElementById('start-btn').style.display = 'none';
            document.querySelectorAll('.card').forEach(el=> {
                el.classList.add('bg-info');
                el.querySelectorAll('.card-body').forEach(item => item.classList.remove('hidden'));
                document.querySelectorAll('.card').forEach(el=>el.classList.remove('inactive'));
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
        console.log(reloadStatus);
    });
};

header.addEventListener('click', controlMenu);
switchBtn.addEventListener('click', controlGameStatus);
window.addEventListener('beforeunload', (event) => {
    if(currentPage === 'Cards') {
        localStorage.setItem('statistic', JSON.stringify(currentStatistic));
        console.log('12323123123')
    }
    if (reloadStatus === true) {
        localStorage.setItem('checkboxStatus', 'bg-info');
    }
    
});