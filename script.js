const gridContainer = document.querySelector('.container');
const gridSize = 4;
for(i = 0; i < gridSize; i++) {
    for (j = 0; j < gridSize; j++) {
        const gridSqr = document.createElement('div');
        gridSqr.classList.add('grid-sqr');
        gridContainer.appendChild(gridSqr);
    }
}