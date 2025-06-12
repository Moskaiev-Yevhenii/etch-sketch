const root = document.querySelector(':root');
const gridContainer = document.querySelector('.container');
const gridSizeInput = document.querySelector('#grid-size');
const gridSize = 4;

const popup = document.querySelector('.popup');
const newGridBtn = document.querySelector('.new-grid-btn');
const popupCloseBtn = document.querySelector('.close-btn');
const createGridBtn = document.querySelector('.create-btn');

const selectedColorUI = document.querySelector('.selected-color-ui');
const colorPalettes = [['#e63946', '#f1faee', '#a8dadc', '#457b9d', '#1d3557'], ['#fb8500', '#ffb703', '#023047', '#219ebc', '#8ecae6'], ['#f72585', '#7209b7', '#3a0ca3', '#4361ee', '#4cc9f0'], ['#5f0f40', '#9a031e', '#fb8b24', '#e36414', '#0f4c5c']];
let selectedPalette;
let selectedColorIndex = 0;
selectRandomPalette ();

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
document.addEventListener('wheel', (e) => {
    if (e.deltaY > 0 && selectedColorIndex < selectedPalette.length - 1) {
        selectedColorIndex++;
    }
    else if (e.deltaY < 0 && selectedColorIndex > 0){
        selectedColorIndex--;
    }
    setPaintColor(selectedPalette[selectedColorIndex]);
});

generateGrid();

function generateGrid (size = gridSize) {
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

function selectRandomPalette () {
    selectedPalette = colorPalettes[Math.ceil(Math.random() * colorPalettes.length - 1)];
    setPaintColor(selectedPalette[selectedColorIndex]);
}

function setPaintColor (color) {
    root.style.setProperty('--paint-color', color);
}
