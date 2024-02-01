import { useGLTF } from '@react-three/drei'
import React from 'react'
import skyScene from '../assets/3d/sky.glb'
function Sky() {
  const sky = useGLTF(skyScene)
  return (
    <div>
      <mesh></mesh>
    </div>
  )
}

export default Sky
