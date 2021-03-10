function generateGrid() {
    const gridContainer = document.getElementById('grid');
    let gridCell;

    for (let i = 0; i < 81; i++) {
        gridCell = document.createElement('div') ;
        gridCell.setAttribute('data-selected', 'false');
        gridCell.addEventListener('mouseenter', toggleColor);
        gridContainer.appendChild(gridCell);
    }
}

function toggleColor(event) {
    let gridCellElement = event.currentTarget,
        isCellSelected = gridCellElement.getAttribute('data-selected'),
        randomColor
    ;

    if (isCellSelected == 'false') {
        randomColor = Math.floor(Math.random()*16777215).toString(16);
        gridCellElement.style.backgroundColor = '#' + randomColor;
    } else {
        gridCellElement.style.backgroundColor = 'transparent';
    }

    gridCellElement.setAttribute('data-selected', isCellSelected == 'false' ? 'true' : 'false');
}

export { generateGrid };