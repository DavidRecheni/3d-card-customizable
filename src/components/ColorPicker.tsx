import React, { Dispatch, SetStateAction } from 'react';
import { CirclePicker } from 'react-color';

interface IColorPicker {
  setColor: Dispatch<SetStateAction<string>>
}

const ColorPicker: React.FC<IColorPicker> = ({ setColor }) => (
  <div className="flex flex-col">
    <p>Choose a color: </p>
    <CirclePicker
      onChange={(colorResult) => { setColor(colorResult.hex); }}
    />
  </div>
);

export default ColorPicker;
