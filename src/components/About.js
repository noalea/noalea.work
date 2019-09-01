import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NextButton from './NextButton';
import $ from 'jquery';
const site = window.location.origin;


class About extends Component {

    state = {
    };

    componentDidMount() {
        let self = this;
        $(document).keypress(function(e) {
            if(e.which == 13) {
                self.props.history.push('/contact');
            }
        });
    }


    render() {

        let img = site + '/assets/sky.png';

        return (
            <div className="about">
                <div className="container">
                    <div className="me-bg" style={{backgroundImage: `url(${img})`}} />
                    <div className="me">
                        <h3>Noa Lea</h3>
                        <p>Apart from the 9 to 5, I'm constantly working on my own side projects to improve my quality of code.</p>
                        <h3>SKILLS</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Adobe Creative Cloud</li>
                            <li>InVision Studio</li>
                        </ul>
                        <ul>
                            <li>React.js</li>
                            <li>Git</li>
                            <li>React Native</li>
                            <li>Redux</li>
                            <li>MySQL</li>
                        </ul>
                        <hr/>
                        <NextButton to={'/contact'} label={'Contact'} />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(About);