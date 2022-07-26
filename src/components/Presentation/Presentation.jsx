
import React from 'react'
import './Presentation.scss'
import { ReactComponent as Logo } from 'assets/images/logo_gradient.svg'

const Presentation = () => {
   
   
    return (
      <section className="presentation">
        <div className="presentation__bloc">
          <h1>Audrey Diez</h1>
          <p>Développeuse web VueJS, React & Wordpress</p>        
          <p>Conceptrice UX/UI</p>
          <p>Mentor & formateur</p>
          <br />
          <p className='italic'>Montpellier - Nîmes</p>
        </div>
        <div className="presentation__img">
          <Logo className="presentation__img__logo" />
        </div>
      </section>
    )
}
  
export default Presentation 