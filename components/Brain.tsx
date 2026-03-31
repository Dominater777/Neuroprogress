"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, useGLTF, Center } from "@react-three/drei";

type Props={
progress:number;
regions:string[];
showRegions:boolean;
};

const regionPositions:any={

"Amygdala":[-0.4,-0.2,0.25],

"Hippocampus":[-0.2,-0.35,0.1],

"Dorsolateral PFC":[-1.1,0.55,0.55],

"Ventromedial PFC":[-0.7,0.15,0.5],

"Subgenual ACC":[-0.15,0.45,0.2],

"Nucleus Accumbens":[0,-0.15,0.2],

"Default Mode Network":[0,0.55,-0.2],

"Thalamus":[0,0.05,0.15],

"Anterior Insula":[0.45,0.2,0.15],

"Superior Temporal Gyrus":[0.75,-0.1,0.15],

"Wernicke Area":[0.9,0.05,0.2],

"Parietal Cortex":[0.25,0.85,-0.15],

"Substantia Nigra":[0,-0.4,-0.25],

"Putamen":[0.25,-0.1,0.1],

"Globus Pallidus":[0.2,-0.05,0.15],

"Cerebellum":[0,-0.85,-0.45],

"Motor Cortex":[-0.6,0.9,0.25],

"Basal Ganglia":[0.15,-0.1,0.15],

"Salience Network":[0.1,0.35,0.05]

};

function RegionLabels({progress,regions,showRegions}:Props){

if(!showRegions) return null;

return(

<>

{regions.map(region=>{

const pos=regionPositions[region];

if(!pos) return null;

const r=120+progress*130;
const g=170-progress*120;
const b=255-progress*200;

return(

<group key={region} position={pos}>

<Html center distanceFactor={8}>

<div style={{

padding:"6px 14px",

borderRadius:"999px",

background:`rgba(${r},${g},${b},0.14)`,

border:`1px solid rgba(${r},${g},${b},0.35)`,

color:`rgb(${r+40},${g+40},${b+40})`,

fontSize:"12px",

backdropFilter:"blur(10px)",

boxShadow:`0 0 14px rgba(${r},${g},${b},0.35)`

}}>

{region}

</div>

</Html>

</group>

);

})}

</>

);

}

function BrainModel({progress,regions,showRegions}:Props){

const{scene}=useGLTF("/models/scene.gltf");

return(

<Center>

<primitive object={scene} scale={1.12} rotation={[0,Math.PI,0]}/>

<RegionLabels

progress={progress}

regions={regions}

showRegions={showRegions}

/>

</Center>

);

}

export default function Brain({progress,regions,showRegions}:Props){

return(

<Canvas camera={{position:[0,0,7],fov:32}}>

<ambientLight intensity={0.85}/>

<directionalLight position={[5,5,6]} intensity={1.05}/>

<directionalLight position={[-5,-3,-5]} intensity={0.2}/>

<directionalLight position={[0,5,-6]} intensity={0.2}/>

<BrainModel

progress={progress}

regions={regions}

showRegions={showRegions}

/>

<OrbitControls

enableZoom

enablePan={false}

minDistance={3.5}

maxDistance={14}

rotateSpeed={0.55}

zoomSpeed={0.7}

dampingFactor={0.06}

enableDamping

/>

</Canvas>

);

}

useGLTF.preload("/models/scene.gltf");