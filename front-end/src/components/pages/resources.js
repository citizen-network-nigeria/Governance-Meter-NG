import React from 'react';
import { Link} from 'react-router-dom';


class GetInvolved extends React.Component{
    render(){
        return(
            <div className="no-padding no-margin">
                <div className="row no-margin no-padding" style={{display:'flex', justifyContent:'center'}}>
                    <div className="col-lg-9 main-padding">
                        <div className="row no-margin">
                            <div className="col-md-6">
                                <div className="resource-card">
                                    <div className="db-h30 blue-pry-color">DOWNLOAD</div>
                                    <hr/>
                                    <p>The GPI and other documents is avalaible for download.</p>
                                    <div>
                                        <Link className="subhead-tab-b" to ="/download">Download Here</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <div className="resource-card">
                                    <div className="db-h30 blue-pry-color">BLOG</div>
                                    <hr/>
                                    <p>We share news, insights from the GPI and other valuable information on  our blog.</p>
                                    <div>
                                        <Link className="subhead-tab-b" >Visit Blog</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }
}
 

export default GetInvolved;