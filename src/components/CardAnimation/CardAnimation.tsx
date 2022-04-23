import { Text, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { CSSProperties, useState } from 'react';
import Card from './Card';
import UbuntuMono from '../../assets/UbuntuMono-Regular.ttf';

interface ICardAnimation {
  style: CSSProperties
  name: string
  color: string
}

const CardAnimation: React.FC<ICardAnimation> = ({
  style, name, color,
}) => {
  const [hovered, setHover] = useState(false);

  return (
    <Canvas
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      style={style}
    >
      <OrbitControls
        autoRotate={hovered}
      />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Card position={[0, 0, 0]} color={color} />
      <Text
        font={UbuntuMono}
        position={[-0.8, -0.7, 0.06]}
        scale={1.8}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </Canvas>
  );
};

export default CardAnimation;
