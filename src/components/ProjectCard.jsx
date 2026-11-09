import { Code2, Layers, ArrowUpRight, Cpu, Globe, FileText } from "lucide-react"

const btn =
  "flex flex-1 items-center justify-center gap-2 rounded-lg border px-3 py-2.5 font-mono text-xs transition"

export default function ProjectCard({ project, onOpenDocs }) {
  const { id, year, category, title, description, tags, repo, live, image, docs , report} = project
  const hasDocs = docs && docs.length > 0

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.4)]">
      {image && (
        <img src={image} alt={title} className="aspect-video w-full object-cover" />
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between">
          <span className="font-mono text-xs text-white/40">
            {String(id).padStart(2, "0")} — {year}
          </span>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/15 text-purple-300">
            <Cpu size={18} />
          </div>
        </div>

        <span className="mt-4 font-mono text-[11px] uppercase tracking-wider text-purple-300">
          {category}
        </span>
        <h3 className="mt-2 text-xl font-bold text-white">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4">
          {tags.map((t) => (
            <span key={t} className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-[11px] text-white/60">
              {t}
            </span>
          ))}
        </div>

        {( report ||repo || live || hasDocs) && (
          <div className="mt-5 flex flex-wrap gap-3">
            {repo && (
              <a href={repo} target="_blank" rel="noreferrer"
                className={`${btn} border-white/15 bg-white/5 text-white hover:bg-white/10`}>
                <Code2 size={14} /> Code <ArrowUpRight size={13} />
              </a>
            )}
            {report && (
  <a href={report} target="_blank" rel="noreferrer"
    className={`${btn} border-purple-400/40 bg-purple-500/15 text-purple-200 hover:bg-purple-500/30`}>
    <FileText size={14} /> Report
  </a>
)}
            {live && (
              <a href={live} target="_blank" rel="noreferrer"
                className={`${btn} border-pink-400/40 bg-pink-500/15 text-pink-200 hover:bg-pink-500/30`}>
                <Globe size={14} /> Live
              </a>
            )}
            {hasDocs && (
              <button onClick={() => onOpenDocs(project)}
                className={`${btn} cursor-pointer border-purple-400/40 bg-purple-500/15 text-purple-200 hover:bg-purple-500/30`}>
                <Layers size={14} /> Docs · {docs.length}
              </button>
            )}
          </div>
        )}
      </div>
    </article>
  )
}