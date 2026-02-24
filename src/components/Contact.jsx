import './Contact.css'

const contacts = [
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        ),
        label: 'Email',
        value: 'carrizalesj5@gmail.com',
        href: 'mailto:carrizalesj5@gmail.com',
        color: 'var(--blue)',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.93 12.37a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.86 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
        label: 'Teléfono',
        value: '+58-414-4001564',
        href: 'tel:+584144001564',
        color: 'var(--purple)',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
            </svg>
        ),
        label: 'LinkedIn',
        value: 'jose-carrizales-b31b71186',
        href: 'https://www.linkedin.com/in/jos%C3%A9-carrizales-b31b71186/',
        color: 'var(--cyan)',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        ),
        label: 'Portfolio',
        value: 'portfolio-2025-navy-eight.vercel.app',
        href: 'https://portfolio-2025-navy-eight.vercel.app/',
        color: 'var(--pink)',
    },
]

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="contact__header fade-in-up">
                    <span className="section-tag">✦ Contacto</span>
                    <h2 className="section-title">
                        ¿Hablamos?
                        <span className="gradient-text"> Contáctame</span>
                    </h2>
                    <p className="section-subtitle">
                        Estoy disponible para proyectos freelance, oportunidades de trabajo o simplemente para una conversación sobre tecnología.
                    </p>
                </div>

                <div className="contact__grid">
                    {contacts.map((item, i) => (
                        <a
                            key={item.label}
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="contact-card card fade-in-up"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            <div className="contact-card__icon" style={{ color: item.color, background: `${item.color}18`, borderColor: `${item.color}30` }}>
                                {item.icon}
                            </div>
                            <div className="contact-card__info">
                                <span className="contact-card__label" style={{ color: item.color }}>{item.label}</span>
                                <span className="contact-card__value">{item.value}</span>
                            </div>
                            <svg className="contact-card__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12,5 19,12 12,19" />
                            </svg>
                        </a>
                    ))}
                </div>

                <div className="contact__cta fade-in-up">
                    <a href="mailto:carrizalesj5@gmail.com" className="btn-glow contact__cta-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                        Enviarme un email
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jos%C3%A9-carrizales-b31b71186/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline-glow contact__cta-btn"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect x="2" y="9" width="4" height="12" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                        Conectar en LinkedIn
                    </a>
                </div>
            </div>
        </section>
    )
}
