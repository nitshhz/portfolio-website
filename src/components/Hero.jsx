export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center">
      <div className="max-w-3xl px-6">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I’m Nithish Kumar S
        </h1>

        <h2 className="text-2xl text-blue-400 mb-6">
          Full Stack Web Developer
        </h2>

        <p className="text-gray-400 mb-10">
          Results-oriented Full Stack Developer specializing in the MERN stack,
          focused on building responsive interfaces and scalable web
          applications.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            View My Projects
          </a>

          <a
            href="/Nithish_Kumar_Resume.pdf"
            download
            className="border border-blue-600 px-6 py-3 rounded-lg font-semibold text-blue-400 hover:bg-blue-600 hover:text-white"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
