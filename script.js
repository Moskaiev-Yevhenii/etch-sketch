const gridContainer = document.querySelector('.container');
const gridSize = 4;
for(i = 0; i < gridSize; i++) {
    for (j = 0; j < gridSize; j++) {
        const gridSqr = document.createElement('div');
        gridSqr.classList.add('grid-sqr');
        gridSqr.addEventListener('mouseover', () => {gridSqr.classList.add('hovered')});
        gridSqr.addEventListener('mouseout', () => {gridSqr.classList.remove('hovered')});
        gridContainer.appendChild(gridSqr);
    }
}