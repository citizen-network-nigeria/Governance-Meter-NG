import React from 'react';

class HeaderBottom extends React.Component{
    render(){
        return(
            <div className='side-margin'>
                <div className='row no-padding no-margin'>
                    <div className=" no-padding hd-img">
                        <div className="header-img-bg">

                        </div>
                    </div>
                    <div className=" no-padding hd-txt green-pry-bg">
                        <div className="mobile-menu-bag">
                            <div className="green-sec-bg green-ter-color mobile-menu-button" id="menu-button">menu</div>
                            <div className="mobile-menu-list-bag" id="mobile-menu-list-bag">
                                <a href="" className="mobile-menu-list">Home </a>
                                <a href="" className="mobile-menu-list">About Us</a>
                                <a href="" className="mobile-menu-list">View Index</a>
                                <a href="" className="mobile-menu-list">Resources</a>
                                <a href="" className="mobile-menu-list">Get Involved</a>
                                <a href="" className="mobile-menu-list">Contact Us</a>
                            </div>
                        </div>
                        <div className="header-text-bg ">
                            <div>
                                <div className="header-txt-b1">
                                    <h3 className="white-color">Governance Performance Index</h3>
                                </div>
                                <div className="header-txt-b2">
                                    <p className="white-color">Driving Progress through data</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="green-sec-bg header-hr no-margin"/>
                <div className="desktop-menu-tray">
                    <a href="" className="desktop-menu-list">Home </a>
                    <a href="" className="desktop-menu-list">About Us</a>
                    <a href="" className="desktop-menu-list">View Index</a>
                    <a href="" className="desktop-menu-list">Resources</a>
                    <a href="" className="desktop-menu-list">Get Involved</a>
                    <a href=""  className="desktop-menu-list">Contact Us</a>
                </div>
            </div>
        )
        
    }
}
 

export default HeaderBottom;