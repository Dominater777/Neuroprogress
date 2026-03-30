"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, useGLTF, Center } from "@react-three/drei";

type Props = {
  progress: number;
};

type Region = {
  name: string;
  position: [number, number, number];
};

function RegionLabels({ progress }: { progress: number }) {

  const regions: Region[] = [

    { name: "Prefrontal Cortex", position: [-1.15, 0.42, 0.65] },

    { name: "Anterior Cingulate", position: [-0.35, 0.78, 0.05] },

    { name: "Amygdala", position: [-0.48, -0.18, 0.35] },

    { name: "Hippocampus", position: [-0.25, -0.45, 0.15] }

  ];

  return (
    <>
      {regions.map(region => {

        const r = 150 + progress * 105;
        const g = 180 - progress * 120;
        const b = 205 - progress * 160;

        const glow = 8 + progress * 18;

        return (

          <group key={region.name} position={region.position}>

            <Html center distanceFactor={8}>

              <div
                style={{
                  padding: "7px 16px",

                  borderRadius: "999px",

                  background: `rgba(${r},${g},${b},0.14)`,

                  border: `1px solid rgba(${r},${g},${b},0.35)`,

                  color: `rgb(${r+35},${g+35},${b+35})`,

                  fontSize: "12.5px",

                  letterSpacing: ".03em",

                  fontWeight: 500,

                  backdropFilter: "blur(10px)",

                  boxShadow: `0 0 ${glow}px rgba(${r},${g},${b},0.25)`
                }}
              >

                {region.name}

              </div>

            </Html>

          </group>

        );

      })}
    </>
  );

}

function BrainModel({ progress }: { progress: number }) {

  const { scene } = useGLTF("/models/scene.gltf");

  return (

    <Center>

      <primitive
        object={scene}
        scale={1.12}
        rotation={[0, Math.PI, 0]}
      />

      <RegionLabels progress={progress} />

    </Center>

  );

}

export default function Brain({ progress }: Props) {

  return (

    <Canvas camera={{ position: [0, 0, 7], fov: 32 }}>

      <ambientLight intensity={0.8} />

      <directionalLight position={[5,5,6]} intensity={1.05} />

      <directionalLight position={[-5,-3,-5]} intensity={0.2} />

      <directionalLight position={[0,5,-6]} intensity={0.15} />

      <BrainModel progress={progress} />

      <OrbitControls
        enableZoom={true}
        enablePan={false}

        minDistance={3.5}
        maxDistance={14}

        rotateSpeed={0.55}
        zoomSpeed={0.7}

        dampingFactor={0.06}
        enableDamping={true}
      />

    </Canvas>

  );

}

useGLTF.preload("/models/scene.gltf");
