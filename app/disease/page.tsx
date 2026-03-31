import Link from "next/link"

const conditions = [

{
title: "Healthy Brain",
href: "/viewer?disease=healthy",
subtitle:
"Stable neural regulation and balanced network communication"
},

{
title: "Major Depressive Disorder",
href: "/viewer?disease=mdd",
subtitle:
"Limbic-prefrontal dysregulation affecting mood and motivation"
},

{
title: "Schizophrenia",
href: "/viewer?disease=schizophrenia",
subtitle:
"Disrupted salience and perceptual integration networks"
},

{
title: "Parkinson's Disease",
href: "/viewer?disease=parkinsons",
subtitle:
"Dopaminergic degeneration affecting motor circuitry"
}

]

export default function DiseasePage() {

return (

<main className="min-h-screen flex items-center justify-center bg-[#020617] text-slate-100">

<div className="w-full max-w-[1100px] px-10">


{/* HEADER */}

<div className="text-center mb-24">

<p className="text-xs tracking-[0.45em] text-slate-400">

CONDITION SELECTION

</p>

<h1 className="mt-6 text-6xl font-semibold tracking-tight text-white">

Choose a Progression Model

</h1>

</div>



{/* 2 x 2 GRID */}

<div className="grid grid-cols-2 gap-14">


{conditions.map((condition) => (

<Link

key={condition.title}

href={condition.href}

className="group relative h-[220px] rounded-[32px] border border-slate-800/80 bg-slate-950/40 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900/50"

>


{/* hover glow */}

<div className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-400/10 via-transparent to-indigo-400/10"/>



{/* centered content */}

<div className="relative flex h-full flex-col items-center justify-center text-center px-10">


<h2 className="text-2xl font-medium tracking-tight text-white">

{condition.title}

</h2>



<p className="mt-4 text-sm leading-relaxed text-slate-400 max-w-[240px]">

{condition.subtitle}

</p>


</div>


</Link>

))}


</div>


</div>


</main>

)

}