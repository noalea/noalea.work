import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NextButton from './NextButton';
import Socials from './Socials';
import $ from 'jquery';

class Home extends Component {

    state = {
    };

    componentDidMount() {
        let self = this;
        $(document).keypress(function(e) {
            if(e.which == 13) {
                self.props.history.push('/about');
            }
        });
    }

    render() {

        return (
            <div className="home">
                <div className="container">
                    <h1>Noa Lea</h1>
                    <div className="divider" />
                    <p className="position">Development + Design for All Devices</p>
                    <p className="description">I like to build companies out of the products I create.</p>
                    <Socials />
                    <NextButton to={'/about'} label={'About'} />
                </div>
            </div>
        );
    }
}

export default withRouter(Home);