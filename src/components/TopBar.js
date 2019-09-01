import React, { Component } from 'react';
import { withRouter, NavLink, Link } from 'react-router-dom';
const site = window.location.origin;


class TopBar extends Component {

    state = {
    };

    render() {

        return (
            <div className="top">
                <Link to={'/about'}><img src={site + '/assets/porche.jpg'} alt={''} className={'logo'} /></Link>
               <ul className="menu">
                   <li><NavLink exact={true} to={'/'} activeClassName={'is-active'}>Home</NavLink></li>
                   <li><NavLink to={'/about'} activeClassName={'is-active'}>About</NavLink></li>
                   {/* <li><NavLink to={'/works'} activeClassName={'is-active'}>Works</NavLink></li> */}
                   {/* <li><NavLink to={'/services'} activeClassName={'is-active'}>Services</NavLink></li> */}
                   <li><NavLink to={'/contact'} activeClassName={'is-active'}>Contact</NavLink></li>
               </ul>
            </div>
        );
    }
}

export default withRouter(TopBar);