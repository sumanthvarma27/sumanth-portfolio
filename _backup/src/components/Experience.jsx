export default function Experience() {
  return (
    <section id="experience" className="px-10 py-20">
      <h2 className="text-4xl font-bold text-purple-400 mb-10">Experience</h2>

      <div className="space-y-10">

        <div>
          <h3 className="text-2xl font-semibold">Software Development Engineer — Zymo Solutions</h3>
          <p className="text-purple-300">2024 – Present</p>
          <ul className="mt-3 space-y-2 list-disc ml-6">
            <li>Built AI-driven features using LLMs, RAG, LangChain</li>
            <li>Developed full-stack systems in React, Node.js, PostgreSQL</li>
            <li>Integrated Square POS and WhatsApp APIs (10K+ daily transactions)</li>
            <li>Built ETL pipelines processing 1M+ records/day</li>
            <li>Optimized backend latency by 60% using caching & indexing</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Software Engineer Intern — Ananth Technologies</h3>
          <p className="text-purple-300">2022 – 2023</p>
          <ul className="mt-3 space-y-2 list-disc ml-6">
            <li>Created automation tools improving efficiency by 30%</li>
            <li>Performed data extraction & transformation in Python</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Software Developer Engineer — SRM University</h3>
          <p className="text-purple-300">2021 – 2022</p>
          <ul className="mt-3 space-y-2 list-disc ml-6">
            <li>Built speech-to-speech translation platform using Transformers</li>
            <li>Achieved 95% accuracy across 10,000+ test cases</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
