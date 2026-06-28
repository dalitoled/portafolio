import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { User, Award, Briefcase } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { portfolioData } from '../data/portfolioData'

function AnimatedCounter({ value, suffix = '', label, prefix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <div ref={ref} className="text-center p-6 rounded-2xl glass-card">
      <p className="text-3xl md:text-4xl font-bold text-gradient mb-1">
        {prefix}{count}{suffix}
      </p>
      <p className="text-sm text-muted">{label}</p>
    </div>
  )
}

export default function About() {
  const { personal, stats } = portfolioData

  return (
    <section id="about" className="relative section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <User size={20} className="text-cyan" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">Sobre mí</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Conoce más sobre{' '}
            <span className="text-gradient">mi trabajo</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <AnimatedSection delay={0.1}>
            <p className="text-muted leading-relaxed text-base md:text-lg">
              {personal.description}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: '💻', label: 'Desarrollo Web' },
                { icon: '📱', label: 'Aplicaciones Móviles' },
                { icon: '⚙️', label: 'Automatización' },
                { icon: '🤖', label: 'Inteligencia Artificial' },
                { icon: '🗄️', label: 'Bases de Datos' },
                { icon: '🔗', label: 'APIs' },
                { icon: '🔒', label: 'Ciberseguridad' },
                { icon: '📊', label: 'Consultoría' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/5"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-xs text-muted">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="right">
            <div className="glass-card rounded-2xl p-6 md:p-8 h-full">
              <h3 className="text-lg font-semibold text-light mb-6 flex items-center gap-2">
                <Award size={18} className="text-cyan" />
                Especialidades
              </h3>
              <div className="space-y-4">
                {[
                  { title: 'Desarrollo Full Stack', level: 92 },
                  { title: 'Frontend (Vue/React)', level: 88 },
                  { title: 'Backend (PHP/Laravel/Node)', level: 90 },
                  { title: 'Bases de Datos', level: 88 },
                  { title: 'Inteligencia Artificial', level: 85 },
                  { title: 'Automatización', level: 92 },
                ].map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-muted">{skill.title}</span>
                      <span className="text-cyan">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan to-electric"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <AnimatedSection key={i} delay={0.1 * i}>
              <AnimatedCounter {...stat} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
