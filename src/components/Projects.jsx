export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">
              Employee Management System
            </h3>
            <p className="text-gray-400 mt-2">
              Full stack CRUD system using Python + MySQL.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">
              Portfolio Website
            </h3>
            <p className="text-gray-400 mt-2">
              Responsive developer portfolio.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
