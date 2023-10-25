import React, { useEffect, useRef } from 'react';

const Background = (props) => {
  const { drawGridPattern, ...rest } = props;
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.lineWidth = .5;
    context.strokeStyle = '#11788a';
    context.width = window.innerWidth;
    context.height = window.innerHeight;
    drawGridPattern(context, 100, 50, 0, 0);
  }, [drawGridPattern])

  return <canvas ref={canvasRef} {...props} />

};

export default Background;