import React from 'react';
import logo from '../../img/logo.png';
 
class HeaderTop extends React.Component{

    constructor(props){
        super(props);
        this.state={
            mobileSearchToggle:false,
            searchClass:'mobile-search-bag hide-menu'
        }
    }

    showSearch=()=>{
        this.setState(
            state =>({
                mobileSearchToggle: !state.mobileSearchToggle
            })
        ); this.mobileSearh();
    }
     
    mobileSearh =() => {  
        if(this.state.mobileSearchToggle){
         this.setState(
            state =>({
                searchClass: 'mobile-search-bag hide-menu'
            })
        );
        }
        else{
         this.setState(
            state =>({
                searchClass: 'mobile-search-bag show-menu'
            })
        );
        }
    }

    render(){
        return(
            <div className="top-item-bar">
                <div className="header-container-top white-bg">
                    <div className="row">
                        <div className="left-hd">
                            <div className="logo-box">
                                <a href='/'><img className="logo-top" src={logo} alt="Governance Meter Logo" /> </a>
                            </div>
                        </div>
                        <div className="right-hd right">
                            <div align="right">
                                <form action="search" className="search">
                                        <input className='search-input' type='text' name='query' id='search' placeholder="Search GPI" />
                                        <button type='submit' id='submitbutton' className="search-button" ><i className="fa fa-search" aria-hidden="true"></i></button>
                                </form>
                                <div onClick={this.showSearch} className="activate-search">
                                <i className="fa fa-search" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
                 <div className={this.state.searchClass} align="right">
                     <form action="search">
                            <input className='m-search' type='text' name='query' id='search' placeholder="Search GPI..." />
                            <button type='submit' id='submitbutton' className="m-search-button" ><i className="fa fa-search" aria-hidden="true"></i> </button>
                     </form>
                 </div>
            </div>
        )
    }
}
 
export default HeaderTop;