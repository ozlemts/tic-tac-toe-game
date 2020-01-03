let symbols = ['X','O'];
let move = 0;
let areas = ['0','1','2','3','4','5','6','7','8'];
let board = ['','','','','','','','','']

const containerElement = document.querySelector(".container");
const boxElements = document.querySelectorAll(".box")


containerElement.addEventListener('click', e => {
    if (e.target.className == 'box') { 
        e.target.innerText = 'X';
        let datakey = e.target.getAttribute('data-key')
        board[datakey] = 'X';
        let chosen = areas.indexOf(datakey);
        areas.splice(chosen, 1);
        e.target.classList.add('disabledEvents');
        console.log(datakey, typeof(datakey))
        isWin('X');
       
 
        let computerChoiceIndex = Math.floor(Math.random() * (areas.length));
        if (areas.length > 0) {
        datakey = areas[computerChoiceIndex];
        boxElements[datakey].innerText = 'O';
        board[datakey] = 'O';
        boxElements[datakey].classList.add('disabledEvents');
        areas.splice(computerChoiceIndex, 1);
        isWin('O');
        }

    }
console.log(board);


})


function isWin(symbol) {
    if ((board[0] == symbol && board[1] == symbol && board[2] == symbol) || 
        (board[3] == symbol && board[4] == symbol && board[5] == symbol) ||
        (board[6] == symbol && board[7] == symbol && board[8] == symbol) ||
        (board[0] == symbol && board[3] == symbol && board[6] == symbol) ||
        (board[1] == symbol && board[4] == symbol && board[7] == symbol) ||
        (board[2] == symbol && board[5] == symbol && board[8] == symbol) ||
        (board[0] == symbol && board[4] == symbol && board[8] == symbol) ||
        (board[2] == symbol && board[4] == symbol && board[6] == symbol) ) {
            document.querySelector('.heading-2').innerText = symbol + 'WON!';
            containerElement.classList.add('disabledEvents');
        }
    else {}
}





