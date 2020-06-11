import React from 'react';

import '../scss/main.scss';

class Navbar extends React.Component {
    render() {
        return (
            <div class="nav-wrapper">
                <ul class="pl-0">
                    <li><a href="/site">HOME</a></li>
                    <li><a>PROJECTS</a></li>
                    <li><a href="/site/about">ABOUT</a></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;