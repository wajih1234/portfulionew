
export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-24">
      <h2 className="mb-10 text-center text-3xl font-bold text-purple-300">
        About Me
      </h2>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <p className="leading-relaxed text-white/70">
          I'm Wajih Cherni, an Advanced Technologies Engineer graduated from
          ENSTAB (National School of Advanced Sciences and Technologies of
          Borj Cedria), specializing in Industrial Systems. I'm passionate
          about Artificial Intelligence, Machine Learning, and software
          engineering, with a strong interest in building intelligent
          applications that solve real-world problems.
        </p>

        <p className="mt-4 leading-relaxed text-white/70">
          My experience includes developing AI-powered applications using
          Large Language Models (LLMs), Retrieval-Augmented Generation (RAG),
          and GraphRAG. During my final-year engineering project, I worked on
          intelligent systems for extracting and retrieving information from
          official Tunisian legal documents, combining AI technologies with
          backend and frontend development.
        </p>

        <ul className="mt-6 space-y-3 text-white/70">
          <li>🚀 Interested in AI engineering, Machine Learning, and Generative AI.</li>
          <li>🤖 Experience with Python, LLMs, RAG, GraphRAG, and AI application development.</li>
          <li>💻 Full-stack development experience with React, Flask, Node.js, and databases.</li>
          <li>🏭 Engineering background in Industrial Systems, combining technical problem-solving and software development.</li>
          <li>📚 Always learning, experimenting with new technologies, and improving my development skills.</li>
        </ul>
      </div>
    </section>
  );
}
