import { motion } from 'framer-motion'
import { Code2, Server, Database, Brain, Wrench, Layers } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { portfolioData } from '../data/portfolioData'

const iconMap = {
  Code2, Server, Database, Brain, Wrench, Layers,
}

function SkillCategory({ category, index }) {
  const IconComponent = iconMap[category.icon] || Code2

  return (
    <AnimatedSection delay={index * 0.1}>
      <div className="glass-card rounded-2xl p-6 h-full">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
            <IconComponent size={20} className="text-cyan" />
          </div>
          <h3 className="text-lg font-semibold text-light">{category.title}</h3>
        </div>
        <div className="space-y-4">
          {category.items.map((skill, i) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="text-muted">{skill.name}</span>
                <span className="text-cyan text-xs font-medium">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan to-electric relative skill-bar"
                  style={{ width: 0 }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan to-electric"
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default function Skills() {
  const { skills } = portfolioData
  const categories = Object.values(skills)

  return (
    <section id="skills" className="relative section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Code2 size={20} className="text-cyan" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">Habilidades</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mis <span className="text-gradient">habilidades</span>
          </h2>
          <p className="text-muted max-w-xl mb-16">
            Tecnologías y herramientas con las que trabajo para crear soluciones de alto impacto.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, i) => (
            <SkillCategory key={category.title} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
