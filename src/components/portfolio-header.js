import { React, useState, useEffect } from 'react';
import Logo from '../images/logo.png';


function Header(props) {

    const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const menu = (
        <div id='header-menu' onClick={props.onClick}>
            <div className='bar' />
            <div className='bar' />
            <div className='bar' />
        </div>
    );

    const linkedIn = (
        <a id='header-linkedIn-link' className='link-box border header' href='https://www.linkedin.com/in/hong-zhou-2a0927168/' target='_blank'>
            <div>LinkedIn</div>
        </a>
    );

    const github = (
        <a id='header-github-link' className='link-box header' href='https://github.com/hongZhou443' target='_blank'>
            <div>Github</div>
        </a>
    );

    return (
        <div id='portfolio-header'>
            <div id='header-logo' className='image-wrapper icon'>
                <img className='image fit' src={Logo} />
            </div>

            {windowSize[0] < 900 ? menu : null}

            {windowSize[0] >= 900 ? linkedIn : null}

            {windowSize[0] >= 900 ? github : null}

        </div>
    );
}

export default Header;