import React, { useState, useEffect, useRef } from "react";

const DragCircle = () => {
    const canvasRef = useRef(null);
    const [circle, setCircle] = useState({
        x: 50,
        y: 50,
        radius: 20,
    });
    const [dragging, setDragging] = useState(false);

    useEffect(() => {
        console.log(window.innerWidth, window.innerHeight);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // set the canvas dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // set the initial coordinates of the circle
        const x = canvas.width / 2;
        const y = canvas.height / 2;

        // draw the circle at the initial coordinates
        ctx.beginPath();
        ctx.arc(x, y, circle.radius, 0, 2 * Math.PI);
        ctx.fillStyle = "#000";
        ctx.fill();
        setCircle({ ...circle, x: x, y: y });
    }, []);

    const onMouseDown = (event) => {
        const { clientX, clientY } = event;
        const canvas = canvasRef.current;
        const canvasRect = canvas.getBoundingClientRect();
        const x = clientX - canvasRect.left;
        const y = clientY - canvasRect.top;

        if (Math.sqrt((x - circle.x) ** 2 + (y - circle.y) ** 2) <= circle.radius) {
            setDragging(true);
        }
    };

    const onMouseMove = (event) => {
        const { clientX, clientY } = event;
        if (dragging) {
            const canvas = canvasRef.current;
            const canvasRect = canvas.getBoundingClientRect();
            const x = clientX - canvasRect.left;
            const y = clientY - canvasRect.top;
            setCircle({ ...circle, x: x, y: y });
        }
    };

    const onMouseUp = () => {
        setDragging(false);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // redraw the circle at the new coordinates
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        ctx.fillStyle = "#00f";
        ctx.fill();
    }, [circle]);

    return (
        <canvas
            ref={canvasRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
        />
    );
};

export default DragCircle;