import React from 'react';
import { Link} from 'react-router-dom';
class Desktopmenu extends React.Component{
    render(){
        return(
            <div className="desktop-menu-tray">
                <Link to="/" className="desktop-menu-list">Home </Link>
                <Link to="/about-us/what-we-do" className="desktop-menu-list">About Us</Link>
                <Link to="/GPI/result-board" className="desktop-menu-list">View Index</Link>
                <Link to="/resources" className="desktop-menu-list">Resources</Link>
                <Link to="/get-involved" className="desktop-menu-list">Get Involved</Link>
                <Link to="/contact-us"  className="desktop-menu-list">Contact Us</Link>
            </div>
        )
        
    }
}
 

export default Desktopmenu;