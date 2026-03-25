import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, ExternalLink } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Технология', href: '#technology' },
    { name: 'Как работаем', href: '#process' },
    { name: 'Кейсы', href: '#cases' },
    { name: 'Цены', href: '#pricing' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold tracking-tight flex items-center gap-2">
              <span className="bg-blue-600 w-8 h-8 rounded flex items-center justify-center text-white font-black italic">I</span>
              <span>Интеграм</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#cta"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all"
            >
              Заказать демо
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-slate-900 border-b border-slate-800"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-slate-300 hover:text-blue-400 border-b border-slate-800/50"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-3">
              <a
                href="#cta"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg"
              >
                Заказать демо
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
