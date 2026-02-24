import './Footer.css'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container footer__inner">
                <div className="footer__brand">
                    <span className="footer__logo gradient-text">JC</span>
                    <p className="footer__tagline">Transformando ideas en experiencias digitales.</p>
                </div>

                <div className="footer__links">
                    {['#hero', '#about', '#skills', '#experience', '#projects', '#contact'].map((href) => {
                        const labels = {
                            '#hero': 'Inicio',
                            '#about': 'Sobre mí',
                            '#skills': 'Habilidades',
                            '#experience': 'Experiencia',
                            '#projects': 'Proyectos',
                            '#contact': 'Contacto',
                        }
                        return (
                            <a
                                key={href}
                                href={href}
                                className="footer__link"
                                onClick={(e) => {
                                    e.preventDefault()
                                    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
                                }}
                            >
                                {labels[href]}
                            </a>
                        )
                    })}
                </div>

                <div className="footer__social">
                    <a href="https://linkedin.com/in/jose-carrizales-b31b71186" target="_blank" rel="noopener noreferrer" className="footer__social-btn" aria-label="LinkedIn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect x="2" y="9" width="4" height="12" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                    </a>
                    <a href="mailto:carrizalesj5@gmail.com" className="footer__social-btn" aria-label="Email">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                    </a>
                    <a href="https://portfolio-2025-navy-eight.vercel.app/" target="_blank" rel="noopener noreferrer" className="footer__social-btn" aria-label="Portfolio">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="2" y1="12" x2="22" y2="12" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                    </a>
                </div>

                <div className="footer__bottom">
                    <div className="footer__divider" />
                    <p className="footer__copy">
                        © {year} José Carrizales · Todos los derechos reservados. Hecho con ❤️ y React.
                    </p>
                </div>
            </div>
        </footer>
    )
}
