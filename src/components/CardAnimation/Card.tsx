import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { Vector3 } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';

const Card: React.FC<{position: Vector3}> = ({ position }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  return (
    <RoundedBox
      args={[3.5, 2, 0.1]}
      position={position}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </RoundedBox>
  );
};

export default Card;
