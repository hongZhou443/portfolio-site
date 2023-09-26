import React from 'react';

import ProjectCard from './project-card';

import AAPL_Image from '../images/AAPL_proj.jpg';
import CHILE_Image from '../images/chile_proj.jpg';
import Almanac_Image from '../images/almanac_proj.jpg';
import CALC_Image from '../images/ios_calc_proj.jpg';

function Projects() {
    const projects = ['aapl_proj', 'chile_proj', 'almanac_proj', 'calc_proj'];
    const project_titles = { 'aapl_proj': 'AAPL Stock Model', 'chile_proj': 'CHILE Data Analysis', 'almanac_proj': 'Almanac.io', 'calc_proj': 'IOS Calculator Clone' };
    const project_images = { 'aapl_proj': AAPL_Image, 'chile_proj': CHILE_Image, 'almanac_proj': Almanac_Image, 'calc_proj': CALC_Image };
    const project_texts = {
        'aapl_proj': 'Long Short Term Memory (LSTM) stock prediction ML model with PyTorch library for modeling, yahoo.fin for data collection, and matplotlib for visualization.',
        'chile_proj': 'Designed and implemented python webscraping algorithm to gather data on 180,000+ job postings with Google Cloud. Migrated to run locally with Smart Proxy API. Created parallelized python script that parsed 65 html files per second.',
        'almanac_proj': 'A web based options trading io game. Uses React for frontend, Node.js and Socket.io for backend, and HarperDB for database support.',
        'calc_proj': 'A IOS Calculator Clone web app to handle basic, percent, sign, and clear operations. Bootstrapped with create-react-app.'
    };

    const project_links = {
        'aapl_proj': 'https://github.com/hongZhou443/AAPL_Stock_Model',
        'chile_proj': 'https://github.com/hongZhou443/Chile2022',
        'almanac_proj': 'https://github.com/northwesternfintech/Almanac',
        'calc_proj': 'https://github.com/hongZhou443/ios-calculator-react'
    };

    const project_list = projects.map((project) => (
        <ProjectCard image={project_images[project]} title={project_titles[project]} text={project_texts[project]} link={project_links[project]}/>
    ));

    return (
        <div id='projects' className='page-wrapper'>
            <div className='content'>
                <div className='panel full fit-content'>
                    <br /> <br />
                    <div className='text title'>
                        Here's what I do.
                    </div>
                    <div className='line thin margin-wide' />

                    <div className='content row'>

                        {project_list}

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Projects;