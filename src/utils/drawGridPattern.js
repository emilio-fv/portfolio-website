const drawGridPattern = (context, xDivisions, yDivisions, startingX, startingY) => {
    let x = startingX;
    let y = startingY;
    let tempX;
    let tempY;

    for (let i = 0; i < yDivisions; i++) {
        for (let j = 0; j < xDivisions; j++) {
            if (i % 2 === 0) {
                // draw line down
                context.moveTo(x, y);
                tempX = x;
                tempY = y + (window.innerHeight / yDivisions);
                context.lineTo(tempX, tempY);
                context.stroke();

                // draw bottom line
                context.moveTo(tempX, tempY);
                tempX = x + (window.innerWidth / xDivisions);
                j % 2 === 0 ? tempY += (window.innerHeight / yDivisions) / 2 : tempY -= (window.innerHeight / yDivisions) / 2;
                context.lineTo(tempX, tempY);
                context.stroke();

                // draw top line
                tempX = x;
                tempY = y;
                context.moveTo(tempX, tempY);
                tempX = x + (window.innerWidth / xDivisions);
                j % 2 === 0 ? tempY += (window.innerHeight / yDivisions) / 2 : tempY -= (window.innerHeight / yDivisions) / 2;
                context.lineTo(tempX, tempY);
                context.stroke();

                // update starting points for next iteration
                x = tempX;
                y = tempY;
            } else {
                // draw line down
                context.moveTo(x, y);
                tempX = x;
                tempY = y + (window.innerHeight / yDivisions);
                context.lineTo(tempX, tempY);
                context.stroke();

                // draw bottom line
                context.moveTo(tempX, tempY);
                tempX = x + (window.innerWidth / xDivisions);
                j % 2 === 0 ? tempY -= (window.innerHeight / yDivisions) / 2 : tempY += (window.innerHeight / yDivisions) / 2;
                context.lineTo(tempX, tempY);
                context.stroke();

                // draw top line
                tempX = x;
                tempY = y;
                context.moveTo(tempX, tempY);
                tempX = x + (window.innerWidth / xDivisions);
                j % 2 === 0 ? tempY -= (window.innerHeight / yDivisions) / 2 : tempY += (window.innerHeight / yDivisions) / 2;
                context.lineTo(tempX, tempY);
                context.stroke();

                // update starting points for next iteration
                x = tempX;
                y = tempY;
            }
        }
        // update x and y
        x = startingX;
        i % 2 === 0 ? y += ((window.innerHeight / yDivisions * 2)) : y += (window.innerHeight / yDivisions)
    }
}

export default drawGridPattern;