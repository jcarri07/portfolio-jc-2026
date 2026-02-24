import { useEffect, useState } from 'react'
import './Navbar.css'

const navLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Sobre mí', href: '#about' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Contacto', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleLinkClick = (href) => {
        setMenuOpen(false)
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__inner container">
                <a className="navbar__logo" href="#hero" onClick={(e) => { e.preventDefault(); handleLinkClick('#hero') }}>
                    <span className="gradient-text">JC</span>
                    <span className="navbar__logo-dot" />
                </a>

                <nav className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="navbar__link"
                            onClick={(e) => { e.preventDefault(); handleLinkClick(link.href) }}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="mailto:carrizalesj5@gmail.com"
                        className="btn-glow navbar__cta"
                    >
                        Contrátame
                    </a>
                </nav>

                <button
                    className={`navbar__hamburger ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </header>
    )
}
