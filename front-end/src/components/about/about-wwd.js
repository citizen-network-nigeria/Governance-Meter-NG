import React from 'react';
import gpiInfographic from '../../img/home-bg.png'
import Video from './about-video'; 

class HomeMap extends React.Component{
    render(){ 
        return(
             <div className="no-padding no-margin">
                 <div className="main-padding" >
                    <div className="row">
                        <div className="col-md-7">
                            <div className="abt-box"> 
                                <p className="abt-text">This is where the story begings This is where the story begings This is where the story begings This is where the story begingsThis is where the story begings This is where the story begings This is where the story begingsThis is where the story begingsThis is where the story begings</p>
                                <p className="abt-text">This is where the story begings This is where the story begings This is where the story begings This is where the story begingsThis is where the story begings This is where the story begings This is where the story begingsThis is where the story begingsThis is where the story begings</p> <br/>
                                <div className="db-h20 blue-pry-color">Assessing the things that matter</div>
                                <br/>
                                <p className="abt-text">This is where the story begings This is where the story begings This is where the story begings This is where the story begingsThis is where the story begings This is where the story begings This is where the story begingsThis is where the story begingsThis is where the story begings</p>
                                <p className="abt-text">This is where the story begings This is where the story begings This is where the story begings This is where the story begingsThis is where the story begings This is where the story begings This is where the story begingsThis is where the story begingsThis is where the story begings</p>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="abt-box">
                                <div className="abt-bloq">
                                    <div className="db-h30 blue-pry-color align-center">"At this crucial point in our nation's life, we need a new measure that assesses and quantifies the most critical factor to our collective progress and wellbeing as a people: GOVERNANCE. The GPI does just that."</div> <br/>
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


                 <div className="no-margin no-padding" >
                      <div className="row no-padding no-margin">
                      <div className="col-md-6 abt-box-white main-padding">
                          <div className="db-h3 align-center">"Both leaders and citizens alike need access to a locally relevant framework and data in other to better understand the factors shaping development and the progress of the society"</div> <br/>
                          <p className="abt-text">This is where the story begings This is where the story begings This is where the story begings This is where the story begingsThis is where the story begings This is where the story begings This is where the story begingsThis is where the story begingsThis is where the story begings</p>
                      </div>
                      <div className="col-md-6 abt-box-white main-padding">
                          <div className="db-h20 blue-pry-color">True Impact Transforms People's Lives</div>
                                <br/>
                                <p className="abt-text">This is where the story begings This is where the story begings This is where the story begings This is where the story begingsThis is where the story begings This is where the story begings This is where the story begingsThis is where the story begingsThis is where the story begings</p>
                                <p className="abt-text">This is where the story begings This is where the story begings This is where the story begings This is where the story begingsThis is where the story begings This is where the story begings This is where the story begingsThis is where the story begingsThis is where the story begings</p>
                      </div>
                      </div>
                    
                 </div>
             </div>
              
        )
    }
}

export default HomeMap;




