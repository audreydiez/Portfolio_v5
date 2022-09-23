import './Portfolio.scss'
import React, { useState } from 'react'
import { Projects } from 'assets/data/projects.js'
import PortfolioCard from './Card/Card'

const Portfolio = () => {
    const [activedCat, setCat] = useState('all')
    const [filteredProjects, setProjects] = useState(Projects)

    const filterByCategory = (category) => {
        setCat(category)
        setProjects(Projects.filter((project) => project.category.includes(category)))
    }

    return (
        <>
            <section className="portfolio">
                <h2 className="portfolio__h2">Réalisations</h2>

                <div className="portfolio__filters">
                    <button
                        className="portfolio__filters__filter"
                        onClick={() => filterByCategory('all')}>
                        <span
                            className={`portfolio__filters__filter__inner ${
                                activedCat === 'all' ? 'active' : ''
                            }`}>
                            Tous les projets
                        </span>
                    </button>
                    <button
                        className="portfolio__filters__filter"
                        onClick={() => filterByCategory('website')}>
                        <span
                            className={`portfolio__filters__filter__inner ${
                                activedCat === 'website' ? 'active' : ''
                            }`}>
                            Sites internet
                        </span>
                    </button>
                    <button
                        className="portfolio__filters__filter"
                        onClick={() => filterByCategory('webapp')}>
                        <span
                            className={`portfolio__filters__filter__inner ${
                                activedCat === 'webapp' ? 'active' : ''
                            }`}>
                            Applications
                        </span>
                    </button>
                    <button
                        className="portfolio__filters__filter"
                        onClick={() => filterByCategory('design')}>
                        <span
                            className={`portfolio__filters__filter__inner ${
                                activedCat === 'design' ? 'active' : ''
                            }`}>
                            Design & Vidéos
                        </span>
                    </button>
                </div>
            </section>
            <PortfolioCard projects={filteredProjects} />
        </>
    )
}

export default Portfolio
