// Get the mouse position when the mouse moves in your react application.
import React from 'react';
import useMousePosition from './useMousePosition'

function GetMousePosition() {
    const {x, y} = useMousePosition();
  return (
    <div>Get Mouse Position
        <div>
        <span>x: {x}</span>
        <span>x: {y}</span>
        </div>
    </div>
  )
}

export default GetMousePosition