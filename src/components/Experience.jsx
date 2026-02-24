import './Experience.css'

const experiences = [
    {
        role: 'Diseñador y Programador React Native',
        company: 'Softico',
        period: 'Junio 2025 – Noviembre 2025',
        type: 'React Native Developer',
        color: 'var(--purple)',
        desc: 'Trabajé como desarrollador Mobile con React Native creando interfaces dinámicas y modernas usando principios de UI/UX, además de desarrollar aplicaciones Web con Vue 3.',
        tags: ['React Native', 'Vue 3', 'UI/UX', 'Mobile'],
    },
    {
        role: 'Desarrollador FrontEnd React Js',
        company: 'Phoinike Logistics C.A.',
        period: 'Febrero 2025 – Junio 2025',
        type: 'Frontend Developer',
        color: 'var(--blue)',
        desc: 'Desarrollo y maquetación de aplicaciones web utilizando React JS, TypeScript y Tailwind CSS, garantizando interfaces responsivas y de alto rendimiento. Implementación de validaciones de formularios robustas mediante Zod.',
        tags: ['React.js', 'TypeScript', 'Tailwind', 'Zod'],
    },
    {
        role: 'COO y Desarrollador Front-end',
        company: 'Travelli App',
        period: 'Diciembre 2022 – Octubre 2024',
        type: 'React Native Developer',
        color: 'var(--pink)',
        desc: 'Fui COO (Director de Operaciones) en Travelli, donde desempeñé un rol multifacético: Desarrollador Front-end especializado en React Native, Diseñador UI/UX, garantizando diseño responsivo y rendimiento óptimo.',
        tags: ['React Native', 'UI/UX', 'COO', 'Product Design'],
    },
]

export default function Experience() {
    return (
        <section className="experience" id="experience">
            <div className="container">
                <div className="experience__header fade-in-up">
                    <span className="section-tag">✦ Experiencia</span>
                    <h2 className="section-title">
                        Trayectoria<br />
                        <span className="gradient-text">profesional</span>
                    </h2>
                    <p className="section-subtitle">
                        Más de 6 años construyendo productos digitales en startups y empresas.
                    </p>
                </div>

                <div className="experience__timeline">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="exp-card card-animated-border fade-in-up"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="card-animated-border-inner exp-card__inner">
                                <div className="exp-card__line" style={{ background: exp.color }} />
                                <div className="exp-card__content">
                                    <div className="exp-card__top">
                                        <div>
                                            <span className="exp-card__type" style={{ color: exp.color }}>
                                                {exp.type}
                                            </span>
                                            <h3 className="exp-card__role">{exp.role}</h3>
                                            <span className="exp-card__company">{exp.company}</span>
                                        </div>
                                        <div className="exp-card__period">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                                <line x1="16" y1="2" x2="16" y2="6" />
                                                <line x1="8" y1="2" x2="8" y2="6" />
                                                <line x1="3" y1="10" x2="21" y2="10" />
                                            </svg>
                                            {exp.period}
                                        </div>
                                    </div>
                                    <p className="exp-card__desc">{exp.desc}</p>
                                    <div className="exp-card__tags">
                                        {exp.tags.map((tag) => (
                                            <span key={tag} className="exp-card__tag" style={{ borderColor: exp.color + '40', color: exp.color }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
