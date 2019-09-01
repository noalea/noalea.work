import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import $ from 'jquery';


class ProgressBar extends Component {

    state = {
        location: this.props.location,
        percentage: 1
    };

    componentDidMount() {
        this.pathPercentages(this.props.location.pathname);
    }

    componentDidUpdate() {
        if (this.state.location !== this.props.location) {
            this.setState({
                location: this.props.location
            });
            this.pathPercentages(this.props.location.pathname);
        }
    }

    pathPercentages(path) {
        $('.app-container .content > div').removeClass('active');
        switch (path) {
            case '/':
                $(".app-container .content .homePage").addClass('active');
                this.setState({
                    percentage: 20
                });
                break;
            case '/about':
                $(".app-container .content .aboutPage").addClass('active');
                this.setState({
                    percentage: 40
                });
                break;
            case '/works':
                $(".app-container .content .worksPage").addClass('active');
                this.setState({
                    percentage: 60
                });
                break;
            case '/services':
                $(".app-container .content .servicesPage").addClass('active');
                this.setState({
                    percentage: 80
                });
                break;
            case '/contact':
                $(".app-container .content .contactPage").addClass('active');
                this.setState({
                    percentage: 100
                });
                break;
        }
    }

    render() {

        let { percentage } = this.state;

        return (
            <div className="progress" style={{width: percentage + '%'}} />
        );
    }
}

export default withRouter(ProgressBar);