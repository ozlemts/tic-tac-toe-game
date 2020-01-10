
//VARIABLES
let symbols = ['X','O'];
let move = 0;
let avaible_numbers = ['0','1','2','3','4','5','6','7','8'];
let board = ['','','','','','','','','']

const CONTAINER_ELEMENT = document.querySelector(".container");
const BOX_ELEMENTS = document.querySelectorAll(".box")

// 
document.querySelector(".result").style.visibility = 'hidden';


CONTAINER_ELEMENT.addEventListener('click', e => {
    if (e.target.className == 'box') { 
        e.target.innerText = 'X';
        let data_key = e.target.getAttribute('data-key')
        board[data_key] = 'X';
        let chosen = avaible_numbers.indexOf(data_key);
        avaible_numbers.splice(chosen, 1);
        e.target.classList.add('disabledEvents');
        console.log(data_key, typeof(data_key))
        isWin('X');
       
 
        let computer_choice_index = Math.floor(Math.random() * (avaible_numbers.length));
        if (avaible_numbers.length > 0) {
            data_key = avaible_numbers[computer_choice_index];
            BOX_ELEMENTS[data_key].innerText = 'O';
            board[data_key] = 'O';
            BOX_ELEMENTS[data_key].classList.add('disabledEvents');
            avaible_numbers.splice(computer_choice_index, 1);
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
        (board[2] == symbol && board[4] == symbol && board[6] == symbol) ) 
        {
            document.querySelector('.heading-2').innerText = symbol + ' WON!';
            BOX_ELEMENTS.forEach(e => e.classList.add('disabledEvents'));
            document.querySelector(".result").style.visibility = 'visible';
        }
    else {}
}





