import React from 'react';

import '../scss/main.scss';


class Experience extends React.Component {
    render() {
        return (
            <div>
                <div id="experience" class="experience-section">
                    <div class="experience-title">
                        <h1>EXPERIENCE</h1>
                        <hr></hr>
                    </div>
                    <div class="experience-body">
                        [wip]
                        <ul>
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
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience;