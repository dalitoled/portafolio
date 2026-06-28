import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { portfolioData } from '../data/portfolioData'

export default function Experience() {
  const { experience } = portfolioData

  return (
    <section id="experience" className="relative section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Briefcase size={20} className="text-cyan" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">Experiencia</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Mi <span className="text-gradient">trayectoria</span>
          </h2>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan via-electric/50 to-transparent" />

          <div className="space-y-12">
            {experience.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className={`glass-card rounded-2xl p-6 ${i % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Calendar size={14} className="text-cyan" />
                      <span className="text-xs text-cyan font-medium">{item.year}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-light mb-1">{item.title}</h3>
                    <p className="text-sm text-electric mb-3">{item.company}</p>
                    <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                  </div>
                </div>

                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-cyan border-2 border-dark -translate-x-1/2 mt-6 z-10 shadow-lg shadow-cyan/20" />

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
