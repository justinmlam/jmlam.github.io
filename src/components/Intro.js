import React from 'react';
import '../scss/main.scss';


class Intro extends React.Component {
    render() {
        return (
            <div class="intro-base">
                <div class="row intro-container">
                    <div class="intro-title">
                        Hello, I'm Justin
                    </div>
                </div>
                <div class="row">
                    <div class="intro pt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </div>
        )
    }
}

export default Intro;