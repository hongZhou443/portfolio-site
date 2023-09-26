import React from 'react';

function SkillIcon(props) {
    return (
        <div className='wrapper skill-icon'>
            <div className='image-wrapper skill-icon'>
                <img className='image fit' src={props.image} />
            </div>
            <br />
            <div className='text narrow large light'>
                {props.text}
            </div>
        </div>
    );
}

export default SkillIcon;