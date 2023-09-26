import React from 'react';

import SkillIcon from '../components/skill-icon';

import react_img from '../images/reactjs.png';
import javascript_img from '../images/javascript.png';
import html_img from '../images/html.png';
import css_img from '../images/css.png';
import python_img from '../images/python.png';
import cpp_img from '../images/cpp.png';
import java_img from '../images/java.png';
import assembly_img from '../images/assembly.png';
import github_img from '../images/github.png';
import gitlab_img from '../images/gitlab.png';
import socketio_img from '../images/socketio.png';
import gcp_img from '../images/gcp.png';
import harperdb_img from '../images/harperdb.png';
import influxdb_img from '../images/influxdb.png';
import matlab_img from '../images/matlab.png';
import minitab_img from '../images/minitab.png';
import nodejs_img from '../images/nodejs.png';

function Skills() {

    const frontend = ['React.js', 'Javascript', 'HTML', 'CSS'];
    const backend = ['Socket.io', 'Python', 'C/C++', 'Java'];
    const frameworks = ['Gitlab', 'Github', 'Nodejs', 'Google Cloud Platforms'];
    const technologies = ['InfluxDB', 'HarperDB', 'Matlab', 'Minitab'];

    const skill_images = {
        'React.js': react_img, 'Javascript': javascript_img, 'HTML': html_img, 'CSS': css_img,
        'Python': python_img, 'C/C++': cpp_img, 'Java': java_img, 'InfluxDB': influxdb_img,
        'Github': github_img, 'Socket.io': socketio_img, 'Google Cloud Platforms': gcp_img, 'HarperDB': harperdb_img,
        'Matlab': matlab_img, 'Minitab': minitab_img, 'Gitlab' : gitlab_img, 'Nodejs' : nodejs_img
    };

    const frontend_list = frontend.map((skill) => (
        <SkillIcon image={skill_images[skill]} text={skill} />
    ));

    const backend_list = backend.map((skill) => (
        <SkillIcon image={skill_images[skill]} text={skill} />
    ));

    const frameworks_list = frameworks.map((skill) => (
        <SkillIcon image={skill_images[skill]} text={skill} />
    ));

    const technologies_list = technologies.map((skill) => (
        <SkillIcon image={skill_images[skill]} text={skill} />
    ));

    return (
        <div id='skills' className='page-wrapper short'>
            <div className='content'>
                <div className='panel full fit-content'>
                    <br /> <br />
                    <div className='text title'>
                        What I work with.
                    </div>
                    <div className='line thin margin-wide' />

                    <div className='content row top'>

                        <div className='content box col align-start'>
                            <br /> <br />
                            <div className='text narrow large light'>
                                Frontend
                            </div>
                            <div className='line thin margin-wide' />

                            <div className='content'>
                                {frontend_list}
                            </div>
                        </div>

                        <div className='content box col align-start'>
                            <br /> <br />
                            <div className='text narrow large light'>
                                Backend
                            </div>
                            <div className='line thin margin-wide' />

                            <div className='content'>
                                {backend_list}
                            </div>
                        </div>

                        <div className='content box col align-start'>
                            <br /> <br />
                            <div className='text narrow large light'>
                                Frameworks
                            </div>
                            <div className='line thin margin-wide' />

                            <div className='content'>
                                {frameworks_list}
                            </div>
                        </div>

                        <div className='content box col align-start'>
                            <br /> <br />
                            <div className='text narrow large light'>
                                Technologies
                            </div>
                            <div className='line thin margin-wide' />

                            <div className='content'>
                                {technologies_list}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Skills;