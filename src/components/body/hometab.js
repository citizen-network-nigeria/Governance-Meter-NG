import React, {Component} from 'react';
 
class Hometab extends React.Component{
    render(){ 
        return(
             <div className="no-padding no-margin">
                 <div className="side-margin">
                     <div className="body-tab main-padding">
                     <a href='' className="subhead-tab">Map Visualization</a>
                     <a href='' className="subhead-tab">Result Board</a>
                     <a href='' className="subhead-tab">Compare States</a>
                     <a href='' className="subhead-tab">Indicator Stories</a>
                     <a href='' className="subhead-tab">Download</a>
                     </div>
                 </div>
             </div>
        )
    }
}

export default Hometab;