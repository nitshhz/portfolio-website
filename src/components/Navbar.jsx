export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black/70 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto p-4 flex justify-between">
        <h1 className="font-bold text-xl">Nithish Kumar</h1>

        <div className="space-x-6 text-gray-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
         <a href="#education" className="hover:text-white">Education</a>
         <a href="#projects" className="hover:text-white">Projects</a>
        <a href="#contact" className="hover:text-white">Contact</a>
        </div>

      </div>
    </nav>
  );
}
