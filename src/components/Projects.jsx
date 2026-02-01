export default function Projects() {
  return (
    <section id="projects" className="py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">
              Portfolio Website
            </h3>
            <p className="text-gray-400">
              Personal portfolio website built using React and Tailwind CSS,
              featuring responsive design and dark mode to showcase projects,
              skills, and contact information.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">
              To-Do List Website
            </h3>
            <p className="text-gray-400">
              A simple To-Do List web application built using HTML, CSS, and
              JavaScript. Allows users to add, mark, and delete tasks dynamically
              using DOM manipulation.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">
              Task Manager Website
            </h3>
            <p className="text-gray-400">
              A modern task management web application built using React, Vite,
              and Tailwind CSS, designed to manage daily tasks efficiently with a
              clean UI and smooth user experience.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
