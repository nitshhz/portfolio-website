export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center pt-20">
      <div>
        <h1 className="text-5xl font-bold mb-4">
          Full Stack Developer
        </h1>

        <p className="text-gray-400 mb-6">
          I build modern web applications using React and Node.js
        </p>

        <a href="#projects" className="bg-blue-600 px-6 py-3 rounded-lg">
          View Projects
        </a>
      </div>
    </section>
  );
}
