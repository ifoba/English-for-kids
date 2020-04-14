const getCurrentCard = localStorage.getItem('currentCard');
const cards = document.querySelectorAll('.card');

if (localStorage.getItem('currentCard') !== "Home") {
    localStorage.setItem('currentCard', 'Home');
}
for (let el of cards) {
    el.addEventListener('click', function(event){
        localStorage.setItem('currentCard', el.querySelector('.card-title').innerText )
    })
}


