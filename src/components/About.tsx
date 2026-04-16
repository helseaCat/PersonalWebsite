function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">About Me</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          I'm a developer who loves building things for the web. I enjoy working
          across the stack and I'm always looking for new technologies to learn
          and problems to solve.
        </p>
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Skills</h3>
          <div className="flex flex-wrap gap-3">
            {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Tailwind CSS', 'Git', 'HTML', 'CSS'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
