import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatedRoute } from 'react-router-transition';
import TopBar from './components/TopBar';
import ProgressBar from './components/ProgressBar';
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Services from './components/Services';
import Contact from './components/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="app-container">
                <TopBar />
                <div className={'content'} id={'content'}>
                    <AnimatedRoute exact path="/"
                                   component={Home}
                                   className={'homePage'}
                                   atEnter={{ offset: -100, opacity: 0 }}
                                   atLeave={{ offset: -100, opacity: 0 }}
                                   atActive={{ offset: 0, opacity: 1 }}
                                   mapStyles={(styles) => ({
                                       transform: `translateX(${styles.offset}%)`,
                                       opacity: `${styles.opacity}`
                                   })} />
                    <AnimatedRoute path="/about"
                                   component={About}
                                   className={'aboutPage'}
                                   atEnter={{ offset: -100, opacity: 0 }}
                                   atLeave={{ offset: -100, opacity: 0 }}
                                   atActive={{ offset: 0, opacity: 1 }}
                                   mapStyles={(styles) => ({
                                       transform: `translateX(${styles.offset}%)`,
                                       opacity: `${styles.opacity}`
                                   })} />
                    <AnimatedRoute path="/works"
                                   component={Works}
                                   className={'worksPage'}
                                   atEnter={{ offset: -100, opacity: 0 }}
                                   atLeave={{ offset: -100, opacity: 0 }}
                                   atActive={{ offset: 0, opacity: 1 }}
                                   mapStyles={(styles) => ({
                                       transform: `translateX(${styles.offset}%)`,
                                       opacity: `${styles.opacity}`
                                   })} />
                    <AnimatedRoute path="/services"
                                   component={Services}
                                   className={'servicesPage'}
                                   atEnter={{ offset: -100, opacity: 0 }}
                                   atLeave={{ offset: -100, opacity: 0 }}
                                   atActive={{ offset: 0, opacity: 1 }}
                                   mapStyles={(styles) => ({
                                       transform: `translateX(${styles.offset}%)`,
                                       opacity: `${styles.opacity}`
                                   })} />
                    <AnimatedRoute path="/contact"
                                   component={Contact}
                                   className={'contactPage'}
                                   atEnter={{ offset: -100, opacity: 0 }}
                                   atLeave={{ offset: -100, opacity: 0 }}
                                   atActive={{ offset: 0, opacity: 1 }}
                                   mapStyles={(styles) => ({
                                       transform: `translateX(${styles.offset}%)`,
                                       opacity: `${styles.opacity}`
                                   })} />
                </div>
                <ProgressBar />
            </div>
        </Router>
    );
  }
}

export default App;
