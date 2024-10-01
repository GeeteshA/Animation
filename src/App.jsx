import React from 'react';
import './style.css';
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import Clyinder from './Clyinder';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing';
import { ReactTyped } from 'react-typed';

const App = () => {
  return (
    <>
    <div className="middle">
      <ReactTyped
        strings={[
          "HELLO !",
          "MEETESH Here",
          "I'm a Digital Artist",
        ]}
        typeSpeed={250}
        backSpeed={100}
        loop
      >
      </ReactTyped>
    </div>
      <Canvas flat camera={{fov:30}} >
          <OrbitControls/> 
          <ambientLight/>
          <Clyinder/>
          <EffectComposer>
            <Bloom
              mipmapBlur
              intensity={3.0} // The bloom intensity.
              luminanceThreshold={0.1} // luminance threshold. Raise this value to mask out darker elements in the scene.
              luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
            />
            {/* <ToneMapping adaptive/> */}
          </EffectComposer>
      </Canvas>

    </>
  )
}

export default App
