import React from 'react';

function PopUp (props) {
    return (
        <div className='pop-up text small light' style={{opacity : props.opacity}}>
            {props.message}
        </div>
    );
}

export default PopUp;