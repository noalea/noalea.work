import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NextButton from './NextButton';
import $ from 'jquery';
const site = window.location.origin;

class Works extends Component {

    state = {
    };

    componentDidMount() {
        let self = this;
        setTimeout(() => {
            $("#content")[0].scrollTop = 0;
        }, 100);
        $(document).keypress(function(e) {
            if(e.which == 13) {
                self.props.history.push('/contact');
            }
        });
    }

    render() {
        return (
            <div className="works">
                <div className="container">
                    <h1>My Work</h1>
                    <p>Below you'll find some recent side projects & freelance work.<br /><br />Let's talk and I'll tell you about the really cool projects I can't show here.</p>
                    <div className="h-scroll projects">
                        <div className="project" style={{backgroundImage: `url(${site + '/assets/nikas.png'})`}}>
                            <a className="overlay" href={'https://nikasrawdogfood.com'} target={'_blank'}>
                                <div>
                                    <h3>Nika's Raw Dog Food</h3>
                                    <p>Ecommerce Shop</p>
                                </div>
                            </a>
                        </div>
                        <div className="project" style={{backgroundImage: `url(${site + '/assets/straintracker.png'})`}}>
                            <a className="overlay" href={'http://straintracker.samply.co/'} target={'_blank'}>
                                <div>
                                    <h3>Strain Tracker</h3>
                                    <p>Web Development</p>
                                </div>
                            </a>
                        </div>
                        <div className="project" style={{backgroundImage: `url(${site + '/assets/twitter-scheduler.png'})`}}>
                            <a href={'http://scheduler.samply.co/'} target={'_blank'} className="overlay">
                                <div>
                                    <h3>Schedule Tweets</h3>
                                    <p>Web Development</p>
                                </div>
                            </a>
                        </div>
                        <div className="project" style={{backgroundImage: `url(${site + '/assets/samply.png'})`}}>
                            <a href={'http://samply.co/'} target={'_blank'} className="overlay">
                                <div>
                                    <h3>Samply.co</h3>
                                    <p>Web Development</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <NextButton to={'/contact'} label={'Contact'} />
                </div>
            </div>
        );
    }
}

export default withRouter(Works);