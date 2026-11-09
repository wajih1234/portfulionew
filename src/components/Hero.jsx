
import { Download, ArrowRight } from "lucide-react";

const NAME = "Wajih Cherni";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0d0b21] px-6 pb-20 pt-32 text-white"
    >
      {/* soft glows in the background */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 md:flex-row md:justify-between">
        {/* text */}
        <div className="max-w-xl text-center md:text-left">
          <p className="mb-2 font-semibold text-purple-400">
            Hello
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            
            <span className="block text-purple-400">
              Advanced Technologies Engineer  
            </span>
          </h1>

          <p className="mt-4 text-gray-400">
            Advanced Technologies Engineer 
            I develop AI-powered applications, working with Machine Learning,
            Large Language Models, RAG and GraphRAG to build practical
            intelligent solutions.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-sm font-semibold shadow-lg shadow-purple-500/30 transition hover:opacity-90"
            >
              <Download size={16} /> Download CV
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
            >
              View projects <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* photo */}
        <div className="rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 p-1 shadow-[0_0_60px_rgba(168,85,247,0.4)]">
          <img
            src="/IMG_47862.jpg"
            alt={NAME}
            className="h-56 w-56 rounded-full object-cover sm:h-72 sm:w-72"
          />
        </div>
      </div>
    </section>
  );
}
