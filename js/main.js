


/*----- app's state (variables) -----*/

let board;
let turn;
let winner;
let turnCount = 0;

/*----- cached element references -----*/



/*----- event listeners -----*/
document.querySelector('section.board').addEventListener('click', onClick);
const messages = document.querySelector('h2');


/*----- functions -----*/

function getWinner() {
    if( board[0] + board[1] + board[2] === 3 || board[3] + board[4] + board[5] === 3 ||
        board[6] + board[7] + board[8] === 3 || board[0] + board[3] + board[6] === 3 ||
        board[1] + board[4] + board[7] === 3 || board[2] + board[5] + board[8] === 3 ||
        board[0] + board[4] + board[8] === 3 || board[2] + board[4] + board[6] === 3) {
            messages.textContent = `X wins the game!`
        };
    if( board[0] + board[1] + board[2] === -3 || board[3] + board[4] + board[5] === -3 ||
        board[6] + board[7] + board[8] === -3 || board[0] + board[3] + board[6] === -3 ||
        board[1] + board[4] + board[7] === -3 || board[2] + board[5] + board[8] === -3 ||
        board[0] + board[4] + board[8] === -3 || board[2] + board[4] + board[6] === -3) {
            messages.textContent = `O wins the game!`
        };
    if (turnCount === 9) {
            messages.textContent = `It's a tie!`
        };
    
    render();

   
       
};
        
function onClick(event) {
    let sqIndex = parseInt(event.target.id.replace('sq',''));
    markBoard = document.getElementById(`sq${sqIndex}`);
    if (markBoard.textContent === null) return;
    if (board[sqIndex] === null) {
        board[sqIndex] = turn;

    }
    render();
};

init();

function init() {
    board = [
        null, null, null,
        null, null, null,
        null, null, null,
    ];
    turn = 1;
    messages.textContent = `Good Luck! X goes first!`;
    winner = null;
    
};

function render() {
   
    if (markBoard.textContent === 'X' || markBoard.textContent === "O") 
    return;
    if(turn === 1) {
            markBoard.textContent = "X";
            messages.textContent = `It's O's turn!`;
    } else {
            markBoard.textContent = "O";
            messages.textContent = `It's X's turn!`;
    };
    getWinner();
        turn *= -1;
        turnCount++;
    
    };
