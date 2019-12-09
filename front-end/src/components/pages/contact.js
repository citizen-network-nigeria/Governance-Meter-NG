import React from 'react';
 

class GetInvolved extends React.Component{
    render(){
        return(
            <div className="no-padding no-margin">
                <div className="row no-margin no-padding" style={{display:'flex', justifyContent:'center'}}>
                    <div className="col-lg-9 main-padding">  
                        <div className="db-h3">For Inquiries</div> <hr/>
                        <p style={{color:'#636b6f'}}>
                            <b>Email: </b> info@governancemeter.org.ng <br/>
                            <b>Phone: </b>(+234) 09017246800   <br/>
                            <b>Address: </b>No. 38, Orogun road, Ibadan, Nigeria.
                        </p>
                        <div className="db-h30 blue-pry-color">Leave a message</div>
                         <hr />
                         <form>
                             <div className="row no-margin">
                                    <div className="col-sm-6">
                                        <input placeholder="First Name" name="fname" id="fname" type="text" className="contact-input" />
                                    </div>
                                    <div className="col-sm-6">
                                        <input placeholder="Last Name" name="lname" id="lname" type="text" className="contact-input" />
                                    </div>
                                    <div className="col-sm-6">
                                        <input placeholder="Active Email" name="name" id="name" type="email" className="contact-input" />
                                    </div>
                                    <div className="col-sm-6">
                                        <input placeholder="Phone Number" name="name" id="name" type="number" className="contact-input" />
                                    </div>
                                    <div className="col-sm-6">
                                        <input placeholder="Organization" name="name" id="name" type="text" className="contact-input" />
                                    </div>
                                    <div className="col-sm-6">
                                        <input placeholder="Address" name="name" id="name" type="text" className="contact-input" />
                                    </div>

                                    <div className="col-sm-12">
                                        <input placeholder="Message Subject" name="name" id="name" type="text" className="contact-input" />
                                    </div>

                                    <div className="col-sm-12">
                                        <textarea placeholder="First Name" name="name" id="name" type="text" className="contact-textarea" ></textarea>
                                    </div>
                                         
                                    <div style={{marginTop:'1.2em'}} className="col-sm-6">
                                        <input style={{minWidth:'60%'}}  value="Send Message" name="send" id="send" type="submit" className="subhead-tab-b align-center" />
                                    </div>
                                </div>
                         </form>
                    </div>
                </div>
            </div>
        )
        
    }
}
 

export default GetInvolved;