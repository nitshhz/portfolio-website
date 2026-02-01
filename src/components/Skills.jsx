export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>

        <div className="grid md:grid-cols-2 gap-6 text-gray-300">
          <ul className="space-y-2">
            <li>JavaScript</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>React.js</li>
          </ul>
          <ul className="space-y-2">
            <li>Node.js & Express.js</li>
            <li>MongoDB</li>
            <li>Python</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
