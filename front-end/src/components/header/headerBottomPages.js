import React from 'react';
import Desktopmenu from '../header/desktopmenu';
import MobileMenuComponent from '../header/mobilemenu';

class HeaderBottom extends React.Component{
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
            <div className=''>
                <div className='row no-padding no-margin'>
                    <div className=" no-padding hd-img">
                        <div className="header-img-bg">

                        </div>
                    </div>
                    <div className=" no-padding hd-txt green-pry-bg">
                        <div className="mobile-menu-bag">
                        <MobileMenuComponent />
                             
                        </div>
                        <div className="header-text-bg ">
                            <div>
                                <div className="header-txt-b1">
                                    <h3 className="white-color">{this.props.info.title}</h3>
                                </div>
                                <div className="header-txt-b2">
                                    <p className="white-color"> {this.props.info.desc} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="green-sec-bg header-hr no-margin"/>
                <Desktopmenu />
            </div>
        )
        
    }
}
 

export default HeaderBottom;