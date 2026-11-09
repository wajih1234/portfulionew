import { experience, education } from "../data/resume"

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-24">
      <h2 className="mb-12 text-center text-3xl font-bold text-purple-300">Experience</h2>

      <div className="space-y-8 border-l border-purple-400/30 pl-8">
        {experience.map((e) => (
          <div key={e.period} className="relative">
            <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.9)]" />
            <p className="font-mono text-xs text-white/40">{e.period} · {e.place}</p>
            <h3 className="mt-1 text-lg font-bold">{e.role}</h3>
            <p className="text-sm text-purple-300">{e.company}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/60">
              {e.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="mb-8 mt-20 text-center text-3xl font-bold text-purple-300">Education</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((ed) => (
          <div key={ed.degree} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="font-mono text-xs text-white/40">{ed.period}</p>
            <h3 className="mt-1 font-semibold">{ed.degree}</h3>
            <p className="text-sm text-purple-300">{ed.school}</p>
          </div>
        ))}
      </div>
    </section>
  )
}