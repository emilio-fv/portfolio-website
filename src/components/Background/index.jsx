import React from 'react';
import useCanvas from '../../hooks/useCanvas';

const Background = ({ draw }) => {
  const canvasRef = useCanvas(draw);

  return <canvas ref={canvasRef} />

};

export default Background;