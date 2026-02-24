import './Skills.css'

const skillGroups = [
    {
        category: 'Frontend',
        icon: '🌐',
        skills: [
            'React.js',
            'TypeScript',
            'JavaScript',
            'HTML / CSS',
            'Tailwind CSS',
            'Bootstrap',
        ],
    },
    {
        category: 'Mobile',
        icon: '📱',
        skills: [
            'React Native',
            'UI/UX Design',
            'Vue 3',
        ],
    },
    {
        category: 'Backend & Tools',
        icon: '⚙️',
        skills: [
            'PHP',
            'Git / GitHub',
            'Zod',
            'REST APIs',
        ],
    },
]

const techBadges = [
    'React.js', 'React Native', 'TypeScript', 'JavaScript',
    'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'PHP', 'Vue 3',
    'Git', 'Figma', 'Zod', 'Vite', 'Expo',
]

export default function Skills() {
    return (
        <section className="skills" id="skills">
            <div className="container">
                <div className="skills__header fade-in-up">
                    <span className="section-tag">✦ Habilidades</span>
                    <h2 className="section-title">
                        Mi stack<br />
                        <span className="gradient-text">tecnológico</span>
                    </h2>
                    <p className="section-subtitle">
                        Tecnologías con las que trabajo a diario para crear experiencias web y mobile de alto rendimiento.
                    </p>
                </div>

                <div className="skills__badges-wrap fade-in-up">
                    {techBadges.map((tech) => (
                        <div key={tech} className="skill-badge">
                            {tech}
                        </div>
                    ))}
                </div>

                <div className="skills__groups">
                    {skillGroups.map((group, i) => (
                        <div key={group.category} className="skills__group card fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                            <div className="skills__group-header">
                                <span className="skills__group-icon">{group.icon}</span>
                                <h3 className="skills__group-name">{group.category}</h3>
                            </div>
                            <div className="skills__list">
                                {group.skills.map((skill) => (
                                    <span key={skill} className="skill-item">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
