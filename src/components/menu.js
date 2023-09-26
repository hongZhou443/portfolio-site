import React from 'react';


function Menu() {
    const linkedIn = (
        <a className='link-box border' href='https://www.linkedin.com/in/hong-zhou-2a0927168/' target='_blank'>
            <div>LinkedIn</div>
        </a>
    );

    const github = (
        <a className='link-box' href='https://github.com/hongZhou443' target='_blank'>
            <div>Github</div>
        </a>
    );

    return (
        <div id='menu' className='page-wrapper transparent'>
            <div className='content'>
                <div className='panel full'>
                    {linkedIn}
                    <div className='line light thin margin' />
                    {github}
                </div>
            </div>
        </div>
    );
}

export default Menu;