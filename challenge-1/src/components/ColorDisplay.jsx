import React from 'react';
import '../styles/ColorPicker.css'; 

// ColorDisplay component to visually display the selected color
const ColorDisplay = ({ selectedColor }) => {
  return (
    <div className="color-display" style={{ backgroundColor: selectedColor }}>
      <h2 className="color-text">Selected Color: {selectedColor}</h2>
    </div>
  );
};

export default ColorDisplay;
