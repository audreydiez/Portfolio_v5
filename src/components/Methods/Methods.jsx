import './Methods.scss'
import React from 'react'

const Methods = () => {
    return (
        <>
            <section className="methods" id="methods-mobile">
                <h2 className="methods__h2" id="methods">
                    Méthodes
                </h2>
                <div className="methods__container">
                    <article className="methods__container__card">
                        <h3 className="methods__container__card__h3">1. Etude de vos besoins</h3>
                        <p className="methods__container__card__descr">
                            Au cours d'un échange en visio, par téléphone ou autour d'un café, nous
                            posons les bases de votre projet.
                        </p>
                        <p className="methods__container__card__descr">
                            Etude de faisabilité, design , fonctionnalités et délais de réalisation
                            sont exposés.
                        </p>
                    </article>
                    <article className="methods__container__card">
                        <h3 className="methods__container__card__h3">2. Echanges des documents</h3>
                        <p className="methods__container__card__descr">
                            Vous rassemblez et m'envoyez l'ensemble des documents nécessaire au
                            développement du site ainsi que le cahier des charges.
                        </p>
                        <p className="methods__container__card__descr">
                            Nous signons le devis détaillant les prestations.
                        </p>
                    </article>
                    <article className="methods__container__card">
                        <h3 className="methods__container__card__h3">3. Développement</h3>
                        <p className="methods__container__card__descr">
                            Je réalise le développement selon les délais (sprints) convenus.
                        </p>
                        <p className="methods__container__card__descr">
                            Vous êtes informé de l'avancement du projet et une version de test est
                            déployé dès que possible.
                        </p>
                    </article>
                    <article className="methods__container__card">
                        <h3 className="methods__container__card__h3">
                            4. Validation et déploiement
                        </h3>
                        <p className="methods__container__card__descr">
                            Nous passons en revue l'application et réalisons des tests
                            d'acceptations. Nous corrigeons les éléments nécessaires.
                        </p>
                        <p className="methods__container__card__descr">
                            Une fois le projet validé, nous déployons le site en ligne.
                        </p>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Methods
