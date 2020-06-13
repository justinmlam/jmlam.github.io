import React from 'react';

import '../scss/main.scss';

class ProjectStack extends React.Component {
    render() {
        return (
            <div className="project-stack">
                {this.props.stack.map((skill, index) => {
                    return <span className="project-skill">skill</span>
                })}
            </div>
        )
    }
}

class ProjectLinks extends React.Component {
    render() {
        const { src, live } = this.props.links;

        return (
            <div className="project-links">

            </div>
        )
    }
}

class ProjectCard extends React.Component {
    render() {
        const { title, description, stack, image, links } = this.props;

        return (
            <div className="project-card">
                {title}
            </div>
        );
    }
};

class Projects extends React.Component {
    render() {
        const { projects } = this.props;



        return (
            <div>
                <div id="projects" class="projects-section">
                    <div class="projects-title">
                        <h1>PROJECTS</h1>
                        <hr></hr>
                    </div>
                    <div class="projects-body">
                        {projects.map(project => (
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                stack={project.stack}
                                image={project.image}
                                links={project.links}
                                key={project.title}
                                />
                        ))}
                        [wip]
                        <br />
                        <br />
                        personal
                        <ul>
                            <li><a href="https://github.com/justinmlam/used-car-price-predictor">used car price predictor [wip]</a><span class="stay-right">machine learning / dev</span></li>
                            <li><a href="https://github.com/justinmlam/foodcouver">foodcouver</a><span class="stay-right">exploratory data analysis</span></li>
                            <li><a href="https://github.com/justinmlam/league-of-legends-match-eda">league of legends data analysis</a><span class="stay-right">exploratory data analysis</span></li>
                            <li><a href="https://github.com/justinmlam/notetaker-django">notetaker django app</a><span class="stay-right">web dev</span></li>
                        </ul>
                        <br />
                        <br />
                        udacity projects
                        <ul>
                            <li><a href="https://github.com/justinmlam/dermatologist-ai">dermatologist ai</a><span class="stay-right">machine learning</span></li>
                            <li><a href="https://github.com/justinmlam/tv_script_generator">tv script generator</a><span class="stay-right">machine learning</span></li>
                            <li><a href="https://github.com/justinmlam/GAN_face_generator">face generator</a><span class="stay-right">machine learning</span></li>
                            <li><a href="https://github.com/justinmlam/dog_classifier">dog classifier</a><span class="stay-right">machine learning</span></li>
                            <li><a href="https://github.com/justinmlam/bike_sharing_predictions">bike sharing predictions</a><span class="stay-right">machine learning</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;