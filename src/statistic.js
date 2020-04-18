let content = document.querySelector('tbody')
let stat = JSON.parse(localStorage.getItem('statistic'));
function getPercent(a,b) {
    if((a !== 0 && b !== 0) || (a !== 0) )
    return Math.floor(a / (a + b)*100);
    else {
        return 0;
    }
}
for (let key in stat) {
    stat[key].percent = getPercent(stat[key].clickWrong, stat[key].clickCorrect )

}
let statKeys = Object.keys(stat);
function drawPage (arr) {
    content.innerHTML = ''
    arr.forEach( el => {
        content.innerHTML += `<tr>
        <th scope="row">${stat[el].category}</th>
        <td class = "word">${stat[el].word}</td>
        <td class = "translate">${stat[el].translate}</td>
        <td class = "clickTrain">${stat[el].clickTrain}</td>
        <td class = "clickCorrect">${stat[el].clickCorrect}</td>
        <td class = "clickWrong">${stat[el].clickWrong}</td>
        <td class = "percent">${stat[el].percent}%</td>
      </tr>`
    })
}

drawPage(statKeys);

let sortTrue = true;

function byProperty(prop) {
    if(sortTrue){
        sortTrue = false
    return (a, b) => stat[a][prop] < stat[b][prop] ? 1 : - 1;
    }else{
        sortTrue = true;
        return (a, b) => stat[a][prop] > stat[b][prop] ? 1 : - 1;
    }
}

document.querySelector('thead').querySelectorAll('th').forEach( el => {
    el.addEventListener('click', () => {
        drawPage(statKeys.sort(byProperty(el.id)))
    })
})

document.getElementById('reset').addEventListener('click', ()=> {
    stat = statistic;
    localStorage.setItem('statistic', JSON.stringify(stat))
    location.reload();
    
})

document.addEventListener('beforeunload', () => {
    localStorage.setItem('statistic', JSON.stringify(stat))
})