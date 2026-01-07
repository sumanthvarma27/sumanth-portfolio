export default function Certifications() {
  const certs = [
    "AWS Solutions Architect",
    "AWS Cloud Practitioner",
    "Deep Learning Specialization – Andrew Ng",
    "Machine Learning Specialization – Andrew Ng",
  ];

  return (
    <section className="px-10 py-20 bg-[#112240]">
      <h2 className="text-4xl font-bold text-purple-400 mb-6">Certifications</h2>

      <ul className="list-disc ml-6 space-y-2">
        {certs.map(c => (
          <li>{c}</li>
        ))}
      </ul>
    </section>
  );
}
