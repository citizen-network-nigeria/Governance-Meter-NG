import React from 'react';
import HeaderTop from './headerTop';
import HBSlide1 from './hbSlide1';
import HBSlide2 from './hbSlide2';
import HBSlide3 from './hbSlide3';
import Desktopmenu from '../header/desktopmenu';
import MobileMenuComponent from '../header/mobilemenu';

class headerhome extends React.Component{
     
    componentDidMount(){
        const event = new Event('load');
        window.dispatchEvent(event);
     }   
    
    clickme=()=>{ alert('I am clicked')}
    render(){
        return(
            <div className="no-padding no-margin header-bag">  
                <div className="top-bar">
                    <HeaderTop />
                </div>
                
                <div className="owl-carousel home_slider  middle-bar">
                    <HBSlide1 />
                    <HBSlide1 />
                    <HBSlide1 />
                </div>
                 
                <div className="bottom-bar">
                <div className="home_slider_nav_container d-flex flex-row align-items-start slider-nav-bag">
                    <div className="home_slider_nav home_slider_prev trans_200 slider-nav-arrow green-pry-bg"><i className="fa fa-angle-left" aria-hidden="true"></i></div>
                    <div className="home_slider_nav home_slider_next trans_200 slider-nav-arrow green-pry-bg"><i className="fa fa-angle-right" aria-hidden="true"></i></div>
                </div>
                    <hr className="green-sec-bg header-hr no-margin"/>
                    <div className="mobile-menu-bag white-bg extra-bg" >
                                <MobileMenuComponent />
                            </div>
                    <Desktopmenu />
                </div>
            </div>
        )
    }
}
 export default headerhome;