import React, {useEffect, useRef} from 'react';
//No idea how to actually finish this...
const GameBoard = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // set the canvas dimensions
        canvas.width = window.innerWidth / 2;
        canvas.height = window.innerHeight / 2;

        // set the initial coordinates of the curve and circle
        let x = 20;
        let y = canvas.height / 2;

        // set the curve properties
        const amplitude = 50;
        const wavelength = 5;
        const frequency = 0.04;
        const speed = 1;

        // draw the circle at the initial coordinates
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, 2 * Math.PI);
        ctx.fillStyle = "#000";
        ctx.fill();

        // draw the curve
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#000";
        ctx.beginPath();
        ctx.moveTo(x, y);
        for (let i = x + 1; i < canvas.width; i++) {
            x += speed;
            y = canvas.height / 2 + amplitude * Math.sin((x / wavelength) * 2 * Math.PI * frequency);
            ctx.lineTo(i, y);
        }
        ctx.stroke();
    }, []);

    return (
    <>
        <canvas ref={canvasRef} />
    </>
  );
};

export default GameBoard;