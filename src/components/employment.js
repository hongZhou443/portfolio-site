import React from 'react';
import JobCard from './job-card';

import TMobileBanner from '../images/t-mobile-banner.png';
import TMobileIcon from '../images/t-mobile-icon.jpg';

const employmentData = [
    {
        company: 'T-Mobile',
        position: 'Software Engineer Intern',
        date: '06/2023 - 09/2023',
        banner: TMobileBanner,
        icon: TMobileIcon,
        description: [
            'Developed THENA, an internal CRUD web app for efficient management of 30,000 documents in 10 collections.',
            'Created REST API endpoints using FastAPI to manage 25,000+ MongoDB nodes with Gitlab CI/CD.',
            'Engineered an integrated app monitoring system with a node.js library for standardized usage tracking using InfluxDB and a corresponding Grafana dashboard for dynamic visualizations.'
        ]
    }
]

const Employment = () => {

    const jobsList = employmentData.map((entry) => {
        return (
            <JobCard
                company={entry.company}
                position={entry.position}
                date={entry.date}
                banner={entry.banner}
                icon={entry.icon}
                description={entry.description}
            />
        )
    })

    return (
        <div id='employment' className='page-wrapper'>
            <div className='content'>
                <div className='panel full fit-content'>
                    <br /> <br />
                    <div className='text title'>
                        My Experiences
                    </div>
                    <div className='line thin margin-wide' />

                    <div className='content row'>
                        {jobsList}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Employment;