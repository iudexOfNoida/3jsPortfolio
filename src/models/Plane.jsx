import { useAnimations, useGLTF } from '@react-three/drei';
import ps from '../assets/3d/plane.glb';
import { useEffect, useRef } from 'react';

const Plane = ( {isRotating, ...props} ) => {
  const ref = useRef();
  const {scene, animations} = useGLTF(ps);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    actions["Take 001"].play();
  },[]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Plane