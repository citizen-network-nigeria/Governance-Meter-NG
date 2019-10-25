import React from 'react';
import logo from '../../img/logo.png';
 
class HeaderTop extends React.Component{
    render(){
        return(
            <div className="">
                <div className="header-container-top white-bg">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="logo-box">
                                <a href='/'><img className="logo-top" src={logo} alt="Governance Meter Logo" /> </a>
                            </div>
                        </div>
                        <div className="col-md-5 right">
                            <div align="right">
                                <form action="search">
                                        <input className='search-input' type='text' name='query' id='search' placeholder="Search GPI" />
                                        <button type='submit' id='submitbutton' className="search-button" >search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        )
    }
}
 
export default HeaderTop;