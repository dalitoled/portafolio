import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { portfolioData } from '../data/portfolioData'

export default function Certifications() {
  const { certifications } = portfolioData

  return (
    <section id="certifications" className="relative section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Award size={20} className="text-cyan" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">
              Certificaciones
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Cursos y <span className="text-gradient">certificaciones</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-6 h-full"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Award size={20} className="text-cyan" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-light mb-1">{cert.title}</h3>
                    <p className="text-xs text-cyan mb-1">{cert.issuer}</p>
                    <p className="text-xs text-muted mb-2">{cert.year}</p>
                    <p className="text-xs text-muted/60 leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
