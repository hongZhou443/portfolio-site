import React from 'react';

import HongIcon from '../images/hong.JPG';
import locationIcon from '../icons/location_icon.png';

function About() {
    return (
        <div id='about-me' className='page-wrapper'>
            <div className='content-wrapper horizontal-reverse align-start'>

                <div className='panel sized'>
                    <div className='content container'>
                        <div id='about-portrait' className='image'>
                            <img className='image portrait' src={HongIcon} />
                        </div>
                    </div>
                </div>

                <div className='panel sized'>
                    <div className='content'>
                        <div className='text title'>
                            Nice to meet you.
                        </div>

                        <div className='line thin margin-wide' />

                        <div className='text regular box body thin'>
                            I am an engineering student at Northwestern University studying Computer Science. I am interested in software development, as well as the role of technology in finance.
                        </div>

                        <br/>

                        <div className='text regular box body thin'>
                            <div className='image'>
                                <img className='image icon' src={locationIcon} />
                            </div>
                            Evanston, Illinois
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;