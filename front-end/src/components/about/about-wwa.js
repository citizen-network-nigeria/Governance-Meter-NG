import React from 'react';
import gpiInfographic from '../../img/home-bg.png'
import Video from './about-video'; 
import pimg from '../../img/icon.png';
import '../../css/owl.carousel.css'
//import OwlCarousel from 'react-owl-carousel';  

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
                            <div className="db-h10 blue-pry-color">Project Team</div>
                            <hr style={{marginTop:'0.5em'}} />
                            <div className="row">
                            <div className="col-sm-4" style={{display:'flex', marginTop:'1.5em', justifyContent:'center'}}>
                                <div style={{width:'80%'}}>
                                    <img src={pimg} className="abt-staff-img" />
                                </div>
                            </div>
                            <div className="col-sm-8" style={{marginTop:'1.5em'}}>
                                <div className="db-h30 blue-pry-color"><b>This is My Name</b></div>
                                <div className="db-h4">This is my Job title</div>
                                <p style={{marginTop:'10px'}} className="abt-text align-justify">This is where the story begings This is where the story begings This is where the story begings This is where the story begingsThis is where the story begings This is where the story begings This is where the story begingsThis is where the story begingsThis is where the story begings</p>
                            </div>
                            </div>
                            <br/>
                         </div>
                     </div>
                 </div>


                <div className="row no-margin" style={{display:'flex',justifyContent:'center'}}>
                    <div className="col-lg-10 no-padding">
                        <div className="abt-box-sp " style={{display:'flex',justifyContent:'center', alignItems:'center'}}>

                        <div className="staff-prev staff-nav-box blue-sec-bg white-color">
                            <i className="fa fa-arrow-left" aria-hidden="true"></i>
                        </div>
                        <div className=" project-staffs owl-carousel owl-box" >

                        <div className="abt-tp-sp align-center owl-item">
                                <div style={{display:'flex',justifyContent:'center'}}>
                                    <img src={pimg} className="abt-img-sm" alt='member name' />
                                </div>
                                <div>
                                     <div className="db-h40 blue-pry-color"><b>This is My Name</b></div>
                                    <div className="db-h4"> Job title</div>
                                </div>
                            </div>

                            <div className="owl-item abt-tp-sp align-center ">
                                <div style={{display:'flex',justifyContent:'center'}}>
                                    <img src={pimg} className="abt-img-sm-active" alt='member name' />
                                </div>
                                <div>
                                     <div className="db-h40 blue-pry-color"><b>Prof. John Jackson</b></div>
                                    <div className="db-h4"> Job title</div>
                                </div>
                            </div>

                            <div className=" owl-item abt-tp-sp align-center">
                                <div style={{display:'flex',justifyContent:'center'}}>
                                    <img src={pimg} className="abt-img-sm" alt='member name' />
                                </div>
                                <div>
                                     <div className="db-h40 blue-pry-color"><b>Dr. Suberu Ajani</b></div>
                                    <div className="db-h4"> Job title</div>
                                </div>
                            </div>
                            

                            <div className="abt-tp-sp align-center owl-item">
                                <div style={{display:'flex',justifyContent:'center'}}>
                                    <img src={pimg} className="abt-img-sm" alt='member name' />
                                </div>
                                <div>
                                     <div className="db-h40 blue-pry-color"><b>This is My Name</b></div>
                                    <div className="db-h4"> Job title</div>
                                </div>
                            </div>

                            </div>

                            <div className="staff-next staff-nav-box blue-sec-bg white-color">
                                <i className="fa fa-arrow-right" aria-hidden="true"></i>
                            </div>
                             
                        </div>
                    </div>
                </div>




                <br/> <br/>




                <div className="main-padding" >
                    <div className="row no-margin" style={{display:'flex',justifyContent:'center'}}>
                        <div className="col-lg-10 no-padding">
                            <div className="db-h10 blue-pry-color">Board of Trustees</div>
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


                <div className="row no-margin" style={{display:'flex',justifyContent:'center'}}>
                    <div className="col-lg-10 no-padding">
                        <div className="abt-box-sp">
                                <div>wtkwht</div>
                            </div>
                    </div>
                </div>





                <br/> <br/>


                <div className="main-padding" >
                    <div className="row no-margin" style={{display:'flex',justifyContent:'center'}}>
                        <div className="col-lg-10 no-padding">
                            <div className="db-h10 blue-pry-color">National Advisory Council</div>
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


                <div className="row no-margin" style={{display:'flex',justifyContent:'center'}}>
                    <div className="col-lg-10 no-padding">
                        <div className="abt-box-sp">
                                <div>wtkwht</div>
                            </div>
                    </div>
                </div>





                <br/>
 

             </div>
              
        )
    }
}

export default HomeMap;




