import React, {Component} from 'react';
import facebook from '../../img/fb.png';
import twitter from '../../img/tw.png';
import instagram from '../../img/is.png';

class Footer extends React.Component{
    render(){
        return(
             <div className="no-padding no-margin footer-bag">
                 <div className="row green-ter-bg main-padding no-margin">
                    <div className="col-md-4 small-margin-top">
                        <h5 className="green-pry-color">Get Involved</h5>
                        <p className="footer-text-1">Governance Meter NG is an initiative of <b> The <a className='green-sec-color' href='https://citizennetwork.org.ng'>Citizen Network of Nigeria</a></b>. <a className="green-pry-color" href=''><b> Get involved </b></a> with the Governance Performance Index to improve governance in your local community</p>
                        <hr/>
                        <h6 className="green-pry-color">Connect on Social Media</h6>
                        <span className="footer-social-bag green-sec-bg">
                            <a href="https://www.facebook.com/Governance-Meter-NG-100160518045418/">
                                <img src={facebook} className="footer-social-icon" />
                            </a>
                        </span>
                        <span className="footer-social-bag green-sec-bg">
                            <a href="https://twitter.com/GovMeterNG">
                                <img src={twitter} className="footer-social-icon" />
                            </a>
                        </span>
                        <span className="footer-social-bag green-sec-bg">
                            <a href="https://instagram.com/GovMeterNG">
                                <img src={instagram} className="footer-social-icon" />
                            </a>
                        </span>
                    </div>
                    <div className="col-md-4 small-margin-top">
                        <h5 className="green-pry-color">Quick Links</h5>
                        <div>
                            <a className="green-sec-color footer-links" href=''>Resources</a>
                        </div>
                        <hr />
                        <p className="footer-text-1">We share new and insights and updates from the GPI. Subscribe to our  newsletter so you don't miss out</p>
                        <a href="" className="footer-button">Subscribe</a>
                    </div>
                    <div className='col-md-4 small-margin-top'>
                        <h6 className="green-pry-color">Make  a gift to support our work</h6>
                        <p>Support our mission to inspire positive change</p>
                        <a href="" className="footer-button">Donate Now</a>
                    </div>
                 </div>
             </div>
        )
    }
}

export default Footer;