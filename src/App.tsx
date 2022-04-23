import { useState } from 'react';
import CardAnimation from './components/CardAnimation/CardAnimation';
import ColorPicker from './components/ColorPicker';
import NameInput from './components/NameInput';

const App = () => {
  const [name, setName] = useState('David Recheni');
  const [selectedColor, setSelectedColor] = useState('');

  return (
    <div className="relative h-screen">
      <CardAnimation
        style={{ position: 'absolute' }}
        name={name}
        color={selectedColor}
      />
      <div className="absolute bottom-20 w-full border-t-2 pt-4">
        <div className="flex justify-center items-top gap-4">

          <NameInput setName={setName} />

          <ColorPicker setColor={setSelectedColor} />

        </div>
      </div>
    </div>
  );
};

export default App;
