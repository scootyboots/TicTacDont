/**
 * var firstPlayer = true

var box1_1 = document.getElementById('box1-1')
var box1_2 = document.getElementById('box1-2')
var box1_3 = document.getElementById('box1-3')

var box2_1 = document.getElementById('box2-1')
var box2_2 = document.getElementById('box2-2')
var box2_3 = document.getElementById('box2-3')

var box3_1 = document.getElementById('box3-1')
var box3_2 = document.getElementById('box3-2')
var box3_3 = document.getElementById('box3-3')


var allBoxes = [box1_1, box1_2, box1_3, box2_1, box2_2, box2_3, box3_1, box3_2, box3_3]

init();

allBoxes.map(function(box) {

    box.addEventListener('click', (event) => {changeLetter(box)})

});


function togglePlayer() {

    if (firstPlayer === true) {
        firstPlayer = false;
    } else {
        firstPlayer = true;
    }
}


function changeLetter(box) {

    if (firstPlayer === true) {

        box.classList.toggle('blue');

        box.innerHTML = 'x'

    } else {
        
        box.classList.toggle('red');

        box.innerHTML = 'o'
    }

    document.querySelector('span.player1').classList.toggle('active');
    document.querySelector('span.player2').classList.toggle('active');

    checkWin();
    togglePlayer();

};

var rowWin1 = [box1_1, box1_2, box1_3]
var rowWin2 = [box2_1, box2_2, box2_3]
var rowWin3 = [box3_1, box3_2, box3_3]

var colWin1 = [box1_1, box2_1, box3_1]
var colWin2 = [box1_2, box2_2, box3_2]
var colWin3 = [box1_3, box2_3, box3_3]

var diagWin1 = [box1_1, box2_2, box3_3]
var diagWin2 = [box1_3, box2_2, box3_1]

var allWinConditions = [rowWin1, rowWin2, rowWin3, colWin1, colWin2, colWin3, diagWin1, diagWin2]

function checkWin() {
    
    var gameWon = false

    for (let i = 0; i < allWinConditions.length; i++) {

        var winCondition = allWinConditions[i]
        var box1 = winCondition[0].innerText;
        var box2 = winCondition[1].innerText;
        var box3 = winCondition[2].innerText;

        if (box1 === box2 && box1 === box3){
            gameWon = true;
        } else {
            continue;
        }

    }

    if (gameWon === true) {
        resetGame();
    }

};


function resetGame() {

    var winner = firstPlayer === true ? '1' : '2';

    alert('Player ' + winner + ' has won! Play again?')

    init();

}



function init() {

    box1_1.innerText = 'a'
    box1_2.innerText = 'b'
    box1_3.innerText = 'c'

    box2_1.innerText = 'd'
    box2_2.innerText = 'e'
    box2_3.innerText = 'f'

    box3_1.innerText = 'g'
    box3_2.innerText = 'h'
    box3_3.innerText = 'k'

    allBoxes.forEach(function(i) {
        i.className = ''
    });

    document.querySelector('.player1').className = 'player1 active'
    document.querySelector('.player2').className = 'player2'

};
 */

// var allCells = Array.from(document.querySelectorAll('div[class*="cell"]'))

var firstPlayer = true

// html element of each cell in the grid put into variables
var cell_1_1 = document.querySelector('div[id="cell-1-1"]')
var cell_1_2 = document.querySelector('div[id="cell-1-2"]')
var cell_1_3 = document.querySelector('div[id="cell-1-3"]')

var cell_2_1 = document.querySelector('div[id="cell-2-1"]')
var cell_2_2 = document.querySelector('div[id="cell-2-2"]')
var cell_2_3 = document.querySelector('div[id="cell-2-3"]')

var cell_3_1 = document.querySelector('div[id="cell-3-1"]')
var cell_3_2 = document.querySelector('div[id="cell-3-2"]')
var cell_3_3 = document.querySelector('div[id="cell-3-3"]')

var allCells = [cell_1_1, cell_1_2, cell_1_3, cell_2_1, cell_2_2, cell_2_3, cell_3_1, cell_3_2, cell_3_3]

// adds a click event listener to each cell in the grid
allCells.map((cell) => {

    cell.addEventListener('click', (event) => {changeImg(cell)})

});


function togglePlayer() {

    if (firstPlayer === true) {
        firstPlayer = false;
    } else {
        firstPlayer = true;
    }

}

// all img elements, probably don't need this though 

// var imgCell_1_1 = cell_1_1.querySelector('img')
// var imgCell_1_2 = cell_1_2.querySelector('img')
// var imgCell_1_3 = cell_1_3.querySelector('img')

// var imgCell_2_1 = cell_2_1.querySelector('img')
// var imgCell_2_2 = cell_2_2.querySelector('img')
// var imgCell_2_3 = cell_2_3.querySelector('img')

// var imgCell_3_1 = cell_3_1.querySelector('img')
// var imgCell_3_2 = cell_3_2.querySelector('img')
// var imgCell_3_3 = cell_3_3.querySelector('img')

// var allCellImgs = [imgCell_1_1, imgCell_1_2, imgCell_1_3, imgCell_2_1, imgCell_2_2, imgCell_2_3, imgCell_3_1, imgCell_3_2, imgCell_3_3]

// displays either an x or o based on if first player or not
function changeImg(cell) {

    if (firstPlayer === true) {

        cell.querySelector('img').setAttribute('src', 'x.svg')
        cell.querySelector('img').setAttribute('class', 'display')

    } else {
        
        cell.querySelector('img').setAttribute('src', 'o.svg')
        cell.querySelector('img').setAttribute('class', 'display')

    }

    // displays who the active player is 
    // document.querySelector('span.player1').classList.toggle('active');
    // document.querySelector('span.player2').classList.toggle('active');

    checkWin();
    togglePlayer();

};

function resetGame() {

    var winner = firstPlayer === true ? '1' : '2';

    alert(`Player ${winner} has won! Play again?`)

    init();

}

// puts all possible win condition combinations into variables
var rowWin1 = [cell_1_1, cell_1_2, cell_1_3]
var rowWin2 = [cell_2_1, cell_2_2, cell_2_3]
var rowWin3 = [cell_3_1, cell_3_2, cell_3_3]

var colWin1 = [cell_1_1, cell_2_1, cell_3_1]
var colWin2 = [cell_1_2, cell_2_2, cell_3_2]
var colWin3 = [cell_1_3, cell_2_3, cell_3_3]

var diagWin1 = [cell_1_1, cell_2_2, cell_3_3]
var diagWin2 = [cell_1_3, cell_2_2, cell_3_1]

var allWinConditions = [rowWin1, rowWin2, rowWin3, colWin1, colWin2, colWin3, diagWin1, diagWin2]

// loops over the array of all possible win combinations and stops when all three cells in that win condition have the same src
function checkWin() {
    
    var gameWon = false

    for (let i = 0; i < allWinConditions.length; i++) {

        var winCondition = allWinConditions[i]

        // src attribute of whatever image is in that cell  
        var cell1 = winCondition[0].firstChild.getAttribute("src");
        var cell2 = winCondition[1].firstChild.getAttribute("src");
        var cell3 = winCondition[2].firstChild.getAttribute("src");

        if (cell1 === cell2 && cell1 === cell3){
            gameWon = true;
        } else {
            continue;
        }

    }

    if (gameWon === true) {
        setTimeout(resetGame, 100);
    }

};


function init() {

    firstPlayer = true;
    allCells.forEach((cur) => cur.querySelector('img').setAttribute('class', 'hidden'));

    // populates the src of each img with a progressive number so that the game won't be automatically won on the first click after init 
    for (let i = 0; i < allCells.length; i++) {
        const element = allCells[i];
        element.querySelector('img').setAttribute('src', `${i.toString()}.svg`)
    }

}

