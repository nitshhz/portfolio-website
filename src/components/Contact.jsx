export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 max-w-4xl mx-auto px-6 scroll-mt-24"
    >
      <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>

      <p className="text-gray-400 mb-8">
        Have a project, internship opportunity, or collaboration in mind?
        Feel free to reach out — I’d be happy to connect.
      </p>

      <div className="space-y-3 text-gray-300">
        <p>
          📧 <strong>Email:</strong>{" "}
          <a
            href="mailto:nithish4626@gmail.com"
            className="text-blue-400 hover:underline"
          >
            nithish4626@gmail.com
          </a>
        </p>

        <p>
          📞 <strong>Phone:</strong> +91 86675 99358
        </p>

        <p>
          💼 <strong>LinkedIn:</strong>{" "}
          <a
            href="https://linkedin.com/in/nithish-kumar-s-a68138303"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            linkedin.com/in/nithish-kumar-s-a68138303
          </a>
        </p>

        <p>
          💻 <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/nitshhz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            github.com/nitshhz
          </a>
        </p>
      </div>
    </section>
  );
}
