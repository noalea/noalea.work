import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Socials from './Socials';

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="container">
                    <h1>Let's Get Started</h1>
                    <p>Email me at <a href={'mailto:noa@noalea.work'}>noa@noalea.work</a> or just DM me on my socials below.</p>
                </div>
                <Socials />
            </div>
        );
    }
}

export default withRouter(Contact);