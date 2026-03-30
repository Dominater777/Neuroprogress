export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-16">
      <div className="flex w-full max-w-lg flex-col items-center text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
          NeuroProgress
        </h1>

        <p className="mt-6 max-w-md text-base font-medium leading-relaxed text-zinc-300">
          Interactive visualization of neurodegenerative disease progression using
          3D brain models and scientific data.
        </p>

        <div className="mt-12">
          <a
            href="/disease"
            className="inline-flex items-center justify-center rounded-xl border border-cyan-400/90 bg-cyan-400/10 px-8 py-3.5 text-sm font-medium text-cyan-300 shadow-[0_0_24px_-8px_rgba(34,211,238,0.5)] transition hover:bg-cyan-400/20 hover:text-cyan-100"
          >
            Enter
          </a>
        </div>
      </div>
    </main>
  );
}