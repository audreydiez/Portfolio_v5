import React from 'react'
import './Presentation.scss'
import Photo from 'assets/images/_tofo.png'

const Presentation = () => {
    return (
        <section className="presentation">
            <div className="presentation__bloc">
                <div className="presentation__bloc__img">
                    <div className="presentation__bloc__img__circle">
                        <img src={Photo} alt="" />
                    </div>
                </div>
                <div className="presentation__bloc__text">
                    <div className="above">Développeuse VueJS, React & Wordpress</div>
                    <p className="above">Montpellier - Nîmes</p>
                    <h1 className="sub-title">
                        <span className="name">Audrey Diez</span>
                        <br />
                        <span className="web">
                            Création d'applications <br />
                            et de sites internet
                        </span>
                        <span className="small">Mentor & formatrice</span>
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default Presentation
