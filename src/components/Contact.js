import React from 'react';

import '../scss/main.scss';


class Contact extends React.Component {
    render() {
        return (
            <div>
                <div id="contact" class="contact-section">
                    <div class="contact-title">
                        <h1>CONTACT</h1>
                        <hr></hr>
                    </div>
                    <div class="contact-body">
                        oooooooweeee!!! you came all the way down here just so say hi to lil ol' me??
                        <br />
                        well, there's a couple ways to reach me:
                        <br />
                        <br />
                        <a href="https://github.com/justinmlam">github</a>
                        <br />
                        <a href="https://www.linkedin.com/in/jmlam/">linkedin</a>
                        <br />
                        <a href="mailto:justinmlam@gmail.com">justinmlam@gmail.com</a>
                        <br />
                        <br />

                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;