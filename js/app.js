let symbols = ['X','O'];
let move = [0,1];
let areas = [0,1,2,3,4,5,6,7,8];

const container = document.querySelector(".container");



container.addEventListener('click', e => {
    if (e.target.className == 'box') { 
    e.target.innerHTML = 'X';
    const chosenindex = e.target.getAttribute('data-key');
    areas.splice(chosenindex, 1);
    e.target.classList.add('disabledEvents');
    //delete areas[e.target.getAttribute('data-key')];
    console.log(areas);
    }
})



//disable the click event for computer move
//container.classList.add('disabledEvents');
console.log(Math.floor(Math.random() * 9));


