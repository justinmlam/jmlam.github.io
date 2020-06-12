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
                            to="main"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>HOME</Link>
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
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>ABOUT</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar;