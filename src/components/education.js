import React from 'react';

import NUImage from '../images/northwestern.jpg';


function Education() {
    return (
        <div id='education' className='page-wrapper'>

            <div className='content-wrapper horizontal align-start'>

                <div className='panel sized image-panel left thin'>
                    <div className='image-wrapper'>
                        <img className='image' src={NUImage} />
                    </div>
                </div>

                <div className='panel sized wide'>
                    <div className='content'>
                        <div className='text title'>
                            My Education.
                        </div>

                        <div className='line thin margin-wide' />

                        <div className='text regular box wide body thin'>
                            <p>
                                <div className='text body medium'>
                                    Northwestern University
                                </div>
                                <div className='text body regular'>
                                    Bachelor's of Science | Computer Science '24
                                </div>
                            </p>
                            <p><b className='text body regular'>Relevant Coursework: </b>Programming Fundamentals, Mathematical Foundations of CS, Computer Systems, Computer Architecture, Data Structures and Algorithms, Artificial Intelligence, Machine Learning, Optimization, Design of Algorithms</p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Education;