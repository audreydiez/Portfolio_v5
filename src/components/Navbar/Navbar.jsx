import './Navbar.scss'
import React from 'react'
import { ReactComponent as Logo } from 'assets/images/logo.svg'
import { ReactComponent as Logo2 } from 'assets/images/logo_gradient.svg'
import Darkmode from 'components/Darkmode/Darkmode'

const Navbar = () => {
    const [burgerAnime, setBurgerAnime] = React.useState('')

    return (
        <>
            <div className="navbar">
                <div className="navbar__logo ">
                    <Logo2 className="navbar__logo__ad svg-ad" />
                </div>
                <ul className="navbar__links">
                    <li className="navbar__links__list">
                        <a className="a-navbar a-navbar-effect" href="#works">
                            Services
                        </a>
                    </li>
                    <li className="navbar__links__list">
                        <a className="a-navbar a-navbar-effect" href="#works">
                            Méthodes
                        </a>
                    </li>
                    <li className="navbar__links__list">
                        <a className="a-navbar a-navbar-effect" href="#about">
                            Réalisations
                        </a>
                    </li>
                    {/* <li className="navbar__links__list">
                        <a className="a-navbar a-navbar-effect" href="#contact">
                            Blog
                        </a>
                    </li> */}
                    <li className="navbar__links__list">
                        <a className="a-navbar a-navbar-effect" href="#contact">
                            Contact
                        </a>
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
                        <a
                            href="#works"
                            className="navbar__mobile__inner__list__gradient a-navbar a-navbar-effect">
                            Services
                        </a>
                    </li>
                    <li className="navbar__mobile__inner__list">
                        <a
                            href="#works"
                            className="navbar__mobile__inner__list__gradient a-navbar a-navbar-effect">
                            Méthodes
                        </a>
                    </li>
                    <li className="navbar__mobile__inner__list">
                        <a
                            href="#about"
                            className="navbar__mobile__inner__list__gradient a-navbar a-navbar-effect">
                            Réalisations
                        </a>
                    </li>
                    <li className="navbar__mobile__inner__list">
                        <a
                            href="#works"
                            className="navbar__mobile__inner__list__gradient a-navbar a-navbar-effect">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
