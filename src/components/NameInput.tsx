import React, { Dispatch, SetStateAction } from 'react';

const NameInput: React.FC<{setName: Dispatch<SetStateAction<string>>}> = ({ setName }) => (
  <div className="flex flex-col">
    <p>Enter name:</p>
    <input className="border px-2 py-1" onChange={(e) => setName(e.target.value)} />
  </div>
);

export default NameInput;
