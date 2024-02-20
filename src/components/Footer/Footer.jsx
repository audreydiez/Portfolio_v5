import './Footer.scss'
import React from 'react'
import { ReactComponent as Logo } from 'assets/images/logo_gradient.svg'

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer__col">
                <Logo className="navbar__logo__ad svg-ad" />
            </div>
            <div className="footer__col">
                © 2024 - SIRET 78979458300037 - Depuis 2012{' '}
                <span className="footer__col__heart">&hearts;</span>{' '}
            </div>
        </section>
    )
}

export default Footer
