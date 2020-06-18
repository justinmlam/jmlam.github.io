import React from 'react';

import '../scss/main.scss';

class ProjectStack extends React.Component {
    render() {
        return (
            <div className="project-stack">
                {this.props.stack.map((skill, index) => {
                    return <span className="project-card-content-skill">{skill}</span>
                })}
            </div>
        )
    }
}

class ProjectLinks extends React.Component {
    render() {
        const { src, live } = this.props.links;

        return (
            <div className="project-card-content-links">
                {src &&
                <a href={src}>
                    <button className="project-card-content-link">Source</button>
                </a>}
                {live &&
                <a href={live}>
                    <button className="project-card-content-link">Live</button>
                </a>}
            </div>
        )
    }
}

class ProjectCard extends React.Component {
    render() {
        const { title, description, stack, image, links } = this.props;

        return (
            <div className="project-card">
                <div className="project-card-content-image-container">
                    <img className="project-card-content-image" src={image}></img>
                </div>
                <div className="project-card-content">
                    <span className="project-card-content-title">{title}</span>
                    <article className="project-card-content-description">{description}</article>
                    <ProjectStack 
                        stack={stack} />
                    <ProjectLinks
                        links={links} />
                </div>
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;