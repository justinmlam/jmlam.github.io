import React from 'react';
import '../scss/main.scss';


class Intro extends React.Component {
    render() {
        return (
            <div class="intro-base">
                <div class="row intro-container">
                    <div class="intro-title">
                        Hi, I'm Justin
                    </div>
                </div>
                <div class="row">
                    <div class="intro-summary pt-2 mb-2">
                        I'm a Vancouver-based developer with a background in Math. <br /><br />
                        From the early years of hacking video games in elementary school,<br />
                        to creating game modifications in high school,<br />
                        taking Computer Science courses in university,<br />
                        and finally leading to a career in software development,<br /> 
                        I've always had pure passion for solving problems with code.
                        <br /><br />
                        Lead by a growth mindset, I'm constantly looking for new challenges to face and ways to improve.
                    </div>
                </div>
                <div class="row">
                    <div class="intro-heresmy">
                        Here's my:
                    </div>
                </div>
                <div class="row">
                    <div class="intro-topics">
                        <ul class="pr-5">
                            <li><a>EXPERIENCE</a></li>
                            <li><a class="intro-secondaryfont">PROJECTS</a></li>
                            <li><a>ABOUT</a></li>
                        </ul>

                    </div>
                   
                </div>
                <div class="row">
                    <div class="intro-end">
                        Stay a while, won't you?
                    </div>
                </div>
            </div>
        )
    }
}

export default Intro;