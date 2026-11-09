import speak from "../assets/speak.jpg"
import cp from "../assets/cp.png"

const items = [
  {
    image: speak,
    alt: "ACM ENSTAB event",
    title: "Event Manager, ACM ENSTAB",
    text: "It's important to be responsible and take initiative, which is why I served as an Event Manager in ACM ENSTAB, where I gained valuable leadership and social skills.",
  },
  {
    image: cp,
    alt: "Problem-solving competition",
    title: "Problem-solving competitions",
    text: "I have participated in several problem-solving competitions to strengthen my critical thinking and analytical skills.",
  },
]

export default function Community() {
  return (
    <section id="Community" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-10 text-center text-3xl font-bold text-purple-300">Community</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.title}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.4)]"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.alt}
                className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}