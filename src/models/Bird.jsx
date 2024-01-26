import { useGLTF } from '@react-three/drei'
import birdScene from '../assets/3d/bird.glb'

const Bird = () => {
  const { scene, animation } = useGLTF(birdScene); 
    return (
      <mesh position={ [-10, -5, -20] } scale={ [0.015, 0.015, 0.015] }>
        <primitive object={scene} />
      </mesh>
    )
}

export default Bird