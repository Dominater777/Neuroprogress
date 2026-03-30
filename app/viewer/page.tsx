"use client";

import Brain from "../../components/Brain";
import { useState } from "react";

const stages = [
  {
    title: "Healthy Baseline",

    regions: [
      "Prefrontal cortex",
      "Anterior cingulate cortex",
      "Hippocampus",
      "Amygdala",
    ],

    neural: [
      "Stable communication between emotional and cognitive brain networks",
      "Efficient regulation of stress responses",
      "Consistent reward processing sensitivity",
      "Balanced interaction between limbic and executive systems",
      "Reliable neural adaptability during cognitive demand",
    ],

    functional: [
      "Stable mood and emotional balance",
      "Clear decision-making ability",
      "Consistent motivation levels",
      "Restorative sleep patterns",
      "Healthy stress recovery",
    ],
  },

  {
    title: "Early Dysregulation",

    regions: [
      "Prefrontal cortex",
      "Amygdala",
    ],

    neural: [
      "Slight weakening of emotional regulation signaling",
      "Increased sensitivity to stress-related stimuli",
      "Reduced efficiency in reward processing pathways",
      "Subtle imbalance in limbic-prefrontal communication",
      "Mild elevation in baseline stress reactivity",
    ],

    functional: [
      "Occasional mental fatigue or low drive",
      "Reduced interest in normally rewarding activities",
      "Mild concentration variability",
      "Subtle sleep irregularities",
      "Lower perceived emotional steadiness",
    ],
  },

  {
    title: "Network Disruption",

    regions: [
      "Prefrontal cortex",
      "Amygdala",
      "Anterior cingulate cortex",
      "Hippocampus",
    ],

    neural: [
      "Weakened coordination between emotional and executive control systems",
      "Increased reactivity to perceived stressors",
      "Reduced hippocampal support for context and memory processing",
      "Less efficient cognitive control signaling",
      "Greater instability across large-scale brain networks",
    ],

    functional: [
      "Persistent low mood",
      "Increased irritability or emotional sensitivity",
      "Difficulty sustaining attention",
      "Reduced day-to-day consistency",
      "Higher subjective anxiety",
    ],
  },

  {
    title: "Functional Impairment",

    regions: [
      "Prefrontal cortex",
      "Hippocampus",
      "Anterior cingulate cortex",
    ],

    neural: [
      "Reduced top-down regulation from prefrontal systems",
      "Lower adaptability across emotional processing networks",
      "Increased neural fatigue during sustained effort",
      "Weaker synchronization between memory and control systems",
      "More persistent activation of stress-response pathways",
    ],

    functional: [
      "Difficulty completing mentally demanding tasks",
      "Withdrawal from previously valued activities",
      "Lower perceived mental energy",
      "Heightened emotional sensitivity",
      "Reduced sustained concentration",
    ],
  },

  {
    title: "Severe Dysregulation",

    regions: [
      "Prefrontal cortex",
      "Amygdala",
      "Hippocampus",
      "Anterior cingulate cortex",
    ],

    neural: [
      "Significant disruption across mood-regulation circuitry",
      "Marked reduction in reward-related responsiveness",
      "Reduced coordination between executive and emotional networks",
      "Persistent overactivation of stress-processing systems",
      "Broad instability across functional brain integration",
    ],

    functional: [
      "Persistent distress affecting daily functioning",
      "Severe fatigue or burnout-like exhaustion",
      "Major difficulty sustaining attention",
      "Chronic sleep disruption",
      "Reduced ability to manage responsibilities",
    ],
  },
];

export default function Viewer() {
  const [value, setValue] = useState(0);

  const index = Math.round(value);
  const progress = value / (stages.length - 1);
  const stage = stages[index];

  return (
    <div className="h-screen bg-[#081018] text-slate-200 flex items-center">
      <div className="w-full px-[5vw]">
        <div className="flex gap-[4vw] items-center">
          {/* LEFT PANEL */}
          <div className="w-[42%] max-w-[640px] space-y-8">
            <div>
              <p className="text-[11px] tracking-[0.3em] text-slate-400 mb-3">
                NEURAL PROGRESSION TIMELINE
              </p>

              <h1 className="text-[34px] font-semibold tracking-tight text-white">
                Major Depressive Disorder
              </h1>
            </div>

            {/* TIMELINE */}
            <div>
              <div className="h-[2px] w-full bg-slate-700/40 mb-3 rounded">
                <div
                  className="h-full bg-gradient-to-r from-slate-200 to-slate-400 transition-all duration-500"
                  style={{ width: `${progress * 100}%` }}
                />
              </div>

              <input
                type="range"
                min={0}
                max={stages.length - 1}
                step={0.01}
                value={value}
                onChange={(e) => setValue(parseFloat(e.target.value))}
                className="w-full accent-slate-200"
              />

              <div className="flex justify-between text-xs text-slate-500 mt-2">
                {stages.map((_, i) => (
                  <span
                    key={i}
                    className={i === index ? "text-white" : ""}
                  >
                    {i + 1}
                  </span>
                ))}
              </div>
            </div>

            {/* CURRENT STAGE */}
            <div>
              <p className="text-[11px] tracking-[0.3em] text-slate-400 mb-2">
                CURRENT STAGE
              </p>

              <p className="text-[22px] text-white font-semibold tracking-tight">
                {stage.title}
              </p>
            </div>

            {/* NEURAL */}
            <div className="rounded-[24px] border border-slate-600/60 bg-slate-900/45 backdrop-blur-md px-7 py-8 shadow-[0_10px_30px_rgba(0,0,0,0.28)]">
              <p className="text-[11px] tracking-[0.3em] text-slate-400 mb-5">
                NEURAL CHARACTERISTICS
              </p>

              <ul className="space-y-3 text-[15px] leading-[1.75] text-slate-200">
                {stage.neural.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            {/* FUNCTIONAL */}
            <div className="rounded-[24px] border border-slate-600/60 bg-slate-900/45 backdrop-blur-md px-7 py-8 shadow-[0_10px_30px_rgba(0,0,0,0.28)]">
              <p className="text-[11px] tracking-[0.3em] text-slate-400 mb-5">
                FUNCTIONAL IMPACT
              </p>

              <ul className="space-y-3 text-[15px] leading-[1.75] text-slate-300">
                {stage.functional.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            {/* REGIONS */}
            <div className="rounded-[24px] border border-slate-600/60 bg-slate-900/45 backdrop-blur-md px-7 py-8 shadow-[0_10px_30px_rgba(0,0,0,0.28)]">
              <p className="text-[11px] tracking-[0.3em] text-slate-400 mb-5">
                AFFECTED BRAIN REGIONS
              </p>

              <div className="flex flex-wrap gap-3">
                {stage.regions.map((region) => (
                  <div
                    key={region}
                    className="px-4 py-1.5 text-[12px] rounded-full bg-slate-800/70 border border-slate-600/40 whitespace-nowrap"
                  >
                    {region}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="w-[58%]">
            <div className="h-[88vh] relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,140,255,0.08),transparent_65%)]" />
              <Brain progress={progress} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}