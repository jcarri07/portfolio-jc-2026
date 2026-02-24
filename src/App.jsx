import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Languages from './components/Languages'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackgroundOrbs from './components/BackgroundOrbs'

function App() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1 }
        )

        const elements = document.querySelectorAll('.fade-in-up')
        elements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            <BackgroundOrbs />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Education />
                <Projects />
                <Languages />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
