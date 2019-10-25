import React from 'react';

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
                <div className="green-sec-bg green-ter-color mobile-menu-button" id="menu-button" onClick={this.menutoggle}>menu</div>  
                <div className={this.state.menuclass} id="mobile-menu-list-bag">
                    <a href="" className="mobile-menu-list">Home </a>
                    <a href="" className="mobile-menu-list">About Us</a>
                    <a href="" className="mobile-menu-list">View Index</a>
                    <a href="" className="mobile-menu-list">Resources</a>
                    <a href="" className="mobile-menu-list">Get Involved</a>
                    <a href="" className="mobile-menu-list">Contact Us</a>
                </div>
            </div>
            </React.Fragment>
        )
        
    }
}
 

export default MobileMenuComponent;