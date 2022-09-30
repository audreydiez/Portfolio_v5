import './Navbar.scss'
import React from 'react'
import { Link } from 'react-scroll'

import { ReactComponent as Logo } from 'assets/images/logo_gradient.svg'
import Darkmode from 'components/Darkmode/Darkmode'

const Navbar = () => {
    const [burgerAnime, setBurgerAnime] = React.useState('')

    return (
        <>
            <div className="navbar">
                <div className="navbar__logo ">
                    <Logo className="navbar__logo__ad svg-ad" />
                </div>
                <ul className="navbar__links">
                    <li className="navbar__links__list">
                        <Link
                            className="a-navbar a-navbar-effect"
                            activeClass="active"
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}>
                            Services
                        </Link>
                    </li>
                    <li className="navbar__links__list">
                        <Link
                            className="a-navbar a-navbar-effect"
                            activeClass="active"
                            to="methods"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}>
                            Méthodes
                        </Link>
                    </li>
                    <li className="navbar__links__list">
                        <Link
                            className="a-navbar a-navbar-effect"
                            activeClass="active"
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}>
                            Réalisations
                        </Link>
                    </li>

                    <li className="navbar__links__list">
                        <Link
                            className="a-navbar a-navbar-effect"
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>
                <Darkmode></Darkmode>
                <div
                    className="navbar__burger"
                    onClick={() =>
                        burgerAnime === ''
                            ? setBurgerAnime('animated')
                            : burgerAnime === 'animated'
                            ? setBurgerAnime('static')
                            : setBurgerAnime('animated')
                    }>
                    <span className={'line ' + burgerAnime}></span>
                    <span className={'line ' + burgerAnime}></span>
                    <span className={'line ' + burgerAnime}></span>
                </div>
            </div>

            <div
                className={
                    'navbar__mobile ' +
                    (burgerAnime === '' ? '' : burgerAnime === 'animated' ? 'opened' : 'closed')
                }>
                <ul className="navbar__mobile__inner">
                    <li className="navbar__mobile__inner__list">
                        <Link
                            className="navbar__mobile__inner__list__gradient a-navbar a-navbar-effect"
                            activeClass="active"
                            to="services-mobile"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            onClick={() => setBurgerAnime('static')}>
                            Services
                        </Link>
                    </li>
                    <li className="navbar__mobile__inner__list">
                        <Link
                            className="navbar__mobile__inner__list__gradient a-navbar a-navbar-effect"
                            activeClass="active"
                            to="methods-mobile"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            onClick={() => setBurgerAnime('static')}>
                            Méthodes
                        </Link>
                    </li>
                    <li className="navbar__mobile__inner__list">
                        <Link
                            className="navbar__mobile__inner__list__gradient a-navbar a-navbar-effect"
                            activeClass="active"
                            to="portfolio-mobile"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            onClick={() => setBurgerAnime('static')}>
                            Réalisations
                        </Link>
                    </li>
                    <li className="navbar__mobile__inner__list">
                        <Link
                            className="navbar__mobile__inner__list__gradient a-navbar a-navbar-effect"
                            activeClass="active"
                            to="contact-mobile"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            onClick={() => setBurgerAnime('static')}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
