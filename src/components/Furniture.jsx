/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 public/models/furniture.glb 
*/

import React from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { useCusomization } from './Customization'
import * as THREE from 'three'

const Furniture = (props) => {
  const {material, legs, hands, doorColor} = useCusomization()

  const { nodes, materials } = useGLTF('./models/furniture.glb')

  const woodWickerTexture = useTexture({
    map: './textures/wood-wicker/Wood_Wicker_011_basecolor.png',
    normalMap: './textures/wood-wicker/Wood_Wicker_011_normal.png',
    roughnessMap: './textures/wood-wicker/Wood_Wicker_011_roughness.png',
    aoMap: './textures/wood-wicker/Wood_Wicker_011_ambientOcclusion.png',
    height: './textures/wood-wicker/Wood_Wicker_011_height.png',
  })

  woodWickerTexture.map.repeat.set(3, 3)
  woodWickerTexture.normalMap.repeat.set(3, 3)
  woodWickerTexture.roughnessMap.repeat.set(3, 3)
  woodWickerTexture.aoMap.repeat.set(3, 3)

  woodWickerTexture.map.wrapS = woodWickerTexture.map.wrapT =
  woodWickerTexture.normalMap.wrapS = woodWickerTexture.normalMap.wrapT =
  woodWickerTexture.roughnessMap.wrapS = woodWickerTexture.roughnessMap.wrapT =
  woodWickerTexture.aoMap.wrapS = woodWickerTexture.aoMap.wrapT =

  THREE.RepeatWrapping

  const stoneTextures = useTexture({
    map: './textures/stone/Stylized_Stone_Floor_007_basecolor.png',
    normalMap: './textures/stone/Stylized_Stone_Floor_007_normal.png',
    roughnessMap: './textures/stone/Stylized_Stone_Floor_007_roughness.png',
    aoMap: './textures/stone/Stylized_Stone_Floor_007_ambientOcclusion.png',
    height: './textures/stone/Stylized_Stone_Floor_007_height.png',
  })

  stoneTextures.map.repeat.set(3, 3)
  stoneTextures.normalMap.repeat.set(3, 3)
  stoneTextures.roughnessMap.repeat.set(3, 3)
  stoneTextures.aoMap.repeat.set(3, 3)

  stoneTextures.map.wrapS = stoneTextures.map.wrapT =
  stoneTextures.normalMap.wrapS = stoneTextures.normalMap.wrapT =
  stoneTextures.roughnessMap.wrapS = stoneTextures.roughnessMap.wrapT =
  stoneTextures.aoMap.wrapS = stoneTextures.aoMap.wrapT =

  THREE.RepeatWrapping

  // materials['lambert1.002'])

  return (
    <group position={[-5,0,0]} scale={[0.05,0.05,0.05]} {...props} dispose={null}>
      <mesh geometry={nodes.movel_lambert1_0.geometry}>
        <meshStandardMaterial {...(material == 'wicker'? stoneTextures : woodWickerTexture)}/> 
      </mesh>
      <mesh geometry={nodes.livros_lambert2_0.geometry} material={materials['lambert2.002']} position={[4.675, 7.126, 128.607]} />

      {/* doors */}
      <mesh geometry={nodes.Merged_lambert1_0.geometry} material={materials['lambert1.002']}>
        <meshStandardMaterial color={doorColor.color}/>
      </mesh>
      <mesh geometry={nodes.Porta_lambert1_0.geometry} material={materials['lambert1.002']}>
        <meshStandardMaterial color={doorColor.color}/>
      </mesh>


      <mesh 
        geometry={nodes.hande_1.geometry} 
        material={materials.Plate} 
        position={[-11.627, 52.986, 150.373]} 
        rotation={[-0.076, -0.534, -0.071]} 
        scale={[-3.518, -17.477, -2.056]} 
        visible={hands == 1}
      />
      <mesh 
        geometry={nodes.hand_1.geometry} 
        material={materials.Plate} 
        position={[199.007, 49.014, 97.846]} 
        rotation={[-0.02, -0.539, 0.038]} 
        scale={[-3.518, -17.477, -2.056]} 
        visible={hands == 1}
        />
      <mesh 
        geometry={nodes.hand_1001.geometry} 
        material={materials.Plate} 
        position={[100.389, 81.904, 99.861]} 
        rotation={[-3.134, 0.004, -1.588]} 
        scale={[-4.469, -22.202, -2.612]} 
        visible={hands === 1}
        />
      
      <mesh 
        geometry={nodes.hand_2.geometry} 
        material={materials.Metal} 
        position={[-16.05, 54.149, 154.056]} 
        rotation={[0, -0.579, -Math.PI]} 
        scale={[4.35, 14.833, 2.316]} 
        visible={hands === 2}
        />
      <mesh 
        geometry={nodes.hand_2001.geometry} 
        material={materials.Metal} 
        position={[99.213, 83.218, 103.991]} 
        rotation={[-0.045, 0.005, -1.574]} 
        scale={[4.35, 14.833, 2.316]} 
        visible={hands === 2}
        />
      <mesh 
        geometry={nodes.hand_2002.geometry} 
        material={materials.Metal} 
        position={[198.972, 52.068, 102.675]} 
        rotation={[0, -0.058, -Math.PI]} 
        scale={[4.35, 14.833, 2.316]} 
        visible={hands === 2}
        />
      
      <mesh 
        geometry={nodes.foot_1.geometry} 
        material={materials['lambert1.002']} 
        position={[0, 0, -60.519]} 
        visible={legs === 1}
      />
      <mesh 
        geometry={nodes.foot_1001.geometry} 
        material={materials['lambert1.002']} 
        visible={legs === 1}
      />
      <mesh 
        geometry={nodes.foot_1002.geometry} 
        material={materials['lambert1.002']} 
        position={[196.791, 0.574, 173.544]} 
        rotation={[Math.PI, -0.077, Math.PI]} 
        visible={legs === 1}
      />
      <mesh 
        geometry={nodes.foot_1003.geometry} 
        material={materials['lambert1.002']} 
        position={[196.791, 0.574, 96.894]} 
        rotation={[Math.PI, -0.077, Math.PI]} 
        visible={legs === 1}
      />
      
      <mesh 
        geometry={nodes.Cube.geometry} 
        material={materials.Metal} 
        position={[-93.086, -23.121, 5.529]} 
        scale={[-6.127, -24.241, -4.959]} 
        visible={legs === 2}
      />
      <mesh 
        geometry={nodes.Cube001.geometry} 
        material={materials.Metal} 
        position={[-93.086, -23.121, 91.014]} 
        scale={[-6.127, -24.241, -4.959]} 
        visible={legs === 2}
      />
      <mesh 
        geometry={nodes.Cube002.geometry} 
        material={materials.Metal} 
        position={[291.813, -23.121, 5.529]} 
        scale={[-6.127, -24.241, -4.959]} 
        visible={legs === 2}
      />
      <mesh 
        geometry={nodes.Cube003.geometry} 
        material={materials.Metal} 
        position={[291.813, -23.121, 91.014]} 
        scale={[-6.127, -24.241, -4.959]} 
        visible={legs === 2}
      />
    </group>
  )
}

useGLTF.preload('./models/furniture.glb')

export default Furniture
