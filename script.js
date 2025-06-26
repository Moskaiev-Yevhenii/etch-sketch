const root = document.querySelector(':root');
const gridContainer = document.querySelector('.container');
const gridSizeInput = document.querySelector('#grid-size');
const gridSize = 4;

const popup = document.querySelector('.popup');
const newGridBtn = document.querySelector('.new-grid-btn');
const popupCloseBtn = document.querySelector('.close-btn');
const createGridBtn = document.querySelector('.create-btn');
const paintModePosBtn = document.querySelector('#mode-additive-btn');
const paintModeBtnNegative = document.querySelector('#mode-negative-btn');

const selectedColorUI = document.querySelector('.selected-color-ui');
const colorPalettes = [['#e63946', '#f1faee', '#a8dadc', '#457b9d', '#1d3557'], ['#fb8500', '#ffb703', '#023047', '#219ebc', '#8ecae6'], ['#f72585', '#7209b7', '#3a0ca3', '#4361ee', '#4cc9f0'], ['#5f0f40', '#9a031e', '#fb8b24', '#e36414', '#0f4c5c']];
let selectedPalette;
let selectedColorIndex = 0;
let isMouseDown = false;
let isErasing = false;
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

paintModePosBtn.classList.add('selected-btn');
paintModePosBtn.addEventListener('click', () => {isErasing = false; paintModePosBtn.classList.add('selected-btn'); paintModeBtnNegative.classList.remove('selected-btn')});
paintModeBtnNegative.addEventListener('click', () => {isErasing = true; paintModePosBtn.classList.remove('selected-btn'); paintModeBtnNegative.classList.add('selected-btn')});

document.addEventListener('wheel', (e) => {
    if (e.deltaY > 0 && selectedColorIndex < selectedPalette.length - 1) {
        selectedColorIndex++;
    }
    else if (e.deltaY < 0 && selectedColorIndex > 0){
        selectedColorIndex--;
    }
    setPaintColor(selectedPalette[selectedColorIndex]);
});
document.addEventListener('mousedown', () => isMouseDown = true);
document.addEventListener('mouseup', () => isMouseDown = false);

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

            gridSqr.addEventListener('click', () => {
                    if (isErasing) gridSqr.style.backgroundColor = "#ffffff";
                    else gridSqr.style.backgroundColor = selectedPalette[selectedColorIndex];
                });
            gridSqr.addEventListener('mouseover', () => {
                if (isMouseDown) {
                    if (isErasing) gridSqr.style.backgroundColor = "#ffffff";
                    else gridSqr.style.backgroundColor = selectedPalette[selectedColorIndex];
                }
                else gridSqr.classList.add('hovered');
            });
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
