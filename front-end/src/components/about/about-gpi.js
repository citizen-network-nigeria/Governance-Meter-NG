import React from 'react';
import gpiInfographic from '../../img/home-bg.png'
import Video from './about-video'; 

class HomeMap extends React.Component{
    render(){ 
        return(
             <div className="no-padding no-margin">
                 <div className="main-padding" >
                     <div className="db-h10 blue-pry-color">How using the GPI as a tracking tool can help to accelerate the achievement of the SDGs in Nigeria</div>
                     <hr />
                    <div className="row">
                        <div className="col-md-7">
                            <div className="abt-box"> 
                                <p className="abt-text">This is where the story begings This is where the story begings This is where the story begings This is where the story begingsThis is where the story begings This is where the story begings This is where the story begingsThis is where the story begingsThis is where the story begings</p>
                                <p className="abt-text">This is where the story begings This is where the story begings This is where the story begings This is where the story begingsThis is where the story begings This is where the story begings This is where the story begingsThis is where the story begingsThis is where the story begings</p> <br/>
                                <div className="db-h20 blue-pry-color">This is the title jor</div>
                                <br/>
                                <p className="abt-text">This is where the story begings This is where the story begings This is where the story begings This is where the story begingsThis is where the story begings This is where the story begings This is where the story begingsThis is where the story begingsThis is where the story begings</p>
                                <p className="abt-text">This is where the story begings This is where the story begings This is where the story begings This is where the story begingsThis is where the story begings This is where the story begings This is where the story begingsThis is where the story begingsThis is where the story begings</p>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="abt-box">
                                <div className="abt-bloq">
                                    <div className="db-h30 blue-pry-color align-center">"GPI brings focus to finer grain of information that can help development expert gain crucial insight in propelling the attainment of the Sustainable Development Goals for Nigeria"</div> <br/>
                                    <p className="abt-text">Whoever said so. We'll give another sentence then show your video below.</p>
                                </div>
                                <Video url="https://www.youtube.com/watch?v=Rl2ZhcMGKIE" source="youtube" />
                            </div>
                        </div>
                    </div>
                 </div>


                 <div>
                     <img className="abt-bg-img" src={gpiInfographic} alt="GPI Indicators" />
                 </div>


                 <div className="no-margin no-padding white-bg" > <br/>
                      <div className="row no-padding no-margin" style={{display:'flex',justifyContent:'center'}}>
                      <div className="col-lg-9 main-padding">
                          <div className="db-h20 blue-pry-color">True Impact Transforms People's Lives</div>

                          <p style={{marginTop:'10px'}} className="abt-text align-justify">This is where the story begings This is where the story begings This is where the story begings This is where the story begingsThis is where the story begings This is where the story begings This is where the story begingsThis is where the story begingsThis is where the story begings</p>

                          <p style={{marginTop:'10px'}} className="abt-text align-justify">This is where the story begings This is where the story begings This is where the story begings This is where the story begingsThis is where the story begings This is where the story begings This is where the story begingsThis is where the story begingsThis is where the story begings</p>
                      </div>
                       
                      </div>
                    
                 </div>
             </div>
              
        )
    }
}

export default HomeMap;




