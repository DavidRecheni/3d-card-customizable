import { useState } from 'react';
import CardAnimation from './components/CardAnimation/CardAnimation';

const App = () => {
  const [name, setName] = useState('David Recheni');
  return (
    <div className="relative h-screen">
      <CardAnimation style={{ position: 'absolute', zIndex: -1 }} name={name} />
      <div className="absolute bottom-20 w-full border-t-2 pt-4">
        <div className="flex justify-center items-center gap-2">
          <p>Enter name:</p>
          <input className="border px-2 py-1" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
      </div>
    </div>
  );
};

export default App;
