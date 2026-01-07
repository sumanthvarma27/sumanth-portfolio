export default function Skills() {
  const skills = [
    "React", "Next.js", "Node.js", "Python", "Java",
    "AWS", "Docker", "Kubernetes", "PostgreSQL",
    "LangChain", "LLMs", "FastAPI", "Spring Boot"
  ];

  return (
    <section id="skills" className="px-10 py-20 bg-[#112240]">
      <h2 className="text-4xl font-bold text-purple-400 mb-6">Technical Skills</h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((s) => (
          <div key={s} className="px-6 py-3 bg-purple-500/20 border border-purple-400 rounded-full">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
