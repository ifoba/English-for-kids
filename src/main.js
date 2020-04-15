const getCurrentCard = localStorage.getItem('currentCard');
const cards = document.querySelectorAll('.card');
let reloadStatus = true;
if (localStorage.getItem('currentCard') !== "Home") {
    localStorage.setItem('currentCard', 'Home');
}
for (let el of cards) {
    el.addEventListener('click', function(event){
        localStorage.setItem('currentCard', el.querySelector('.card-title').innerText )
        reloadStatus = false
    })
}


