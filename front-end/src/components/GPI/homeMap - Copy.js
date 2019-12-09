import React from 'react';
import StateDataBox from './homeStateDataBox';

class HomeMap extends React.Component{
    render(){ 
        return(
             <div className="no-padding no-margin">
                 <div className="side-margin top-margin">
                     <StateDataBox />
                     <div className="body-map">
                     <iframe className="map-box" title=" Governance Performance Index By State" aria-label="Nigeria states choropleth map" id="datawrapper-chart-xbi6l" src="//datawrapper.dwcdn.net/xbi6l/2/" scrolling="no" frameBorder="0" height="600"></iframe>
                     </div>
                 </div>
             </div>
        )
    }
}

export default HomeMap;




