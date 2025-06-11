const root = document.querySelector(':root');
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
    const size = gridSizeInput.value;
    if (size > 0 && size <= 100) {
        generateGrid(size);
    }
});
popupCloseBtn.addEventListener('click', () => {popup.classList.add('hidden');});

generateGrid();

function generateGrid (size = gridSize) {
    console.log(gridContainer.children.length);
    if (gridContainer.children.length > 0) {
        Array.from(gridContainer.children).forEach((childRow) => {
            gridContainer.removeChild(childRow);
        });
    }

    root.style.setProperty('--grid-size', size);
    for(i = 0; i < size; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        for (j = 0; j < size; j++) {
            const gridSqr = document.createElement('div');
            gridSqr.classList.add('grid-sqr');
            gridSqr.addEventListener('mouseover', () => {gridSqr.classList.add('hovered')});
            gridSqr.addEventListener('mouseout', () => {gridSqr.classList.remove('hovered')});
            gridRow.appendChild(gridSqr);
        }
        gridContainer.appendChild(gridRow);
    }
}
