import React from 'react';

import '../scss/main.scss';


class Projects extends React.Component {
    render() {
        return (
            <div>
                <div id="projects" class="projects-section">
                    <div class="projects-title">
                        <h1>PROJECTS</h1>
                        <hr></hr>
                    </div>
                    <div class="projects-body">
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