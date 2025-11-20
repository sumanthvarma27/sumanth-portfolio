export default function Navbar() {
  return (
    <nav className="fixed w-full bg-[#0A192F]/80 backdrop-blur-lg z-50 px-10 py-5 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-purple-400">Sumanth</h1>
      <div className="space-x-8 text-lg">
        <a href="#about" className="hover:text-purple-400">About</a>
        <a href="#skills" className="hover:text-purple-400">Skills</a>
        <a href="#experience" className="hover:text-purple-400">Experience</a>
        <a href="#projects" className="hover:text-purple-400">Projects</a>
        <a href="#contact" className="hover:text-purple-400">Contact</a>
      </div>
    </nav>
  );
}
