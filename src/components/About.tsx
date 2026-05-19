function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">About Me</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          I design and deploy robust AWS infrastructure using
          TypeScript with the AWS CDK and SDKs. I create reusable constructs,
          automate deployments, and manage distributed systems — all driven by
          IaC best practices that reduce errors and enable rapid iteration.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          I'm inspired by how reusable rockets are revolutionizing space travel,
          and I'm determined to apply my engineering skills to aerospace —
          whether that's flight software, ground systems, simulation tools,
          telemetry pipelines, or cloud-based mission infrastructure.
        </p>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Skills</h3>
          <div className="flex flex-wrap gap-3">
            {['TypeScript', 'AWS CDK', 'AWS SDK', 'React', 'Node.js', 'Distributed Systems', 'IaC', 'Tailwind CSS', 'Git', 'Python'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Areas I'm Excited About</h3>
          <div className="flex flex-wrap gap-3">
            {['GNC Software', 'Embedded Systems', 'Flight Simulation', 'Trajectory Optimization', 'Telemetry Pipelines', 'Reusable Launch Vehicles'].map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
