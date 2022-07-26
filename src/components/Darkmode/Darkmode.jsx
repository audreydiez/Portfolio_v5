import "./Darkmode.scss";
import { ReactComponent as IconDark } from 'assets/images/moon.svg'
import { ReactComponent as IconLight } from 'assets/images/sun.svg'


const setDark = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

const storedTheme = localStorage.getItem("theme");
console.log(storedTheme);

const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
  storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) { 
  setDark();  
}

const toggleTheme = (e) => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
}; 

const DarkMode = () => {
  return (
    <>
    <div className="toggle-theme-wrapper">      
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={toggleTheme}
          defaultChecked={defaultDark}
        />
        <div className="slider round"></div>
      </label>      
      
    </div>
    {/* <div className="toggle" onClick={toggleTheme}>
        <IconDark className="icon-dark"/>
        <IconLight className="icon-light"/>
    </div> */}
    </>
    
  );
};

export default DarkMode;
