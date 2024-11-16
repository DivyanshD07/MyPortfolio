import React, { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import HomeInfo from '../components/HomeInfo'
import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons'

const Home = () => {

  const audioRef = useRef(new Audio(sakura))
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    }
  }, [isPlayingMusic])

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPositon = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPositon, rotation];
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPositon;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPositon = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPositon = [0, -4, -4];
    }

    return [screenScale, screenPositon];
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} /> {/* simulates the light coming from distant source like sun */}
          <ambientLight intensity={0.5} /> {/* illuminated all elements in the scene equally without casting shadows */}
          {/* <pointLight /> emits light in all direction from single point in shape of sphere */}
          {/* <spotLight /> similar to point light but emits light in a shape of cone so there will be an angle */}
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} /> {/* illuminates the scene with gradient */}
          <Sky
            isRotating={isRotating}
          />
          <Bird />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            scale={planeScale}
            position={planePosition}
            isRotating={isRotating}
            rotation={[0, 20, 0]}
          />
        </Suspense>

      </Canvas>
      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="sound"
          className='w-10 h-10 cursor-pointer object-contain'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  )
}

export default Home