const gridContainer = document.querySelector('.container');
const popup = document.querySelector('.popup');

const newGridBtn = document.querySelector('.new-grid-btn');
const popupCloseBtn = document.querySelector('.close-btn');
const createGridBtn = document.querySelector('.create-btn');

const gridSizeInput = document.querySelector('#grid-size');
const gridSize = 4;

popup.classList.add('hidden');
newGridBtn.addEventListener('click', () => {
    popup.classList.remove('hidden');
});
createGridBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
});
popupCloseBtn.addEventListener('click', () => {popup.classList.add('hidden');});

generateGrid();

function generateGrid (size = gridSize) {
    console.log(size);
    for(i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            const gridSqr = document.createElement('div');
            gridSqr.classList.add('grid-sqr');
            gridSqr.addEventListener('mouseover', () => {gridSqr.classList.add('hovered')});
            gridSqr.addEventListener('mouseout', () => {gridSqr.classList.remove('hovered')});
            gridContainer.appendChild(gridSqr);
        }
    }
}
