import './Education.css'

export default function Education() {
    return (
        <section className="education" id="education">
            <div className="container">
                <div className="education__header fade-in-up">
                    <span className="section-tag">✦ Educación</span>
                    <h2 className="section-title">
                        Formación<br />
                        <span className="gradient-text">académica</span>
                    </h2>
                </div>

                <div className="education__card card-animated-border fade-in-up">
                    <div className="card-animated-border-inner education__card-inner">
                        <div className="education__icon-wrap">
                            <span className="education__icon">🎓</span>
                        </div>
                        <div className="education__info">
                            <span className="education__type">Título Universitario</span>
                            <h3 className="education__degree">Ingeniero de Sistemas</h3>
                            <p className="education__university">Universidad Nacional Experimental Politécnica de la Fuerza Armada — UNEFA</p>
                            <div className="education__meta">
                                <span className="education__year">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                    Graduado en 2019
                                </span>
                            </div>
                            <p className="education__desc">
                                Formación integral en ciencias de la computación, redes, ingeniería de software y sistemas de información,
                                que constituye la base de mi expertise como desarrollador Frontend y Mobile.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
