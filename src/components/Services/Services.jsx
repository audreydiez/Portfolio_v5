import './Services.scss'
import React from 'react'
import { ReactComponent as Dev } from 'assets/images/dev.svg'
import { ReactComponent as Formation } from 'assets/images/formation.svg'
import { ReactComponent as Web } from 'assets/images/web.svg'
import { ReactComponent as Wordpress } from 'assets/images/wordpress.svg'
import { ReactComponent as Device } from 'assets/images/device.svg'
import { ReactComponent as Seo } from 'assets/images/seo.svg'

const Services = () => {
    return (
        <>
            <section className="services" id="services-mobile">
                <h2 className="services__h2">Services</h2>
                <p className="services__p" id="services">
                    Spécialiste en développement web et SEO, pour particuliers et professionnels.{' '}
                </p>
                <p className="services__p">
                    Création d'expériences utilisateurs (in-store concepts, guide d'achat produits)
                    et d'applications métiers multi canaux.
                </p>
                <div className="services__container">
                    <article className="services__container__card">
                        <Device className="services__container__card__icon" />
                        <h3 className="services__container__card__h3">Sites internet</h3>
                        <p className="services__container__card__descr">
                            Refonte ou création de votre site web, conception d'identité visuelle,
                            sites évolutifs et hébergement dédié ou mutualisé avec nom de domaine.
                        </p>
                    </article>
                    <article className="services__container__card">
                        <Web className="services__container__card__icon" />
                        <h3 className="services__container__card__h3">
                            Applications web & mobiles
                        </h3>
                        <p className="services__container__card__descr">
                            Création d'applications métiers dédiées à votre activité, particulier ou
                            professionnel, web et mobiles. <br />
                            Expériences de ventes, guide de choix et d'achat produits.
                        </p>
                    </article>
                    <article className="services__container__card">
                        <Wordpress className="services__container__card__icon" />
                        <h3 className="services__container__card__h3">Blogs Wordpress</h3>
                        <p className="services__container__card__descr">
                            Installation de thèmes ou création complète, mise à jour, ajout de
                            fonctionnalités & personalisation complète du blog selon les besoins.
                        </p>
                    </article>
                    <article className="services__container__card">
                        <Seo className="services__container__card__icon" />
                        <h3 className="services__container__card__h3">SEO</h3>
                        <p className="services__container__card__descr">
                            Optimisation de la visibilité de votre site sur les moteurs de
                            recherche, amélioration des performances, monitoring et rapports de
                            visites.
                        </p>
                    </article>
                    <article className="services__container__card">
                        <Dev className="services__container__card__icon" />
                        <h3 className="services__container__card__h3">Rédaction Web</h3>
                        <p className="services__container__card__descr">
                            Rédaction web de fiches produits, services, articles de blogs &
                            publications sur les réseaux sociaux. <br />
                            Français et anglais.
                        </p>
                    </article>
                    <article className="services__container__card">
                        <Formation className="services__container__card__icon" />
                        <h3 className="services__container__card__h3">Mentorat & formation</h3>
                        <p className="services__container__card__descr">
                            Mentorat & cours lors de vos parcours et vos formations professionnelles
                            pour vous aider à atteindre vos objectifs d'apprentissage ou de
                            reconversion.
                        </p>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Services
