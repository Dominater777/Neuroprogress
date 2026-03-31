"use client";

import Brain from "@/components/Brain";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { diseaseData } from "@/lib/diseaseData";

export default function ViewerPage(){

const params = useSearchParams();

const diseaseKey =
(params.get("disease") as keyof typeof diseaseData) ?? "mdd";

const disease =
diseaseData[diseaseKey] ?? diseaseData["mdd"];

const stages = disease.stages;

const [sliderValue,setSliderValue] = useState(0);

const stageIndex = Math.round(sliderValue);

const progress =
sliderValue/(stages.length-1);

const stage = stages[stageIndex];



/* timeline labels */

const timeRanges = {

healthy:[
"stable baseline",
"adaptive variability",
"long-term stability",
"resilient regulation"
],

mdd:[
"0–6 months",
"6–24 months",
"2–5 years",
"5+ years"
],

schizophrenia:[
"prodromal",
"first episode",
"recurrent",
"chronic"
],

parkinsons:[
"preclinical",
"early motor",
"moderate",
"advanced"
]

};

const times =
timeRanges[
diseaseKey as keyof typeof timeRanges
] ?? timeRanges.mdd;



/* region summaries */

const regionSummary = {

healthy:[
"Stable executive regulation in prefrontal cortex",
"Balanced emotional signaling in amygdala",
"Consistent hippocampal memory processing",
"Efficient switching between neural networks"
],

mdd:[
"Reduced regulatory control from prefrontal cortex",
"Increased sensitivity to negative stimuli in amygdala",
"Reduced hippocampal adaptability",
"Altered anterior cingulate conflict monitoring"
],

schizophrenia:[
"Reduced working memory coordination in prefrontal cortex",
"Disrupted interpretation of sensory signals",
"Altered salience attribution",
"Inconsistent thalamic filtering"
],

parkinsons:[
"Dopamine depletion affecting substantia nigra signaling",
"Basal ganglia loop disruption",
"Reduced motor cortex facilitation",
"Increased compensatory cerebellar activity"
]

};

const regionEffects =
regionSummary[
diseaseKey as keyof typeof regionSummary
] ?? regionSummary.mdd;



/* real world experience */

const humanExperience = {

healthy:{
cognitive:"Clear focus and flexible thinking",
emotional:"Stable mood with adaptive responses",
daily:"Consistent energy supporting daily activities"
},

mdd:{
cognitive:"Reduced concentration and slower decisions",
emotional:"Persistent low mood and reduced interest",
daily:"Lower motivation and decreased activity"
},

schizophrenia:{
cognitive:"Difficulty organizing thoughts",
emotional:"Reduced emotional consistency",
daily:"Challenges maintaining routines"
},

parkinsons:{
cognitive:"Slight slowing in processing",
emotional:"Frustration from reduced responsiveness",
daily:"Movement difficulty affecting independence"
}

};

const experience =
humanExperience[
diseaseKey as keyof typeof humanExperience
] ?? humanExperience.mdd;



return(

<main className="min-h-screen w-full text-slate-100">

<div className="mx-auto w-full max-w-[1700px] px-14 pt-20 pb-10">


<div className="flex items-center gap-20">


{/* LEFT PANEL */}

<section className="w-full max-w-[760px] space-y-10">


{/* title */}

<div className="text-center space-y-4">

<p className="text-xs tracking-[0.42em] text-slate-500">

NEURAL PROGRESSION

</p>

<h1 className="text-[42px] font-semibold text-white">

{disease.name}

</h1>

<p className="text-[17px] text-slate-400 max-w-[560px] mx-auto">

{disease.overview}

</p>

</div>



{/* progression */}

<div className="space-y-8">

<p className="text-xs tracking-[0.42em] text-slate-500 text-center">

PROGRESSION

</p>


<div className="relative w-full">


<div
className="absolute top-1/2 left-0 h-[4px] w-full -translate-y-1/2 rounded-full"
style={{
background:
"linear-gradient(90deg,#1e3a8a 0%, #0ea5e9 45%, #22d3ee 60%, #ef4444 100%)",
opacity:.35
}}
/>


<div
className="absolute top-1/2 left-0 h-[4px] -translate-y-1/2 rounded-full transition-all duration-300"
style={{
width:`${progress*100}%`,
background:
"linear-gradient(90deg,#3b82f6,#22d3ee,#ef4444)",
boxShadow:"0 0 18px rgba(56,189,248,.35)"
}}
/>


<input
type="range"
min={0}
max={stages.length-1}
step={0.01}
value={sliderValue}
onChange={(e)=>setSliderValue(parseFloat(e.target.value))}
className="relative z-10 w-full appearance-none bg-transparent cursor-pointer"
/>

</div>



<div className="flex justify-between text-[12px] text-slate-400">

{times.map((t,i)=>(

<div key={i} className="text-center">

<p className="text-slate-300">

{Math.round((i/(times.length-1))*100)}%

</p>

<p className="text-slate-500">

{t}

</p>

</div>

))}

</div>

</div>



{/* stage */}

<div
key={stageIndex}
className="

rounded-[32px]
border border-slate-800/50
bg-slate-950/40
backdrop-blur-md
p-10
text-center

transition-all
duration-300
"
>

<p className="text-xs tracking-[0.42em] text-slate-500 mb-3">

CURRENT STAGE

</p>

<h2 className="text-xl text-white mb-3">

{stage.label}

</h2>

<p className="text-[15px] text-slate-300 leading-[1.75]">

{stage.description}

</p>

</div>



{/* symptoms */}

<div
key={"symptoms"+stageIndex}
className="

rounded-[32px]
border border-slate-800/50
bg-slate-950/40
backdrop-blur-md
p-10
text-center

transition-all
duration-300
"
>

<p className="text-xs tracking-[0.42em] text-slate-500 mb-4">

SYMPTOMS

</p>

<ul className="space-y-2 text-[15px] text-slate-200">

{stage.symptoms.map(symptom=>(

<li key={symptom}>

• {symptom}

</li>

))}

</ul>

</div>



{/* region effects */}

{disease.showRegions && (

<div
key={"regions"+stageIndex}
className="

rounded-[32px]
border border-slate-800/50
bg-slate-950/40
backdrop-blur-md
p-10
text-center

transition-all
duration-300
"
>

<p className="text-xs tracking-[0.42em] text-slate-500 mb-4">

REGION EFFECTS

</p>

<ul className="space-y-2 text-[15px] text-slate-200">

{regionEffects.map(r=>(

<li key={r}>

• {r}

</li>

))}

</ul>

</div>

)}

</section>



{/* brain */}

<section className="flex-1">

<div className="h-[68vh]">

<Brain

progress={progress}

regions={stage.regions}

showRegions={disease.showRegions}

/>

</div>

</section>


</div>



{/* real world */}

<div className="mt-12 rounded-[36px] border border-slate-800/60 bg-slate-950/30 backdrop-blur-md px-16 py-10">

<p className="text-center text-xs tracking-[0.42em] text-slate-500 mb-8">

REAL WORLD EXPERIENCE

</p>


<div className="grid grid-cols-3 gap-16 text-center">


<div>

<p className="text-[13px] tracking-[0.35em] text-slate-500 mb-3">

COGNITIVE

</p>

<p className="text-[15px] text-slate-300">

{experience.cognitive}

</p>

</div>



<div>

<p className="text-[13px] tracking-[0.35em] text-slate-500 mb-3">

EMOTIONAL

</p>

<p className="text-[15px] text-slate-300">

{experience.emotional}

</p>

</div>



<div>

<p className="text-[13px] tracking-[0.35em] text-slate-500 mb-3">

DAILY FUNCTION

</p>

<p className="text-[15px] text-slate-300">

{experience.daily}

</p>

</div>


</div>

</div>



</div>

</main>

);

}