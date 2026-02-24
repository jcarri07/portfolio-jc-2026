import './About.css'
import profileImg from '../assets/profile.jpg'

export default function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about__grid">
                    <div className="about__content">
                        <span className="section-tag">✦ Sobre mí</span>
                        <h2 className="section-title">
                            Pasión por crear<br />
                            <span className="gradient-text">experiencias digitales</span>
                        </h2>
                        <p className="about__text">
                            Soy un <strong>Ingeniero de Sistemas</strong> graduado de la UNEFA (2019), especializado en
                            desarrollo <strong>Frontend</strong> y <strong>Mobile</strong>. Me impulsa la pasión de transformar
                            ideas en interfaces hermosas, funcionales y accesibles.
                        </p>
                        <p className="about__text">
                            Me especializo en <strong>React.js</strong> y <strong>React Native</strong>, con experiencia
                            en diseño UI/UX, garantizando siempre el mejor rendimiento y la mejor experiencia
                            de usuario en cada proyecto.
                        </p>

                        <div className="about__highlights">
                            <div className="about__highlight-item fade-in-up">
                                <div className="about__highlight-icon">🎯</div>
                                <div>
                                    <strong>Frontend Excellence</strong>
                                    <p>React.js, TypeScript, Tailwind</p>
                                </div>
                            </div>
                            <div className="about__highlight-item fade-in-up">
                                <div className="about__highlight-icon">📱</div>
                                <div>
                                    <strong>Mobile Development</strong>
                                    <p>React Native, UI/UX Design</p>
                                </div>
                            </div>
                            <div className="about__highlight-item fade-in-up">
                                <div className="about__highlight-icon">⚡</div>
                                <div>
                                    <strong>Alta Performance</strong>
                                    <p>Optimización y responsive design</p>
                                </div>
                            </div>
                        </div>

                        <div className="about__links fade-in-up">
                            <a
                                href="https://www.linkedin.com/in/jos%C3%A9-carrizales-b31b71186/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-glow"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect x="2" y="9" width="4" height="12" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                                LinkedIn
                            </a>
                            <a
                                href="https://portfolio-2025-navy-eight.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline-glow"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15,3 21,3 21,9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                                Portfolio Anterior
                            </a>
                        </div>
                    </div>

                    <div className="about__visual fade-in-up">
                        <div className="about__avatar-wrap">
                            <div className="about__avatar-ring" />
                            <div className="about__avatar">
                                <img src={profileImg} alt="José Carrizales" className="about__avatar-img" />
                            </div>
                            <div className="about__floating-badge about__floating-badge--1">
                                <span>⚛️</span> React Dev
                            </div>
                            <div className="about__floating-badge about__floating-badge--2">
                                <span>📱</span> Mobile
                            </div>
                            <div className="about__floating-badge about__floating-badge--3">
                                <span>🎨</span> UI/UX
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
