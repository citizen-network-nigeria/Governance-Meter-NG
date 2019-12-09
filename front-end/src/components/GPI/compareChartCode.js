import React from 'react';
 
class ColorCodeBox extends React.Component{
    render(){ 
        return(
             <div className="no-padding no-margin">
                 <div className="main-padding">
                     <div className="row">
                         <div className="col-md-5"> <br/>
                            <div className="main-code-box">
                                <div className="gpi-code-title-1">State Color Codes</div>
                                <hr/>
                                <div className="color-boxx">
                                    <span className="color-code-box c-blue"></span>
                                    <span className="color-code-text">First State  </span>
                                </div>
                                <div className="color-boxx">
                                    <span className="color-code-box c-purple"></span>
                                    <span className="color-code-text">Second State  </span>
                                </div>
                                <div className="color-boxx">
                                    <span className="color-code-box c-milk"></span>
                                    <span className="color-code-text">Third State </span>
                                </div>
                                <div className="color-boxx">
                                    <span className="color-code-box c-cyan"></span>
                                    <span className="color-code-text"> Fourth State </span>
                                </div>
                            </div>
                         </div>

                         <div className="col-md-7"> <br/>
                            <div className="main-code-box">
                                <div className="gpi-code-title-1">Dataset Keys</div>
                                <hr/>
                                <div>
                                    <div className="cc-code-box">
                                        <h4 className="color-code-hd-1">GPI</h4>
                                        <p className="color-code-text-sm">The State's GPI performance</p>
                                    </div>
                                    <div className="cc-code-box">
                                        <h4 className="color-code-hd-1">Human Development</h4>
                                        <p className="color-code-text-sm">The State's Human Development Score. Below are its sub categories.</p>
                                        <div className="color-code-item"> <i className="fab fa-instagram"> </i> Welfare</div>
                                        <div className="color-code-item"> <i className="fab fa-instagram"> </i> Education</div>
                                        <div className="color-code-item"> <i className="fab fa-instagram"> </i> Health</div>
                                         
                                    </div>

                                    <div className="cc-code-box">
                                        <h4 className="color-code-hd-1">Economic Opportunity</h4>
                                        <p className="color-code-text-sm">The State's Economic Opportunity Score. Below are its sub categories.</p>
                                        <div className="color-code-item"> <i className="fab fa-instagram"> </i> Public Management</div>
                                        <div className="color-code-item"> <i className="fab fa-instagram"> </i> Business Environment</div>
                                        <div className="color-code-item"> <i className="fab fa-instagram"> </i>Infrastructure</div>
                                        <div className="color-code-item"> <i className="fab fa-instagram"> </i> Rural Environment</div>
                                         
                                    </div>

                                    <div className="cc-code-box">
                                        <h4 className="color-code-hd-1">Safety & Rule of Law</h4>
                                        <p className="color-code-text-sm">The State's Safety & Rule of Law Score. Below are its sub categories.</p>
                                        <div className="color-code-item"> <i className="fab fa-instagram"> </i> Rule of Law</div>
                                        <div className="color-code-item"> <i className="fab fa-instagram"> </i> Transparency and Accountability</div>
                                        <div className="color-code-item"> <i className="fab fa-instagram"> </i> Personal Safety</div>
                                        <div className="color-code-item"> <i className="fab fa-instagram"> </i> State Security</div>
                                         
                                    </div>

                                    <div className="cc-code-box">
                                        <h4 className="color-code-hd-1">Inclusion and Human Rights</h4>
                                        <p className="color-code-text-sm">The State's Inclusion and Human Rights Score. Below are its sub categories.</p>
                                        <div className="color-code-item"> <i className="fab fa-instagram"> </i> Participation</div>
                                        <div className="color-code-item"> <i className="fab fa-instagram"> </i> Rights</div>
                                        <div className="color-code-item"> <i className="fab fa-instagram"> </i> Gender</div>
                                         
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

export default ColorCodeBox;




