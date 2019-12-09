import React from 'react';
import DataBox from './homeMapDataBox';
import {Map, GoogleMapReact, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Mapboxx from './homeMapbox';

const mapStyle={
    width:'100%',
    height:'95%'
}
const iniCenter={
    lat:40.854885,
    lng:-88.081807
}
const config={
    key: "AIzaSyBAXPhuJzeUmhzPyk_J4NjjwEJDFUjcENI",
    language:'en'
}

class HomeMap extends React.Component{
    constructor(props){
        super(props);
        this.state={
            displayDataBox:'none',
            state:'Lagos',
            defaultZoom:5
        }
    }

    activateDataBox=(val)=>{
        this.setState(
            state=>({
                state:val,
                displayDataBox:'block'
            })
        )
    }
    closeDataBox=(val)=>{   
        this.setState(
            state=>({
                displayDataBox:'none',
                defaultZoom:6
            })
        )
    }

    returnZoom=(val)=>{
        this.setState(
            state=>({
                defaultZoom:val
            }))
    }

    googleConfig=()=>{
        const config={
            apiKey: "AIzaSyBAXPhuJzeUmhzPyk_J4NjjwEJDFUjcENI",
            language:'en'
        }
        return config
    }

    render(){ 
        return(
             <div className="no-padding no-margin">
                 <div className="">
                     <div className="  main-padding">
                         <div className="db-h1">2020 GPI by State</div>
                     </div>
                     <div className="databox-main ">
                     <div className="body-map">

                        <div id="map" className="leaf"> 
                             <Mapboxx   boxControl={this.activateDataBox}
                                        defaultZoom={this.state.defaultZoom}
                              />
                        </div> <br />
                          

                     <div className="map-box" title=" Governance Performance Index By State" aria-label="Nigeria states choropleth map" id="datawrapper-chart-xbi6l" src="//datawrapper.dwcdn.net/xbi6l/2/" scrolling="no" frameBorder="0" height="600"></div>
                     </div>
                            <br/>
                           
                          <DataBox  closeBox={this.closeDataBox}
                                    state ={this.state.state}
                                    display={this.state.displayDataBox}
                           />
                     </div>
                     <div className="main-padding" style={{paddingTop:'0px', marginTop:'-30px'}}>
                         <div className="row">
                             <div className="col-sm-2">
                                <div className="db-h4">GPI Score Range</div>
                            </div>
                            <div className="col-sm-10">
                                <div className="gpi-ff">
                                    <div style={{backgroundColor:"#f90808"}} className="gpi-col-bx"></div>
                                    <span className="db-txt-s">0-10</span>
                                </div>
                                <div className="gpi-ff">
                                    <div style={{backgroundColor:"#e42727"}} className="gpi-col-bx"></div>
                                    <span className="db-txt-s">10-20</span>
                                </div>
                                <div className="gpi-ff">
                                    <div style={{backgroundColor:"#da4605"}} className="gpi-col-bx"></div>
                                    <span className="db-txt-s">20-30</span>
                                </div>
                                <div className="gpi-ff">
                                    <div style={{backgroundColor:"#ec9722"}} className="gpi-col-bx"></div>
                                    <span className="db-txt-s">30-40</span>
                                </div>
                                <div className="gpi-ff">
                                    <div style={{backgroundColor:"#e6db07"}} className="gpi-col-bx"></div>
                                    <span className="db-txt-s">40-50</span>
                                </div>
                                <div className="gpi-ff">
                                    <div style={{backgroundColor:"#a9d865"}} className="gpi-col-bx"></div>
                                    <span className="db-txt-s">50-60</span>
                                </div>
                                <div className="gpi-ff">
                                    <div style={{backgroundColor:"#9ce206"}} className="gpi-col-bx"></div>
                                    <span className="db-txt-s">60-70</span>
                                </div>
                                <div className="gpi-ff">
                                    <div style={{backgroundColor:"#2dc321"}} className="gpi-col-bx"></div>
                                    <span className="db-txt-s">70-80</span>
                                </div>
                                <div className="gpi-ff">
                                    <div style={{backgroundColor:"#107b08"}} className="gpi-col-bx"></div>
                                    <span className="db-txt-s">80-90</span>
                                </div>
                                
                            </div>
                         </div>
                     </div>
                 </div>
             </div>
        )
    }
}

export default HomeMap;




