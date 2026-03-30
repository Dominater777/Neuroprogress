"use client";

import Link from "next/link";

const options = [

{
name:"Healthy Brain",
href:"/viewer?disease=healthy",
description:"Baseline neural functioning"
},

{
name:"Major Depressive Disorder",
href:"/viewer?disease=mdd",
description:"Mood regulation circuitry disruption"
},

{
name:"Schizophrenia",
href:"/viewer?disease=schizophrenia",
description:"Altered salience and cognitive networks"
},

{
name:"Parkinson’s Disease",
href:"/viewer?disease=parkinsons",
description:"Degeneration of dopaminergic pathways"
}

];

export default function DiseasePage(){

return(

<div className="min-h-screen bg-[#070b12] text-[#e6edf6] flex items-center justify-center">

<div className="w-full max-w-[900px] px-8">

<div className="text-center mb-16">

<p className="text-[11px] tracking-[0.35em] text-[#9fb0c8] mb-4">

NEURAL PROGRESSION VISUALIZATION

</p>

<h1 className="text-[42px] font-semibold tracking-tight mb-5">

Select a condition

</h1>

<p className="text-[#9fb0c8] text-[15px]">

Explore how brain networks change across stages of neurological and psychiatric disorders

</p>

</div>



<div className="grid grid-cols-2 gap-5">

{options.map(option=>(

<Link

key={option.name}

href={option.href}

className="group rounded-[18px] border border-[rgba(150,170,200,.18)] bg-[#0f1623] p-7 transition-all duration-300 hover:border-[#7c9cff] hover:bg-[#121a2a]"

>

<p className="text-[18px] font-medium mb-2 group-hover:text-[#9bb0ff]">

{option.name}

</p>

<p className="text-[13.5px] text-[#9fb0c8]">

{option.description}

</p>

</Link>

))}

</div>

</div>

</div>

);

}