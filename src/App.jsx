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
            <Stage adjustCamera={1} intensity={4} shadows={false} environment="sunset">
              <Furniture/>
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
