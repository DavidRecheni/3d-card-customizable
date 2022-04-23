import { useState } from 'react';
import { CirclePicker } from 'react-color';
import CardAnimation from './components/CardAnimation/CardAnimation';

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

          <div className="flex flex-col">
            <p>Enter name:</p>
            <input className="border px-2 py-1" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="flex flex-col">
            <p>Choose a color: </p>
            <CirclePicker
              onChange={(colorResult) => { setSelectedColor(colorResult.hex); }}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;
