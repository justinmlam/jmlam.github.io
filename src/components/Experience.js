import React from 'react';

import '../scss/main.scss';


class ExperienceCard extends React.Component {
    render() {
        const { company, role, date, image } = this.props

        return (
            <div className="experience-card">
                <img className="experience-card-image" src={image}></img>
                <div className="experience-card-content">
                    <span className="experience-card-content-company">{company}</span>
                    <article className="experience-card-content-role">{role}</article>
                    <span className="experience-card-conent-date">{date}</span>
                </div>
            </div>
        )
    }
}

class Experience extends React.Component {
    render() {
        const { experience } = this.props

        return (
            <div>
                <div id="experience" class="experience-section">
                    <div class="experience-title">
                        <h1>EXPERIENCE</h1>
                        <hr></hr>
                    </div>
                    <div class="experience-body">
                        {experience.map(exp => (
                            <ExperienceCard
                                company={exp.company}
                                role={exp.role}
                                date={exp.date}
                                image={exp.image}
                                />
                        ))}
                        {/* <ul>
                            <li>convertus digital: quality assurance specialist<span class="stay-right">sep 2019 - apr 2020</span></li>
                            <li>procogia: software development specialist<span class="stay-right">may 2020 - aug 2020</span></li>
                        </ul>
                        <br />
                        <br />
                        <br />
                        <br />
                        does education count as experience?
                        <ul>
                            <li>university of british columbia: bsc in math, chemistry, life science<span class="stay-right">sep 2014 - may 2019</span></li>
                            <li>udacity: deep learning nanodegree<span class="stay-right">jan 2020 - apr 2020</span></li>
                            <li>brainstation: data science<span class="stay-right">jul 2019 - sep 2019</span></li>
                            <li>lighthouse labs: intro to web development<span class="stay-right">jul 2019 - aug 2019</span></li>
                        </ul> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience;