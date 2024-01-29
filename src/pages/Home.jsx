import { Canvas } from "@react-three/fiber"
import { Suspense, useRef, useState, useEffect } from "react"
import Loader from "../components/Loader"
import Island from "../models/Island"
import Sky from "../models/Sky"
import sakura from "../assets/sakura.mp3"
import Plane from "../models/Plane"
import HomeInfo from "../components/HomeInfo"
import { soundoff, soundon } from "../assets/icons"

const Home = () => {
  const musicRef = useRef(new Audio(sakura));
  musicRef.current.volume = 0.4;
  musicRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  useEffect(() => {
    if(isPlayingMusic) musicRef.current.play();
    return () => {
      musicRef.current.pause();
    }
  }, [isPlayingMusic])
  

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [2, -5.5, -43];
    let rotation = [0.1, 4.7, 0];

    if(window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    }
    else{
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if(window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    }
    else{
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
        <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
          {currentStage && <HomeInfo currentStage={currentStage} />}
        </div>
      <Canvas 
        className={`w-full h-screen absolute bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} 
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
        {/* suspense used for loading and wrapping as it can show loader instead  until data is available*/}
          <directionalLight position={[1,1,1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight groundColor="#000000" intensity={1} />
          {/* <Bird /> */}
          <Sky 
            isRotating={isRotating}
          />
          <Island 
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane 
            position={planePosition}
            scale={planeScale}
            isRotating={isRotating}
            rotation={ [0, 1.5, 0] }
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-2 left-2">
        <img 
          src={isPlayingMusic ? soundon : soundoff}
          alt="sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={()=> setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  )
}

export default Home