import React from 'react';
import gpiInfographic from '../../img/home-bg.png'
import Video from './about-video'; 
import pimg from '../../img/icon.png'


class HomeMap extends React.Component{
    componentDidMount(){
        const event = new Event('load');
        window.dispatchEvent(event);
     }  
     
    render(){ 
        return(
             <div className="no-padding no-margin">
                 <div className="main-padding blue-ter-bg ">
                      <p className="abt-text">This is where the story begings This is where the story begings This is where the story begings This is where the story begingsThis is where the story begings This is where the story begings This is where the story begingsThis is where the story begingsThis is where the story begings</p>
                 </div>


                 <div className="main-padding" >
                    <div className="row no-margin" style={{display:'flex',justifyContent:'center'}}>
                        <div className="col-lg-10 no-padding">
                            <div className="db-h10 blue-pry-color">Organizational Partners</div>
                            <hr style={{marginTop:'0.5em',marginBottom:'2em'}} />
                            
                            <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                                <div className="sap-org-prev staff-nav-box blue-sec-bg white-color">
                                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                                </div>
                                <div className="sap-org-owl align-center owl-carousel owl-box  ">
                                <div align='center' className="sap-item owl-item">
                                        <div>
                                            <img src={pimg} className="abt-sap-img" alt="partners name" />
                                        </div>
                                        <div className="db-h40 blue-pry-color">Name Name1</div>
                                    </div>

                                    <div align='center' className="sap-item owl-item">
                                        <div>
                                            <img src={pimg} className="abt-sap-img" alt="partners name" />
                                        </div>
                                        <div className="db-h40 blue-pry-color">Name Name2</div>
                                    </div>

                                    <div align='center' className="sap-item owl-item">
                                        <div>
                                            <img src={pimg} className="abt-sap-img" alt="partners name" />
                                        </div>
                                        <div className="db-h40 blue-pry-color">Name Name3</div>
                                    </div>

                                    <div align='center' className="sap-item owl-item">
                                        <div>
                                            <img src={pimg} className="abt-sap-img" alt="partners name" />
                                        </div>
                                        <div className="db-h40 blue-pry-color">Name Name4</div>
                                    </div>

                                    <div align='center' className="sap-item owl-item">
                                        <div>
                                            <img src={pimg} className="abt-sap-img" alt="partners name" />
                                        </div>
                                        <div className="db-h40 blue-pry-color">Name Name5</div>
                                    </div>

                                    <div align='center' className="sap-item owl-item">
                                        <div>
                                            <img src={pimg} className="abt-sap-img" alt="partners name" />
                                        </div>
                                        <div className="db-h40 blue-pry-color">Name Name6</div>
                                    </div>

                                    <div align='center' className="sap-item owl-item">
                                        <div>
                                            <img src={pimg} className="abt-sap-img" alt="partners name" />
                                        </div>
                                        <div className="db-h40 blue-pry-color">Name Name7</div>
                                    </div>

                                    <div align='center' className="sap-item owl-item">
                                        <div>
                                            <img src={pimg} className="abt-sap-img" alt="partners name" />
                                        </div>
                                        <div className="db-h40 blue-pry-color">Name Name8</div>
                                    </div>

                                    <div align='center' className="sap-item owl-item">
                                        <div>
                                            <img src={pimg} className="abt-sap-img" alt="partners name" />
                                        </div>
                                        <div className="db-h40 blue-pry-color">Name Name9</div>
                                    </div>

                                    <div align='center' className="sap-item owl-item">
                                        <div>
                                            <img src={pimg} className="abt-sap-img" alt="partners name" />
                                        </div>
                                        <div className="db-h40 blue-pry-color">Name Name</div>
                                    </div>

                                    <div align='center' className="sap-item owl-item">
                                        <div>
                                            <img src={pimg} className="abt-sap-img" alt="partners name" />
                                        </div>
                                        <div className="db-h40 blue-pry-color">Name Name</div>
                                    </div>

                                    <div align='center' className="sap-item owl-item">
                                        <div>
                                            <img src={pimg} className="abt-sap-img" alt="partners name" />
                                        </div>
                                        <div className="db-h40 blue-pry-color">Name Name</div>
                                    </div>

                                    <div align='center' className="sap-item owl-item">
                                        <div>
                                            <img src={pimg} className="abt-sap-img" alt="partners name" />
                                        </div>
                                        <div className="db-h40 blue-pry-color">Name Name</div>
                                    </div>
                                </div>

                                <div className="sap-org-next staff-nav-box blue-sec-bg white-color">
                                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                </div>
                            </div>
                            
                            <br/>
                         </div>
                     </div>
                 </div>




                <div className="main-padding" >
                    <div className="row no-margin" style={{display:'flex',justifyContent:'center'}}>
                        <div className="col-lg-10 no-padding">
                            <div className="db-h10 blue-pry-color">Professional Partners</div>
                            <hr style={{marginTop:'0.5em'}} />
                            <div className="row">
                            <div className="col-md-4" style={{display:'flex', marginTop:'1.5em', justifyContent:'center'}}>
                                <div style={{width:'80%'}}>
                                    <img src={pimg} className="abt-staff-img" />
                                </div>
                            </div>
                            <div className="col-md-8" style={{marginTop:'1.5em'}}>
                                <div className="db-h30 blue-pry-color"><b>This is My Name</b></div>
                                <div className="db-h4">This is my Job title</div>
                                <p style={{marginTop:'10px'}} className="abt-text align-justify">This is where the story begings This is where the story begings This is where the story begings This is where the story begingsThis is where the story begings This is where the story begings This is where the story begingsThis is where the story begingsThis is where the story begings</p>
                            </div>
                            </div>
                            <br/>
                         </div>
                     </div>
                 </div>

 

                <br/> <br/>


                <div className="main-padding" >
                    <div className="row no-margin" style={{display:'flex',justifyContent:'center'}}>
                        <div className="col-lg-10 no-padding">
                            <div className="db-h10 blue-pry-color">Sponsors</div>
                            <hr style={{marginTop:'0.5em'}} />
                            <div className="row">
                            <div className="col-md-4" style={{display:'flex', marginTop:'1.5em', justifyContent:'center'}}>
                                <div style={{width:'80%'}}>
                                    <img src={pimg} className="abt-staff-img" />
                                </div>
                            </div>
                            <div className="col-md-8" style={{marginTop:'1.5em'}}>
                                <div className="db-h30 blue-pry-color"><b>This is My Name</b></div>
                                <div className="db-h4">This is my Job title</div>
                                <p style={{marginTop:'10px'}} className="abt-text align-justify">This is where the story begings This is where the story begings This is where the story begings This is where the story begingsThis is where the story begings This is where the story begings This is where the story begingsThis is where the story begingsThis is where the story begings</p>
                            </div>
                            </div>
                            <br/>
                         </div>
                     </div>
                 </div>

 





                <br/>
 

             </div>
              
        )
    }
}

export default HomeMap;




