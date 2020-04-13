const header = document.querySelector('.header');
const navList = document.querySelector('.nav-list');
const cards = document.querySelectorAll('.card');
const cardsFlip = document.querySelectorAll('.col.mb-3');

localStorage.getItem('checkboxStatus') === '' ? document.querySelector('.switch-btn').checked = true : 
document.querySelector('.switch-btn').checked = false;
if (document.querySelector('.switch-btn').checked) {
    cards.forEach(el=>el.classList.remove('bg-info'));
    if (localStorage.getItem('currentCard')!== 'Home')
    document.getElementById('start-btn').style.display = 'flex';
    startGame = false;
}


header.addEventListener('click', function(event){
    if (event.target.id === 'burger' || event.target.classList.contains('icon-bar') ){
         document.querySelector('.nav-list').classList.add('active');
    }
    else if (event.target.classList.contains('nav-btn')) {
        document.querySelector('.nav-list').classList.remove('active');
    }
    else {
        document.querySelector('.nav-list').classList.remove('active');
    }
})

document.querySelector('.switch-btn').addEventListener('click', function(event) {
    if (event.target.checked) {
        if(localStorage.getItem('currentCard') === "Home"){
            cards.forEach(el=>el.classList.remove('bg-info'));
            localStorage.setItem('checkboxStatus', '')
        }else {
            startGame = false;
            countGame = 0;
            randomCardArr = themes[localStorage.getItem('currentCard')].map(el=>el.name).sort(rnd);
            cards.forEach(el=> {
                document.querySelector('.start-btn-text').innerHTML = 'Start Game';                
                document.getElementById('start-btn').style.display = 'flex';
                el.classList.remove('bg-info');
                el.querySelectorAll('.card-body').forEach(item => item.classList.add('hidden'));
            });
            localStorage.setItem('checkboxStatus', '')
            
        }
    }
    else if (!event.target.checked) {
        if(localStorage.getItem('currentCard') === "Home"){
            cards.forEach(el=>el.classList.add('bg-info'));
            localStorage.setItem('checkboxStatus', 'bg-info');
        }else {
            document.getElementById('start-btn').style.display = 'none';
            cards.forEach(el=> {
                el.classList.add('bg-info')
                el.querySelectorAll('.card-body').forEach(item => item.classList.remove('hidden'));
                cards.forEach(el=>el.classList.remove('inactive'));
                startGame = false;
            });
            localStorage.setItem('checkboxStatus', 'bg-info');
        }
    }
});

for (let href of navList.querySelectorAll('a')) {
    href.addEventListener('click', function(event){
        localStorage.setItem('currentCard', href.innerText )
    })
};

window.addEventListener('beforeunload', (event)=>{
    console.log('tatat');
});