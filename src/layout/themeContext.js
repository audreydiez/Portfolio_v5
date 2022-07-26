import { createContext } from 'react'

const ThemeContext = createContext({
    lightTheme: false,
    setLightTheme: (theme) => {}
})

export default ThemeContext
