import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, GitBranch, Folder, Code2 } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { portfolioData } from '../data/portfolioData'

const filters = [
  { key: 'all', label: 'Todos' },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'backend', label: 'Backend' },
  { key: 'ai', label: 'IA' },
  { key: 'mobile', label: 'Móviles' },
]

const projectGradients = [
  'from-cyan/20 to-blue-500/10',
  'from-purple-500/20 to-pink-500/10',
  'from-emerald-500/20 to-cyan-500/10',
  'from-amber-500/20 to-orange-500/10',
  'from-rose-500/20 to-purple-500/10',
  'from-blue-500/20 to-indigo-500/10',
]

export default function Projects() {
  const { projects } = portfolioData
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="relative section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Folder size={20} className="text-cyan" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">Proyectos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proyectos <span className="text-gradient">destacados</span>
          </h2>
          <p className="text-muted max-w-xl mb-10">
            Algunos de los proyectos en los que he trabajado recientemente.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeFilter === filter.key
                    ? 'bg-cyan/15 text-cyan border border-cyan/30'
                    : 'bg-white/5 text-muted border border-white/5 hover:bg-white/10 hover:text-light'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div className="glass-card rounded-2xl overflow-hidden group h-full flex flex-col">
                  <div
                    className={`h-48 bg-gradient-to-br ${projectGradients[i % projectGradients.length]} flex items-center justify-center relative overflow-hidden`}
                  >
                    <Folder size={48} className="text-white/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-card/80 to-transparent" />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold text-light mb-2 group-hover:text-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-white/5 text-muted border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                      <a
                        href={project.url}
                        className="flex items-center gap-1.5 text-xs text-muted hover:text-cyan transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={14} />
                        Ver proyecto
                      </a>
                      <a
                        href={project.github}
                        className="flex items-center gap-1.5 text-xs text-muted hover:text-cyan transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitBranch size={14} />
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
