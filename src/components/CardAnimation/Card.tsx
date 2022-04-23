import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { Vector3 } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';

interface ICard {
  position: Vector3
  color: string
}

const Card: React.FC<ICard> = ({ position, color = '#f3f3f3' }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  return (
    <RoundedBox
      args={[3.5, 2, 0.1]}
      rotation={[0, 0, 0]}
      position={position}
      ref={mesh}
    >
      <meshStandardMaterial color={color} />
    </RoundedBox>
  );
};

export default Card;
