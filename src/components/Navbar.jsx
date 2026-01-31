export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black/70 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto p-4 flex justify-between">
        <h1 className="font-bold text-xl">Nithish Kumar</h1>

        <div className="space-x-6">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
