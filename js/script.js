const COLORS_HEX = '0123456789ABCDEF';
const squareBlock = document.querySelector('.square');
const bodyElement = document.querySelector('body');
const squareWidth = squareBlock.clientWidth;
const squareHeight = squareBlock.clientHeight;
const bodyWidth = bodyElement.clientWidth;
const bodyHeight = bodyElement.clientHeight;

liveMoving();

function colorGenerator () {
    let randomColor = '#';
    for (let i = 0; i < 6; i++) {
        randomColor += COLORS_HEX[Math.floor(Math.random() * COLORS_HEX.length)];
    }
    return randomColor;
}

function changeColor () {
    squareBlock.style.backgroundColor = colorGenerator();
}

function generatorPositionX () {
    let positionX = Math.floor(Math.random() * (bodyWidth - squareWidth)) + 'px';
    return positionX;
}

function generatorPositionY () {
    let positionY = Math.floor(Math.random() * (bodyHeight - squareHeight)) + 'px';
    return positionY;
}

function moveSquare () {
    squareBlock.style.left = generatorPositionX();
    squareBlock.style.top = generatorPositionY();
}

function liveMoving () {
    setInterval(moveSquare, 1000);
    setInterval(changeColor, 500);
}

