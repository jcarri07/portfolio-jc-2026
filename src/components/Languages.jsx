import './Languages.css'

const languages = [
    {
        name: 'Español',
        level: 'Nativo',
        proficiency: 100,
        flag: '🇻🇪',
        color: 'var(--blue)',
    },
    {
        name: 'Inglés',
        level: 'Nivel A2',
        proficiency: 30,
        flag: '🇺🇸',
        color: 'var(--purple)',
    },
]

export default function Languages() {
    return (
        <section className="languages" id="languages">
            <div className="container">
                <div className="languages__header fade-in-up">
                    <span className="section-tag">✦ Idiomas</span>
                    <h2 className="section-title">
                        <span className="gradient-text">Idiomas</span>
                    </h2>
                </div>

                <div className="languages__cards">
                    {languages.map((lang, i) => (
                        <div key={lang.name} className="lang-card card fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                            <div className="lang-card__top">
                                <span className="lang-card__flag">{lang.flag}</span>
                                <div>
                                    <h3 className="lang-card__name">{lang.name}</h3>
                                    <span className="lang-card__level" style={{ color: lang.color }}>{lang.level}</span>
                                </div>
                            </div>
                            <div className="lang-card__bar-bg">
                                <div
                                    className="lang-card__bar-fill"
                                    style={{ '--fill': `${lang.proficiency}%`, background: `linear-gradient(90deg, ${lang.color}, var(--pink))` }}
                                />
                            </div>
                            <span className="lang-card__pct">{lang.proficiency}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
