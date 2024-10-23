import './App.css'
import {Canvas, useLoader} from '@react-three/fiber'
import { PresentationControls, Stage, Float, ScrollControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Furniture from './components/Furniture'
import Configurator from './components/Configurator'
import { CustomizationProvider } from './components/Customization'

function App() {
  const gltf = useLoader(GLTFLoader, './models/furniture.glb')
  return (
    <CustomizationProvider>
      <div className='App'>
        <Canvas shadows camera={{ position: [0, 0, 20], fov: 75 }}>
          <ScrollControls>
          <PresentationControls >
            <Stage preset="rembrandt" adjustCamera={false} intensity={0.5} shadows="contact" environment="city">
            <Float
              speed={3} 
              rotationIntensity={1}
              floatIntensity={1} 
              floatingRange={[1, 2]}
            >
              <Furniture/>
              </Float>
            </Stage>
          </PresentationControls>
          </ScrollControls>
          <color attach={"background"} args={["#282828"]}/>
        </Canvas>
        <Configurator/>
      </div>
      </CustomizationProvider>
  )
}

export default App
