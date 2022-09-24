import './Card.scss'
import React from 'react'

const PortfolioCard = (props) => {
    return (
        <>
            <section className="portfolio-card">
                {props.projects.map((project, key) => (
                    <article className="portfolio-card__container" key={key}>
                        <div className="portfolio-card__container__img">
                            <img src={project.thumbnail} alt={project.name} />
                        </div>
                        <h3 className="portfolio-card__container__title">
                            {project.title01} {project.title02}
                        </h3>
                        <p className="portfolio-card__container__descr">{project.name}</p>
                    </article>
                ))}
            </section>
        </>
    )
}

export default PortfolioCard
