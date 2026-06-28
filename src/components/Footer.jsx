import { GitBranch, Globe, Mail, Heart } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function Footer() {
  const { personal, social } = portfolioData

  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="container-custom px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#hero" className="text-xl font-bold tracking-tight">
              <span className="text-gradient">DL</span>
              <span className="text-light/60">.</span>
            </a>
            <p className="text-xs text-muted mt-2">{personal.title}</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${social.email}`}
              className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-cyan/10 hover:text-cyan transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Globe size={18} />
            </a>
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-light transition-all duration-300"
              aria-label="GitHub"
            >
              <GitBranch size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted/60">
            &copy; {new Date().getFullYear()} {personal.name}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted/40 flex items-center gap-1">
            Hecho con <Heart size={12} className="text-red-400" /> y tecnología
          </p>
        </div>
      </div>
    </footer>
  )
}
