import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
const site = window.location.origin;

class Home extends Component {

    state = {
    };

    render() {

        let { to, label } = this.props;

        return (
            <Link to={to} className="next-button">
                {label}
                <img src={site + '/assets/enter.png'} alt={''} />
            </Link>
        );
    }
}

export default withRouter(Home);