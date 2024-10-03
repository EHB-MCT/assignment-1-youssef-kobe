import React from 'react';
import ColorPicker from '../components/ColorPicker';
import ColorDisplay from '../components/ColorDisplay';
import useColor from '../hooks/useColor'; 

// HomePage component serves as the main page with both the color picker and display
const HomePage = () => {
  
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

  // Using the custom useColor hook to manage selectedColor state
  const [selectedColor, setSelectedColor] = useColor();

  return (
    <div className="app-container">
      <h1>Color Picker App</h1>
      <ColorPicker colors={colors} onColorSelect={setSelectedColor} />
      <ColorDisplay selectedColor={selectedColor} />
    </div>
  );
};

export default HomePage; 