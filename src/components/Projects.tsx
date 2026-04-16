interface Project {
  title: string
  description: string
  tech: string[]
  link: string
}

const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A sample project showcasing full-stack development skills.',
    tech: ['React', 'Node.js', 'TypeScript'],
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'An interactive web application with a focus on user experience.',
    tech: ['JavaScript', 'Tailwind CSS', 'Vite'],
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'A utility tool built to solve a real-world problem.',
    tech: ['Python', 'REST API', 'PostgreSQL'],
    link: '#',
  },
]

function ProjectCard({ title, description, tech, link }: Project) {
  return (
    <a
      href={link}
      className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  )
}

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
