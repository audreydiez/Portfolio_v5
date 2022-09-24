import './App.scss'
import React, { useState } from 'react'
import Navbar from 'components/Navbar/Navbar'
import Presentation from 'components/Presentation/Presentation'
//import Bubbles from 'components/Bubbles/Bubbles'
import ThemeContext from 'layout/themeContext'
import Services from 'components/Services/Services'
import Methods from 'components/Methods/Methods'
import Portfolio from 'components/Portfolio/Portfolio'
import Contact from 'components/Contact/Contact'

function App() {
    const [themeLight, setThemeLight] = useState(false)

    return (
        <ThemeContext.Provider value={{ themeLight, setThemeLight }}>
            {/* <div> theme is {`${themeLight ? '' : 'not'} themeLight`} </div> */}
            <div id="birds" className="birds">
                {/* <Bubbles /> */}
            </div>
            <div className="wrapper">
                <Navbar></Navbar>
                <Presentation></Presentation>
                <Services />
                <Methods />
                <Portfolio />
                <Contact />
            </div>
        </ThemeContext.Provider>
    )
}

export default App
