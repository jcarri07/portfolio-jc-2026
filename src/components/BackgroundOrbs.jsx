import './BackgroundOrbs.css'

export default function BackgroundOrbs() {
    return (
        <div className="bg-orbs" aria-hidden="true">
            <div className="orb orb--blue" />
            <div className="orb orb--purple" />
            <div className="orb orb--pink" />
            <div className="orb orb--cyan" />
            <div className="grid-overlay" />
        </div>
    )
}
