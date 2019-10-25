import React, {Component} from 'react';
 
class Hometab extends React.Component{
    render(){ 
        return(
             <div className="no-padding no-margin">
                 <div className="">
                     <div className="body-tab main-padding">
                     <a href='' className="subhead-tab tab-align">Map Visualization</a>
                     <a href='' className="subhead-tab tab-align">Result Board</a>
                     <a href='' className="subhead-tab tab-align">Compare States</a>
                     <a href='' className="subhead-tab tab-align">Indicator Stories</a>
                     <a href='' className="subhead-tab tab-align-last-odd">Download</a>
                     </div>
                 </div>
             </div>
        )
    }
}

export default Hometab;