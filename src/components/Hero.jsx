

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-4"
      >
        Hi, I'm <span className="text-purple-400">Sumanth Varma</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl max-w-2xl"
      >
        Software Engineer specializing in AI, Full Stack Development,
        and Cloud-Native Systems.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-6 space-x-6"
      >
        <a href="mailto:varma.gadiraju2001@gmail.com" className="text-purple-400 text-xl underline">Email</a>
        <a href="https://www.linkedin.com/in/sumanthvarma3009" className="text-purple-400 text-xl underline">LinkedIn</a>
        <a href="https://github.com/sumanthvarma27" className="text-purple-400 text-xl underline">GitHub</a>
      </motion.div>
    </section>
  );
}
