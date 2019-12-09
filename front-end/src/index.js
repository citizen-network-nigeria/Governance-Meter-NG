import React from 'react';
import ReactDOM from 'react-dom';
//import Suspense from 'react';
import './css/bootstrap.min.css';
import './css/style.css';
import './css/responsive.css';
import './css/owl.carousel.css'
 
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './views/Home';
import * as serviceWorker from './serviceWorker';
import GPIResultBoard from './views/gpi-result-board';
import GPIResultByState from './views/gpi-state-score';
import GPICompareState from './views/gpi-compare-state';
import GPIIndicatorStories from './views/gpi-indicator-stories';
import GPIDownload from './views/gpi-download';

import About from './views/about';
import Aboutwhere from './views/about-where';
import Aboutwe from './views/about-who';
import Aboutgpi from './views/about-gpi';
import Aboutsap from './views/about-sap';

import GetInvolved from './views/page-get';
import Resource from './views/page-resource';
import Contact from './views/page-contact';

import Errorpage from './views/404'

//const GPIResultBoard = React.lazy(()=> import('./views/gpi-result-board') );

 
class AppRoutes extends React.Component{
    render(){
        return(
             
            <Router>
                 
                    <Switch>
                        <Route exact path="/"> <Home /> </Route>  

                        <Route path="/GPI/result-board">  <GPIResultBoard /> </Route>  
                        <Route path="/GPI/state-board">  <GPIResultByState /> </Route>  
                        <Route path="/GPI/compare-states">  <GPICompareState /> </Route>
                        <Route path="/GPI/indicator-stories">  <GPIIndicatorStories /> </Route>
                        <Route path="/download">  <GPIDownload /> </Route>

                        <Route path="/about-us/what-we-do">  <About /> </Route>
                        <Route path="/about-us/where-we-work">  <Aboutwhere /> </Route>
                        <Route path="/about-us/who-we-are">  <Aboutwe /> </Route>
                        <Route path="/about-us/gpi-and-sdgs">  <Aboutgpi /> </Route>
                        <Route path="/about-us/sponsors-and-partners">  <Aboutsap /> </Route>

                        <Route path="/get-involved">  <GetInvolved /> </Route>
                        <Route path="/resources">  <Resource /> </Route>
                        <Route path="/contact-us">  <Contact /> </Route>

                        <Route > <Errorpage /> </Route> 
                    </Switch>
                 
            </Router>
             
             
        );
    }
}




ReactDOM.render(<AppRoutes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
