import React from 'react';

function Landing() {
    return (
        <div id='landing' className='page-wrapper dark'>
            <div className='content'>
                <div className='panel full'>
                    <div id='intro-message-1' className='text title'>
                        Hi, I'm Hong.
                    </div>

                    <div id='intro-line' className='line light thin margin-wide' />

                    <div id='intro-message-2' className='text'>
                        Let's Talk.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;