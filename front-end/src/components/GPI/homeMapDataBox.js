import React from 'react';

class DataBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            display:'none'
        }
    }

    render(){ 
        return(
             <div className="databox-bag" style={{display:this.props.display}}>
                 <div className="db-bag-hd white-color blue-pry-bg">
                     <span>Governance Performance Index</span>
                     <div onClick={this.props.closeBox} className="close-box blue-sec-bg">X</div>
                 </div>

                 <div className="db-body">
                        <div className="flex-bag">
                            <div className="db-h1">{this.props.state}</div>
                            <div className="flex-bag">
                                <div className="db-box1">
                                    <div className="db-h40">score</div>
                                    <div className="db-h10">64.3%</div>
                                </div>
                                <div className="db-box2">
                                    <div className="db-h40">rank</div>
                                    <div className="db-h10">13th</div>
                                </div>
                            </div>
                        </div>

                        <div className="db-button">view scorecard</div>

                        <div className="db-h30">Main Categories </div>
                        <div className="row" style={{marginTop:"0.8em"}}>
                            <div className="col-sm-3">
                                 <div className="db-hd" > 
                                    <div className="green-pry-color db-hd-a">Human Development </div>
                                    <div className="db-h20">39.8%</div>
                                 </div></div>
                            <div className="col-sm-3">
                                <div className="db-eo"><div className="blue-pry-color db-hd-a">Economic Opportunity</div>
                                    <div className="db-h20">64.8% </div>
                                </div></div>
                            <div className="col-sm-3 ">
                                <div className="db-srl"><div className="lemon-sec-color db-hd-a">Safety & Rule of Law</div>
                                    <div className="db-h20">29.4% </div>
                                </div></div>
                            <div className="col-sm-3 ">
                                <div className=" db-ihr"><div className="milk-pry-color db-hd-a">Inclusion & Human Rights</div>
                                    <div className="db-h20">44.7%</div>
                                </div></div>

                        </div>
                        <hr style={{marginTop:"0.3em"}}/>
                        <div className="flex-bag">
                            <div className="col-md-8 db-sm-n">
                                <div>
                                    <div style={{marginBottom:'1em'}} className="db-best-box">
                                        <div style={{marginBottom:'0.3em'}} className="db-h40">Highest Indicator Scores</div>
                                        <div>
                                        <div className="flex-bag">
                                                <div className="db-txt">Access to Public & Legislative Information</div>
                                                <div className="db-txt-s">78.9%</div>
                                            </div>
                                            <div className="flex-bag">
                                                <div className="db-txt">Promotion of Socio-economic Integration of Youth</div>
                                                <div className="db-txt-s">76.3%</div>
                                            </div>
                                            <div className="flex-bag">
                                                <div className="db-txt">Promotion of Gender Equality</div>
                                                <div className="db-txt-s">74.8%</div>
                                            </div>
                                            <div className="flex-bag">
                                                <div className="db-txt">Business Regulatory Environment</div>
                                                <div className="db-txt-s">73.4%</div>
                                            </div>
                                            <div className="flex-bag">
                                                <div className="db-txt">Promotion of Gender Equality</div>
                                                <div className="db-txt-s">68.9%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{marginTop:'1.5em'}} className="db-bad-box">
                                         
                                                <div style={{marginBottom:'0.3em'}} className="db-h40">Lowest Indicator Scores</div>
                                                <div>
                                                <div className="flex-bag">
                                                        <div className="db-txt">Reliability of Police Services</div>
                                                        <div className="db-txt-s">12.9%</div>
                                                    </div>
                                                    <div className="flex-bag">
                                                        <div className="db-txt">Safety and reliability of road transport</div>
                                                        <div className="db-txt-s">13.3%</div>
                                                    </div>
                                                    <div className="flex-bag">
                                                        <div className="db-txt">Access to expenditure records</div>
                                                        <div className="db-txt-s">19.8%</div>
                                                    </div>
                                                    <div className="flex-bag">
                                                        <div className="db-txt">Un-likelihood of Human Rights Abuses by the Government</div>
                                                        <div className="db-txt-s">21.4%</div>
                                                    </div>
                                                    <div className="flex-bag">
                                                        <div className="db-txt">Satisfaction with Basic Health Services</div>
                                                        <div className="db-txt-s">23.5%</div>
                                                    </div>
                                                </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr/>
                        <div  style={{float:"right", marginBottom:"1.5em"}} className="db-button">view scorecard</div>
                 </div>
                 
                  
             </div>
        )
    }
}

export default DataBox;




