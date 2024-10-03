import React from 'react';
import '../styles/ColorPicker.css'; 

// ColorPicker component that displays a list of buttons representing different colors
const ColorPicker = ({ colors, onColorSelect }) => {
  return (
    <div className="color-picker">
      {colors.map((color) => (
        <button
          key={color}
          className="color-button"
          style={{ backgroundColor: color }}
          onClick={() => onColorSelect(color)}
        >
          {color}
        </button>
      ))}
    </div>
  );
};

export default ColorPicker;
