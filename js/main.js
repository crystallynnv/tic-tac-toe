/*------Constants------*/
const colors = {
    null: 'white',
    '1': 'red',
    '-1': 'green',
}

const winCombo = [
    ['#sq0','#sq1','#sq2'],
    ['#sq3','#sq4','#sq5'],
    ['#sq6','#sq7','#sq8'],
    ['#sq0','#sq3','#sq6'],
    ['#sq1','#sq4','#sq7'],
    ['#sq2','#sq5','#sq8'],
    ['#sq0','#sq4','#sq8'],
    ['#sq2','#sq4','#sq6']
];

/*------Variables (state)------*/
//things we need to track
let board = [];
let turn;
let clickedSquares;
let winner;


/*------Cached Element References------*/

// game status?
const sqEl = document.querySelectorAll('.sq');
const messages = document.querySelector('h2');

/*------Event Listeners------*/
// This is where you should put the event listener
// for a mouse-click
const squares = Array.from(document.querySelectorAll('.sq'));


function logMapElements(value, key, map) {
    console.log(`[${key}] = ${value}`);
}

new Map([['#sq0', 0], 
        ['#sq1', 1],
        ['#sq2', 2],
        ['#sq3', 3],
        ['#sq4', 4],
        ['#sq5', 5],
        ['#sq6', 6],
        ['#sq7', 7],
        ['#sq8', 8]]).forEach(logMapElements);
/*------Functions------*/
// Some functions you might choose to use:
// Initialization function:
// Where you set your initial state, setting up 
// what the board will look like upon loading

function init() {
    board = [
        " "," "," ",
        " "," "," ",
        " "," "," "
    ];
    turn = {
        '1' : 'X',
        '-1' : 'O'
    },
    winner = null;
    // render();
};

init();

// On-Click function:
// Set up what happens when one of the elements is clicked





// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so


// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is

function render () {
    myMap.forEach(function(sqEl, index) {

    });
}

