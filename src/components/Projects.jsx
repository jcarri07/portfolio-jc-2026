import './Projects.css'
import warehouseImg from '../assets/warehouse.png'
import sliceImg from '../assets/slice-dice.png'

const projects = [
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
                    {projects.map((proj, i) => (
                        <div
                            key={proj.title}
                            className="proj-card card-animated-border fade-in-up"
                            style={{ animationDelay: `${i * 0.15}s` }}
                        >
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
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
