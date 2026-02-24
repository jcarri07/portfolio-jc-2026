import './Projects.css'
import warehouseImg from '../assets/warehouse.png'
import sliceImg from '../assets/slice-dice.png'
import travelliImg from '../assets/travelli.png'

const projects = [
    {
        title: 'Travelli App',
        subtitle: 'Explora Venezuela con IA',
        desc: 'Aplicación de viajes moderna diseñada para descubrir lo mejor de Venezuela. Impulsada por Inteligencia Artificial para ofrecer recomendaciones personalizadas y rutas inteligentes.',
        tags: ['Vite', 'React', 'Tailwind CSS', 'AI'],
        image: travelliImg,
        link: 'https://travelli-web.vercel.app/',
        color: '#ff6b00',
        type: 'Web App',
        emoji: '✈️',
        fullWidth: true,
    },
    {
        title: 'Warehouse',
        subtitle: 'Sistema de Control de Inventario con IA',
        desc: 'Aplicación móvil inteligente de gestión de inventario con insights potenciados por IA. Dashboard con Bento Grid, escáner de ítems con cámara, predicciones de demanda, y gestión de SKUs en tiempo real.',
        tags: ['React Native', 'Expo', 'AI Insights', 'TypeScript', 'Mobile'],
        image: warehouseImg,
        color: 'var(--purple)',
        type: 'Mobile App',
        emoji: '📦',
    },
    {
        title: 'Slice & Dice',
        subtitle: 'App de Pedidos de Comida',
        desc: 'Aplicación móvil de restaurante con diseño moderno e intuitivo. Menú categorizado (Pizzas, Bebidas, Postres), carrito de compras, categorías interactivas y experiencia de usuario fluida con React Native.',
        tags: ['React Native', 'Mobile', 'UI/UX', 'Food App'],
        image: sliceImg,
        color: 'var(--blue)',
        type: 'Mobile App',
        emoji: '🍕',
    },
]

export default function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="container">
                <div className="projects__header fade-in-up">
                    <span className="section-tag">✦ Proyectos</span>
                    <h2 className="section-title">
                        Proyectos<br />
                        <span className="gradient-text">destacados</span>
                    </h2>
                    <p className="section-subtitle">
                        Aplicaciones reales desarrolladas con pasión, diseño cuidadoso y tecnología moderna.
                    </p>
                </div>

                <div className="projects__grid">
                    {projects.map((proj, i) => {
                        const CardContent = (
                            <div className="card-animated-border-inner proj-card__inner">
                                <div className="proj-card__img-wrap" style={{ '--proj-color': proj.color }}>
                                    <div className="proj-card__img-bg" />
                                    <img
                                        src={proj.image}
                                        alt={`${proj.title} app screenshot`}
                                        className="proj-card__img"
                                    />
                                    <div className="proj-card__type-badge" style={{ color: proj.color, borderColor: proj.color + '40' }}>
                                        {proj.emoji} {proj.type}
                                    </div>
                                </div>
                                <div className="proj-card__content">
                                    <h3 className="proj-card__title">{proj.title}</h3>
                                    <p className="proj-card__subtitle" style={{ color: proj.color }}>{proj.subtitle}</p>
                                    <p className="proj-card__desc">{proj.desc}</p>
                                    <div className="proj-card__tags">
                                        {proj.tags.map((tag) => (
                                            <span key={tag} className="proj-card__tag" style={{ borderColor: proj.color + '40', color: proj.color }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    {proj.link && (
                                        <div
                                            className="proj-card__link-btn"
                                            style={{ '--proj-color': proj.color }}
                                        >
                                            Visitar Sitio
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );

                        return (
                            <div
                                key={proj.title}
                                className={`proj-card card-animated-border fade-in-up ${proj.fullWidth ? 'proj-card--full' : ''} ${proj.link ? 'proj-card--linked' : ''}`}
                                style={{ animationDelay: `${i * 0.15}s` }}
                            >
                                {proj.link ? (
                                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="proj-card__wrapper">
                                        {CardContent}
                                    </a>
                                ) : (
                                    CardContent
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
