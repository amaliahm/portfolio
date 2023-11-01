import React, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture} from '@react-three/drei'
import CanvasLoader from '../Loader'
import * as THREE from 'three'
import '@react-three/drei'

const Ball = () => {

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          flatShading
        />
      </mesh>
    </Float>
  )
}


const BallCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};






const texts = [
  'React',
  'GraphQL',
  'TypeScript',
  'Prisma',
  'Apollo',
  'NodeJS',
  'Express',
  'JWT',
  'Figma',
  'Git',
  'Netlify',
  'Heroku',
  'Angular',
  'SSR',
  '_Lodash',
  'Python',
  'Redux',
  'REST',
  'Cloudinary',
  'Firebase',
  'SCSS',
  'TDD',
  'Ionic'
]

const SphereBall = () => {
  

  return (
    <></>
  )
}














export default BallCanvas