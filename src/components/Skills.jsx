import { skills } from "../data/resume"

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-12 text-center text-3xl font-bold text-purple-300">My Skills</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group) => (
          <div key={group.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="mb-4 font-semibold text-fuchsia-400">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-md border border-purple-400/20 bg-purple-500/10 px-3 py-1 font-mono text-xs text-purple-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}