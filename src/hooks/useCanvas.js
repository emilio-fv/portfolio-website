import { useEffect, useRef } from "react"
import resizeCanvas from "../utils/resizeCanvas";

const useCanvas = (draw) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        context.imageSmoothingEnabled = false;
        context.lineWidth = .5;
        context.strokeStyle = '#11788a';
        const xDivisions = 30;
        const yDivisions = 15;
        const startingX = 0;
        const startingY = 0;
        resizeCanvas(canvas)
        draw(context, xDivisions, yDivisions, startingX, startingY)
    }, [draw])

    return canvasRef;
}

export default useCanvas;