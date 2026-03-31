"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function HomePage() {

  return (

    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020617] text-slate-100">


      {/* animated wave field */}

      <motion.svg
        className="absolute inset-0 h-full w-full opacity-80"
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"

        animate={{ y: [0, -20, 0] }}

        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >

        <defs>

          <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="3" />
          <stop offset="50%" stopColor="#818cf8" stopOpacity="3.25" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="3.5" />
          </linearGradient>

          <filter id="waveGlow">
            <feGaussianBlur stdDeviation="4" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

        </defs>


        {Array.from({ length: 20 }).map((_, i) => (

          <path
            key={i}

            d={`
              M0 ${170 + i * 26}
              C420 ${150 + i * 30},
                940 ${245 + i * 24},
                1600 ${210 + i * 28}
            `}

            fill="none"

            stroke="url(#waveGradient)"

            strokeWidth="1.2"

            filter="url(#waveGlow)"

            opacity={0.4 - i * 0.012}

          />

        ))}

      </motion.svg>



      {/* ambient glow */}

      <motion.div
        className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-[190px]"

        animate={{
          scale: [1, 1.05, 1]
        }}

        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />



      {/* content */}

      <motion.div

        initial={{ opacity: 0, y: 30 }}

        animate={{ opacity: 1, y: 0 }}

        transition={{ duration: 1.2 }}

        className="relative flex flex-col items-center text-center px-6"
      >



        <p className="mb-8 text-sm tracking-[0.45em] text-slate-300">
          NEUROSCIENCE INTERFACE
        </p>



        <h1 className="text-6xl font-semibold tracking-tight text-white md:text-7xl">
          NeuroProgress
        </h1>



        <p className="mt-10 max-w-[720px] text-lg leading-[1.9] text-slate-300 md:text-xl">
          A structured visualization of how neurological and psychiatric
          conditions evolve across brain systems over time.
        </p>



        <motion.div

          whileHover={{ scale: 1.05 }}

          whileTap={{ scale: 0.98 }}

          className="mt-16"
        >

          <Link

            href="/disease"

            className="
            text-lg
            tracking-wide

            border-b border-slate-500

            pb-1

            transition duration-300

            hover:text-cyan-300
            hover:border-cyan-300
            "
          >

            Explore Conditions →

          </Link>

        </motion.div>



      </motion.div>



    </main>

  )

}