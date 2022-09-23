import './Card.scss'
import React from 'react'

const PortfolioCard = (props) => {
    return (
        <>
            <section className="portfolio-card">
                {props.projects.map((project, key) => (
                    <div className="portfolio-card__card" key={key}>
                        {project.name}
                    </div>
                ))}
            </section>
        </>
    )
}

export default PortfolioCard
