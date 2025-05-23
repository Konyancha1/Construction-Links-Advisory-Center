import { Outlet, createRootRoute } from '@tanstack/react-router'
import {
  Home, Info, Hammer, Menu, X, Phone } from 'lucide-react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from 'framer-motion'
import { useState } from 'react'

import skyline from '../assets/78786.svg';
import logo from '../assets/logo.png';

export const RootRoute = createRootRoute({
  component: () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => setIsMenuOpen(prev => !prev)

    return (
      <div className="min-h-screen flex flex-col bg-white text-gray-800 transition-colors duration-300 font-sora">
        <motion.header
          className="backdrop-blur-md bg-white/80 border-b border-blue-100 sticky top-0 z-50 shadow"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="Construction Links Logo"
                className="h-16 w-auto"
              />
            </div>

            <nav className="hidden md:flex space-x-6 text-sm font-medium">
              <NavLink href="/" label="Home" Icon={Home} />
              <NavLink href="/about" label="About" Icon={Info} />
              <NavLink href="/services" label="Services" Icon={Hammer} />
              <NavLink href="/contact" label="Contact" Icon={Phone} />
            </nav>

            <div className="lg:hidden flex items-center gap-4">
              <button onClick={toggleMenu} className="md:hidden text-blue-800">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-white/90 backdrop-blur px-4 py-6 space-y-4 border-t border-blue-100"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <MobileNavLink href="/" label="Home" Icon={Home} />
              <MobileNavLink href="/about" label="About" Icon={Info} />
              <MobileNavLink href="/services" label="Services" Icon={Hammer} />
            </motion.div>
          )}
        </motion.header>

        <motion.main
          className="flex-grow max-w-6xl mx-auto px-4 py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Outlet />
        </motion.main>

        {/* Footer */}
        <motion.footer
          className="relative bg-gray-900 text-white px-4 pt-16 pb-8 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div
            className="absolute inset-x-0 top-0 h-60 bg-no-repeat bg-top bg-contain opacity-100 pointer-events-none"
            style={{ backgroundImage: `url(${skyline})` }}
          ></div>

          <div className="relative z-10 flex justify-center gap-6 mb-4 text-lg">
            <a
              href="https://www.facebook.com/constructionlinksadvisorycenter"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} className="text-white hover:text-blue-500" />
            </a>
            <a
              href="https://www.linkedin.com/company/constructionlinksadvisorycenter"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="text-white hover:text-blue-300" />
            </a>
            <a
              href="https://www.instagram.com/constructionlinksadvisorycenter"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-white hover:text-pink-400" />
            </a>
            <a
              href="https://wa.me/254722105801"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-white hover:text-green-400" />
            </a>
          </div>

          <p className="relative z-10 text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Construction Links & Advisory Centre. All rights reserved.
          </p>
        </motion.footer>
      </div>
    )
  },
})

const NavLink = ({ href, label, Icon }: any) => {
  const isActive = window.location.pathname === href

  return (
    <motion.a
      href={href}
      className={`flex items-center gap-2 transition relative py-1 ${
        isActive ? 'text-blue-900' : 'text-gray-700 hover:text-blue-900'
      }`}
      whileHover={{ scale: 1.05 }}
    >
      <Icon size={18} />
      <span>{label}</span>
      {isActive && (
        <motion.div
          layoutId="underline"
          className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-900"
        />
      )}
    </motion.a>
  )
}

const MobileNavLink = ({ href, label, Icon }: any) => (
  <motion.a
    href={href}
    className="flex items-center gap-3 text-gray-800 hover:text-blue-900 transition text-base"
    whileHover={{ scale: 1.05 }}
  >
    <Icon size={20} />
    <span>{label}</span>
  </motion.a>
)