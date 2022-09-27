import './Network.scss'
import React from 'react'
import { ReactComponent as Linkedin } from 'assets/images//icons/linkedin.svg'
import { ReactComponent as Behance } from 'assets/images//icons/behance.svg'
import { ReactComponent as Git } from 'assets/images//icons/git.svg'

const Network = () => {
    return (
        <section className="network">
            <div className="network__container">
                <a
                    href="https://www.linkedin.com/in/audrey-diez-5862345b/"
                    rel="noopener noreferrer"
                    target="_blank">
                    <Linkedin className="icon" />
                </a>
                <a
                    href="https://www.behance.net/audreydiez736c"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Behance className="icon" />
                </a>
                <a href="https://github.com/audreydiez" target="_blank" rel="noopener noreferrer">
                    <Git className="icon" />
                </a>
            </div>
            <p className="network__p">Également disponible sur</p>
            <a
                href="https://www.malt.fr/profile/audreydiez"
                target="_blank"
                rel="noopener noreferrer"
                className="link">
                Malt
            </a>
        </section>
    )
}

export default Network
