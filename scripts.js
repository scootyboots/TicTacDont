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

    cell.addEventListener('click', (event) => {applyMove(cell)})

});

function applyMove(cell) {

    if (firstPlayer === true) {

        cell.querySelector('img').setAttribute('src', 'x.svg')
        cell.querySelector('img').setAttribute('class', 'display')

    } else {
        
        cell.querySelector('img').setAttribute('src', 'o.svg')
        cell.querySelector('img').setAttribute('class', 'display')

    }

    checkWin();
    togglePlayer();

};

const circle = document.querySelector('.circle')
const playerX = document.querySelector('p.left')
const playerO = document.querySelector('p.right')

function togglePlayer() {

    if (firstPlayer === true) {
        firstPlayer = false;

        // switches the animation for the circle which indicates the player's turn
        circle.classList.add('slide-right')
        circle.classList.remove('slide-left')

        playerX.classList.add('inactive')
        playerO.classList.remove('inactive')

    } else {
        firstPlayer = true;

        circle.classList.add('slide-left')
        circle.classList.remove('slide-right')

        playerO.classList.add('inactive')
        playerX.classList.remove('inactive')

    }

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

    // looks for a tie game scinario where every cell is filled but no win condition met
    if (gameWon === false) {

        let counter = 0
        // loop through allCells and tick up a counter if src on img is x or o
        for (let i = 0; i < allCells.length; i++) {
    
            let curSrc = allCells[i].firstChild.getAttribute("src")
    
            if (curSrc === "x.svg" || curSrc === "o.svg") {
                counter++
            }
    
        }
    
        if (counter === 9) {
            setTimeout(resetTieGame, 100);
        }    

    }

};

// applies animation to fade out existing moves 
function applyFadeOut() {

    cell_1_1.querySelector('img').classList.add('fade-out', 'hide-opacity', 'box-slide-tl');
    cell_1_2.querySelector('img').classList.add('fade-out', 'hide-opacity', 'box-slide-top');
    cell_1_3.querySelector('img').classList.add('fade-out', 'hide-opacity', 'box-slide-tr');

    cell_2_1.querySelector('img').classList.add('fade-out', 'hide-opacity', 'box-slide-left');
    cell_2_2.querySelector('img').classList.add('fade-out', 'hide-opacity');
    cell_2_3.querySelector('img').classList.add('fade-out', 'hide-opacity', 'box-slide-right');

    cell_3_1.querySelector('img').classList.add('fade-out', 'hide-opacity', 'box-slide-bl');
    cell_3_2.querySelector('img').classList.add('fade-out', 'hide-opacity', 'box-slide-bottom');
    cell_3_3.querySelector('img').classList.add('fade-out', 'hide-opacity', 'box-slide-br');

};

function resetGame() {

    // logic is backwards because firstPlayer var has already been switched over when reset game func runs 
    var winner = firstPlayer === true ? 'O' : 'X';

    alert(`Player ${winner} has won! Play again?`)

    applyFadeOut();

    setTimeout(init, 450);

}

function resetTieGame() {

    alert(`Looks like it's a tie! Play again?`)

    applyFadeOut();

    setTimeout(init, 450);

}

function init() {

    firstPlayer = true;
    allCells.forEach((cur) => cur.querySelector('img').setAttribute('class', 'hidden'));

    // populates the src of each img with a progressive number so that the game won't be automatically won on the first click after init 
    for (let i = 0; i < allCells.length; i++) {
        const element = allCells[i];
        element.querySelector('img').setAttribute('src', `${i.toString()}.svg`)
    }

    // resets animation classes on turn indicator circle and player
    circle.classList.remove('slide-right', 'slide-left')
    circle.classList.add('slide-left')

    playerO.classList.add('inactive')
    playerX.classList.remove('inactive')

}

