import { motion } from 'framer-motion'
import { Download, Mail, ArrowRight } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function Hero() {
  const { personal } = portfolioData

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-cyan/10 text-cyan border border-cyan/20 mb-6">
                Ingeniero de Sistemas
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
            >
              <span className="text-light">{personal.name.split(' ')[0]}</span>
              <br />
              <span className="text-gradient">{personal.name.split(' ').slice(1).join(' ')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-muted mb-8 leading-relaxed max-w-xl"
            >
              {personal.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <a
                href={personal.cvUrl}
                className="glow-button inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan to-electric text-white font-medium text-sm relative z-10 cursor-pointer"
              >
                <Download size={18} />
                Descargar CV
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-light hover:bg-white/5 hover:border-cyan/30 transition-all duration-300 font-medium text-sm cursor-pointer"
              >
                <Mail size={18} />
                Contactarme
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-6 mt-10 justify-center md:justify-start"
            >
              <div className="flex -space-x-2">
                {['#22D3EE', '#3B82F6', '#6366F1'].map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-dark"
                    style={{ background: color }}
                  />
                ))}
              </div>
              <p className="text-xs text-muted">
                <span className="text-cyan font-semibold">+20</span> proyectos completados
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:flex justify-center items-center"
          >
            <div className="relative">
              <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-cyan/20 via-electric/10 to-transparent p-1 animate-float">
                <div className="w-full h-full rounded-full bg-dark-card flex items-center justify-center overflow-hidden border border-white/5">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan to-electric flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">DL</span>
                    </div>
                    <h3 className="text-lg font-semibold text-light">{personal.name}</h3>
                    <p className="text-sm text-muted">{personal.title}</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl glass-card flex items-center justify-center neon-glow">
                <div className="text-center">
                  <p className="text-2xl font-bold text-cyan">3+</p>
                  <p className="text-[10px] text-muted">Años</p>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-xl glass-card flex items-center justify-center">
                <div className="text-center">
                  <p className="text-2xl font-bold text-electric">100%</p>
                  <p className="text-[10px] text-muted">Dedicación</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/10 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-cyan/60" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
