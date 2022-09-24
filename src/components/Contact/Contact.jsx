import './Contact.scss'
import React from 'react'
import { ReactComponent as Linkedin } from 'assets/images//icons/linkedin.svg'
import { ReactComponent as Behance } from 'assets/images//icons/behance.svg'
import { ReactComponent as Git } from 'assets/images//icons/git.svg'

const Contact = () => {
    return (
        <>
            <section className="contact">
                <h2 className="contact__h2">Contact</h2>
                <div className="contact__container">
                    <article className="contact__container__card">
                        <h3 className="contact__container__card__title">Sur les réseaux</h3>
                        <div className="contact__container__card__descr social">
                            <Linkedin className="icon" />
                            <Behance className="icon" />
                            <Git className="icon" />
                        </div>
                    </article>
                    <article className="contact__container__card">
                        <h3 className="contact__container__card">Par email</h3>
                        <a
                            href="mailto:audrey.diez@gmail.com"
                            className="contact__container__card__descr">
                            audrey.diez@gmail.com
                        </a>
                    </article>
                    <article className="contact__container__card">
                        <h3 className="contact__container__card">Un café ?</h3>
                        <p className="contact__container__card__descr">
                            Rencontrons nous sur Montpellier, Nîmes <br />
                            ou à mi-chemin !
                        </p>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Contact
