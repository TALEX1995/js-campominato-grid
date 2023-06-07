console.log('JS OK')

// Recover Element from DOM

const play = document.getElementById('play');
const levelDiff = document.getElementById('difficulty-level');
const mainGame = document.querySelector('.row');


// Initial data

const rows = 10;
const col = 10;
const totalCells = rows * col;


// Function
const createCell = () => {
    const cell = document.createElement('div');
    cell.classList.add('cell')
    
    return cell
}


// Event listener click

play.addEventListener('click', function (event) {
    // Stoped submit event
    event.preventDefault()

    // Cicle to generate cell into DOM
    for(let i = 1; i <= totalCells; i++) {
        // Create a variable to save cell element
        const cell = createCell();

        // Insert the numbers in the cell
        cell.innerText = i

        // Insert cell into DOM
        mainGame.appendChild(cell);

        // Add class Active at the click on the cell
        cell.addEventListener('click', function () {
            cell.classList.add('active');
            console.log(i)
        })
    }

})
