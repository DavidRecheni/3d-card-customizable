import { Text } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { CSSProperties } from 'react';
import Card from './Card';
import UbuntuMono from '../../assets/UbuntuMono-Regular.ttf';

const CardAnimation: React.FC<{style: CSSProperties, name: string}> = ({ style, name }) => (
  <Canvas style={style}>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Card position={[0, 0, 0]} />
    <Text
      font={UbuntuMono}
      position={[-0.8, -0.7, 0.1]}
      scale={1.8}
      color="black"
      anchorX="center"
      anchorY="middle"
    >
      {name}
    </Text>
  </Canvas>
);

export default CardAnimation;
