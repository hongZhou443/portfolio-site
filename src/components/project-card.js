import React from 'react';
import { useState } from 'react';

function ProjectCard(props) {

    const [hasHover, setHasHover] = useState(false);
    const gitHubLink = (
        <a className='project-link text thin italic small' href={props.link} target='_blank'>To Github -></a>
    );

    function handleHover(event) {
        setHasHover(true);
    };

    function handleLeaveHover(event) {
        setHasHover(false);
    }

    return (
        <div className='project-wrapper outer'>
            <div className='project-wrapper inner hover' onMouseEnter={handleHover} onMouseLeave={handleLeaveHover}>
                <div className='image-wrapper project'>
                    <img className='image thumbnail' src={ props.image } />
                </div>
                <br />
                <div className='text box narrow body large light'>{ props.title }</div>
                <br />
                <div className='text box narrow body small thin'>{ props.text }</div>

                {hasHover ? gitHubLink : null}

            </div>
        </div>
    );
};

export default ProjectCard;