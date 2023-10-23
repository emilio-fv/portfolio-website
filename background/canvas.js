let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.lineWidth = .25;
context.imageSmoothingEnabled = false;
context.strokeStyle = '#11788a';

function drawHorizontalLine(startingX, startingY, xDivisions, yDivisions) {
    let x = startingX;
    let y = startingY;

    for (let i = 0; i < xDivisions; i++) {
        // Draw line down
        context.moveTo(x, y);
        context.lineTo(x, (y + (window.innerHeight / yDivisions)));
        context.stroke();
    
        // Reset
        context.moveTo(x, y);
    
        // Draw line right
        if (i % 2 === 0) {
            y += 20;
        } else {
            y -= 20;
        }
        x += (window.innerWidth / xDivisions);
        context.lineTo(x, y);
        context.stroke();
    }
}


let xDivisions = 25;
let yDivisions = 12.5;
let x = -25;
let y = 0;

for (let i = 0; i < yDivisions; i++) {
    drawHorizontalLine(x, y, xDivisions, yDivisions);
    y += (window.innerHeight / yDivisions);
}