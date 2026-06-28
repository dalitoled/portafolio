import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail, MessageSquare, Globe, GitBranch, MapPin, Send, ArrowRight,
} from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { portfolioData } from '../data/portfolioData'

export default function Contact() {
  const { personal, social } = portfolioData
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="relative section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Mail size={20} className="text-cyan" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted">Contacto</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trabajemos <span className="text-gradient">juntos</span>
          </h2>
          <p className="text-muted max-w-xl mb-16">
            ¿Tienes un proyecto en mente? Hablemos y creemos algo increíble.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-muted mb-2">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-light placeholder:text-muted/40 text-sm transition-all duration-300"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-muted mb-2">Correo</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-light placeholder:text-muted/40 text-sm transition-all duration-300"
                    placeholder="tu@correo.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm text-muted mb-2">Empresa</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-light placeholder:text-muted/40 text-sm transition-all duration-300"
                  placeholder="Tu empresa (opcional)"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-muted mb-2">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-light placeholder:text-muted/40 text-sm transition-all duration-300 resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full glow-button inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan to-electric text-white font-medium text-sm cursor-pointer"
              >
                {submitted ? (
                  '¡Mensaje enviado!'
                ) : (
                  <>
                    Enviar mensaje
                    <Send size={16} />
                  </>
                )}
              </motion.button>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="right">
            <div className="space-y-6">
              <a
                href={`mailto:${social.email}`}
                className="flex items-center gap-4 p-4 rounded-xl glass-card group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center group-hover:bg-cyan/20 transition-colors">
                  <Mail size={22} className="text-cyan" />
                </div>
                <div>
                  <p className="text-xs text-muted">Correo</p>
                  <p className="text-sm text-light group-hover:text-cyan transition-colors">{social.email}</p>
                </div>
              </a>

              <a
                href={social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl glass-card group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <MessageSquare size={22} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-muted">WhatsApp</p>
                  <p className="text-sm text-light group-hover:text-emerald-400 transition-colors">Escribirme</p>
                </div>
              </a>

              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl glass-card group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Globe size={22} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-muted">LinkedIn</p>
                  <p className="text-sm text-light group-hover:text-blue-400 transition-colors">Conectar</p>
                </div>
              </a>

              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl glass-card group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <GitBranch size={22} className="text-light" />
                </div>
                <div>
                  <p className="text-xs text-muted">GitHub</p>
                  <p className="text-sm text-light group-hover:text-cyan transition-colors">Ver repositorios</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl glass-card">
                <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center">
                  <MapPin size={22} className="text-cyan" />
                </div>
                <div>
                  <p className="text-xs text-muted">Ubicación</p>
                  <p className="text-sm text-light">{personal.location}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
