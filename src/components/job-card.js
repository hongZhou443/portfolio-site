import './job-card.css';
import React from 'react';

const JobCard = (props) => {

    const jobDescription = props.description.map((description) => {
        return (
            <div className='job-description'>
                <div>{description}</div>
            </div>
        )
    })

    return (
        <div className='job-card-wrapper'>
            <div className='job-card-background'>
                <div className='job-card-background-primary'>
                    <img className='job-card-banner' src={props.banner} />
                </div>
                <div className='job-card-background-secondary'>
                    <img className='job-card-company-icon' src={props.icon}/>
                    <div className='job-card-company'>
                        {props.company}
                    </div>
                </div>
            </div>
            <div className='job-card-content'>
                <div className='job-card-position'>
                    {props.position}
                    <div className='job-card-dates'>
                        {props.date}
                    </div>
                </div>
                
                <div className='job-card-details'>
                    {jobDescription}
                </div>
            </div>
        </div>
    )
}

export default JobCard;