import React from 'react';
import { Link } from 'react-scroll';

import '../scss/main.scss';

class Navbar extends React.Component {
    render() {
        return (
            <div class="nav-wrapper">
                <ul class="pl-0">
                    <li class="nav-item">
                        <Link 
                            activeClass="active"
                            to="intro"
                            spy={true}
                            smooth={true}
                            offset={-500}
                            duration={500}>HOME</Link>
                    </li>
                    <li class="nav-item">
                        <Link 
                            activeClass="active"
                            to="experience"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>EXPERIENCE</Link>
                    </li>
                    <li class="nav-item">
                        <Link 
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>PROJECTS</Link>
                    </li>
                    <li class="nav-item">
                        <Link 
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>CONTACT</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar;