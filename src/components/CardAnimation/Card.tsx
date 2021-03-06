import React from 'react';
import { RoundedBox } from '@react-three/drei';

interface ICard {
  color: string
}

const Card: React.FC<ICard> = ({ color = '#f3f3f3' }) => (
  <RoundedBox
    args={[3.5, 2, 0.05]}
  >
    <meshStandardMaterial color={color} />
  </RoundedBox>
);

export default Card;
