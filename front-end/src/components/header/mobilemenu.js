import React from 'react';
import { Link} from 'react-router-dom';

class MobileMenuComponent extends React.Component{
    constructor(props){
        super(props);
        this.state ={toggleOn:false, menuclass:'mobile-menu-list-bag hide-menu'};
    }
    
    menutoggle=()=>{
        this.setState(
            state =>({
                toggleOn: !state.toggleOn
            })
        ); this.mobileMenu();
    }
    mobileMenu =() => {  
        if(this.state.toggleOn){
         this.setState(
            state =>({
                menuclass: 'mobile-menu-list-bag hide-menu'
            })
        );
        }
        else{
         this.setState(
            state =>({
                menuclass: 'mobile-menu-list-bag show-menu'
            })
        );
        }
    }
    
    render(){
        return(
            <React.Fragment>
            <div className="mmenu-pos">
                <div className="green-sec-bg green-ter-color mobile-menu-button" id="menu-button" onClick={this.menutoggle}>menu <div className="claret-down"></div> </div>  
                <div className={this.state.menuclass} id="mobile-menu-list-bag">
                    <Link to="/" className="mobile-menu-list">Home </Link>
                    <Link to="/about-us/what-we-do" className="mobile-menu-list">About Us</Link>
                    <Link to="/GPI/result-board" className="mobile-menu-list">View Index</Link>
                    <Link to="/resources" className="mobile-menu-list">Resources</Link>
                    <Link to="/get-involved" className="mobile-menu-list">Get Involved</Link>
                    <Link to="/contact-us" className="mobile-menu-list">Contact Us</Link>
                </div>
            </div>
            </React.Fragment>
        )
        
    }
}
 

export default MobileMenuComponent;