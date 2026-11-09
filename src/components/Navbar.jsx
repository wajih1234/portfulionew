const links = [
  { label: "Home", href: "#home" },
 
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  {label:"Community", href:'#Community'},
  { label: "Contact", href: "#contact" },
  
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0f0b24]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.7)]">
          Wajih cherni
        </a>

        <ul className="hidden gap-8 text-sm text-white/70 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(168,85,247,0.5)] transition hover:scale-105"
        >
          Hire Me
        </a>
      </nav>
    </header>
  )
}