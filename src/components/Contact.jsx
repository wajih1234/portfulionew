import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const contacts = [
  { icon: Mail, label: "cherniwajih4@gmail.com", href: "mailto:cherniwajih4@gmail.com" },
  { icon: FaGithub, label: "github.com/wajih1234", href: "https://github.com/wajih1234" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/cherni-wajih-120b44315" },
]

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h2 className="text-3xl font-bold text-purple-300">Contact Me</h2>
      <p className="mt-4 text-white/60">
        I'm looking for an engineering position where I can apply my skills in AI, web development and software architecture.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {contacts.map(({ icon: Icon, label, href }) => (
          <a key={href} href={href} target="_blank" rel="noreferrer"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm transition hover:border-purple-400/50 hover:bg-white/10">
            <Icon size={16} className="text-purple-300" /> {label}
          </a>
        ))}
      </div>

      <a href="/cv.pdf" download="Wajih_Cherni_CV.pdf"
        className="mt-10 inline-block rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 font-semibold shadow-[0_0_20px_rgba(168,85,247,0.5)] transition hover:scale-105">
        Download my CV
      </a>

      <p className="mt-16 text-xs text-white/30">© 2026 Wajih Cherni</p>
    </section>
  )
}