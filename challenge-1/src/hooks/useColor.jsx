import { useState } from 'react';

// Custom hook that provides selectedColor state and its setter function
const useColor = () => {
  const [selectedColor, setSelectedColor] = useState('white');
  return [selectedColor, setSelectedColor];
};

export default useColor;