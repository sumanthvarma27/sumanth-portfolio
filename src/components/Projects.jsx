export default function Projects() {
  const projects = [
    {
      title: "AI Catering Management System",
      desc: "Full-stack AI ordering assistant using GPT-4, RAG, LangChain, WhatsApp API, Square POS.",
    },
    {
      title: "Logo Detection & Classification",
      desc: "Real-time logo detection using YOLOv5 + OpenCV with Flask backend.",
    },
    {
      title: "AI Math Tutor",
      desc: "Transformer-based math reasoning engine achieving 0.97 F1 score.",
    },
    {
      title: "DocuVault",
      desc: "Encrypted cloud document manager built with Flutter + Firebase.",
    },
  ];

  return (
    <section id="projects" className="px-10 py-20 bg-[#112240]">
      <h2 className="text-4xl font-bold text-purple-400 mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p) => (
          <div className="bg-[#0A192F] p-6 rounded-xl border border-purple-500/20 hover:border-purple-400 transition">
            <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-300">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
