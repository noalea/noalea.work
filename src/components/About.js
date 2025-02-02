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
                        <p>Apart from the 9 to 5, I'm constantly working on my own side projects to learn new skills.</p>
                        <p>Most recently, I've built a real-time chat feature (comments & replies) in React Native using WebSockets.</p>
                        <h3>SKILLS</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript / Typescript</li>
                            <li>React</li>
                            <li>React Native</li>
                            <li>Next.js</li>
                            <li>Node.js</li>
                            <li>SEO & Performance Optimization</li>
                        </ul>
                        <ul>
                            <li>Git & CI/CD automations</li>
                            <li>Golang</li>
                            <li>Jest / Cypress testing</li>
                            <li>Mobx</li>
                            <li>MySQL</li>
                            <li>Postgres</li>
                            <li>PHP</li>
                            <li>Ruby on rails</li>
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