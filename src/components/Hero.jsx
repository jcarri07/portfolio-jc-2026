import './Hero.css'

export default function Hero() {
    const scrollToSection = (href) => {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="hero" id="hero">
            <div className="container hero__inner">
                <div className="hero__badge fade-in-up">
                    <span className="hero__badge-dot" />
                    Disponible para nuevos proyectos
                </div>

                <h1 className="hero__name fade-in-up">
                    <span>José</span>
                    <span className="gradient-text"> Carrizales</span>
                </h1>

                <div className="hero__titles fade-in-up">
                    <span className="hero__title-badge">Frontend Developer</span>
                    <span className="hero__title-sep">·</span>
                    <span className="hero__title-badge">Mobile Developer</span>
                    <span className="hero__title-sep">·</span>
                    <span className="hero__title-badge">Ingeniero de Sistemas</span>
                </div>

                <p className="hero__desc fade-in-up">
                    Desarrollador dedicado de <strong>React</strong> y <strong>React Native</strong>, impulsado por la pasión de crear
                    experiencias digitales amigables para el usuario. Me especializo en
                    desarrollo front-end y diseño <strong>UI/UX</strong>, utilizando tecnologías modernas
                    para crear soluciones significativas.
                </p>

                <div className="hero__actions fade-in-up">
                    <button
                        className="btn-glow"
                        onClick={() => scrollToSection('#projects')}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="3" width="20" height="14" rx="2" />
                            <path d="M8 21h8M12 17v4" />
                        </svg>
                        Ver Proyectos
                    </button>
                    <button
                        className="btn-outline-glow"
                        onClick={() => scrollToSection('#contact')}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                        Contáctame
                    </button>
                    <a
                        href="https://portfolio-2025-navy-eight.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline-glow"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" /><path d="M12 8v8M8 12l4-4 4 4" />
                        </svg>
                        Portfolio Live
                    </a>
                </div>

                <div className="hero__stats fade-in-up">
                    <div className="hero__stat">
                        <span className="hero__stat-value gradient-text">6+</span>
                        <span className="hero__stat-label">Años de exp.</span>
                    </div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat">
                        <span className="hero__stat-value gradient-text">10+</span>
                        <span className="hero__stat-label">Tecnologías</span>
                    </div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat">
                        <span className="hero__stat-value gradient-text">3</span>
                        <span className="hero__stat-label">Empresas</span>
                    </div>
                </div>

                <div className="hero__scroll-indicator">
                    <span>Scroll</span>
                    <div className="hero__scroll-line" />
                </div>
            </div>
        </section>
    )
}
