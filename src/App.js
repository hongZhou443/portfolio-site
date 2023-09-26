import { React, useState, useEffect } from 'react';

import './App.css';

import PopUp from './components/pop-up';

import Header from './components/portfolio-header';
import Landing from './components/landing';
import About from './components/about';
import Education from './components/education';
import Employment from './components/employment';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';

import Menu from './components/menu';

function App() {

  const [showMenu, setShowMenu] = useState(false);
  const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
      if (window.innerWidth >= 900) {
        setShowMenu(false);
      }
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function handleMenuClick() {
    setShowMenu(!showMenu);
  };

  const menu = (<Menu />);
  return (
    <div className="App">

      <Header onClick={handleMenuClick} />
      {showMenu ? menu : null}
      <Landing />
      <About />
      <Education />
      <Employment />
      <Projects />
      <Skills />
      <Contact />

      <div id='footer' />

    </div>
  );
}

export default App;
