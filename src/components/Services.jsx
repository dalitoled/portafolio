import { motion } from 'framer-motion'
import {
  Globe, Code, Smartphone, Zap, Brain, Users, Database, Network, Shield,
} from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { portfolioData } from '../data/portfolioData'

const iconMap = {
  Globe, Code, Smartphone, Zap, Brain, Users, Database, Network, Shield,
}

export default function Services() {
  const { services } = portfolioData

  return (
    <section id="services" className="relative section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Zap size={20} className="text-cyan" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">Servicios</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Qué puedo hacer <span className="text-gradient">por ti?</span>
          </h2>
          <p className="text-muted max-w-xl mb-16">
            Soluciones tecnológicas completas para impulsar tu negocio al siguiente nivel.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const IconComponent = iconMap[service.icon] || Code

            return (
              <AnimatedSection key={i} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-card rounded-2xl p-6 h-full group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/10 to-electric/10 flex items-center justify-center mb-4 group-hover:from-cyan/20 group-hover:to-electric/20 transition-all duration-300">
                    <IconComponent size={24} className="text-cyan" />
                  </div>
                  <h3 className="text-lg font-semibold text-light mb-3">{service.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{service.description}</p>
                </motion.div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
