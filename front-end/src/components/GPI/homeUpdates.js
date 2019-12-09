import React from 'react';
import { Link} from 'react-router-dom';
 
class HomeUpdates extends React.Component{
    render(){ 
        return(
             <div className="no-padding no-margin top-margin">
                 <div className="side-margin">
                     <div className="white-bg main-padding">
                        <div className='row no-margin'>
                        <div className=" col-md-4 ">
                        <div className="home-tb">
                        <h5 className="green-pry-color no-margin">Updates</h5> <Link to="indicator-stories" className="home-bd">View All</Link>
                        </div>
                                <div className="story-box">
                                    <div className="story-head">The first news of the century has just landed</div>
                                    <p className="story-text">this is the comment we are talking about. it is about how we don't feel secure in Borno. But never mind, there has been consistent progress. It's just that we cannot measure it. But now, everything will progress quickly because we can now measure.</p>
                                </div>
                                <div className="story-box">
                                    <div className="story-head">This is a fantastic piece of news</div>
                                    <p className="story-text">this is the comment we are talking about. it is about how we don't feel secure in Borno. But never mind, there has been consistent progress. It's just that we cannot measure it. But now, everything will progress quickly because we can now measure.</p>
                                </div>
                            </div>

                            <div className=" col-md-4">
                            <div className="home-tb">
                            <h5 className="green-pry-color no-margin">Social Feed</h5> <Link to="" className="home-bd">Twitter</Link>
                            </div>
                            <div>
                                    <a className="twitter-timeline green-sec-color footer-links" data-height="320" data-link-color="#19CF86" href="https://twitter.com/GovMeterNG?ref_src=twsrc%5Etfw">Tweets By GovMeterNG</a>
                                            
                                </div>
                            </div>

                            <div className=" col-md-4">
                            <div className="home-tb">
                            <h5 className="green-pry-color no-margin">Social Feed</h5> <Link to="" className="home-bd">Facebook</Link>
                            </div>
                                <div>
                                    <div className="fb-page" 
                                        data-href="https://www.facebook.com/Governance-Meter-NG-100160518045418/" data-tabs="timeline"
                                        data-width="" data-height="320"
                                        data-hide-cover="false"
                                        data-show-facepile="false">
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

export default HomeUpdates;