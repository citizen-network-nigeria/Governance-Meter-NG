import React from 'react';
import mapboxgl from 'mapbox-gl';
import ReactMapboxGl from 'react-mapbox-gl';
import {ZoomControl} from 'react-mapbox-gl';
import {Layer} from 'react-mapbox-gl';
import {GeoJSONLayer} from 'react-mapbox-gl';

mapboxgl.accessToken = "pk.eyJ1IjoiYm9sZGF2IiwiYSI6ImNrM2VicWh6aTFlNXEzanFqeHprcHZiN2sifQ.7IoFNFWJWBgFqYamicfjGw";

class HomeMap extends React.Component{
     constructor(props){
        super(props);
        this.state={
            displayDataBox:'none',
            zoomlevel:2,
            lng: 7.16667,
            lat: 8.83333,
            zoom: this.props.defaultZoom
        }
    }

    componentDidMount() {
        const prop=this.props;
        const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/boldav/ck3fkht630nse1cnzjpopwug1',
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom,
        });


    map.boxZoom.enable(); 
    map.addControl(new mapboxgl.NavigationControl());
    map.getCanvas().style.cursor='auto';
    map.on('click', function(e){
         var feat= map.queryRenderedFeatures(e.point, {
                layers:['states']
                })
         if(feat.length<1){
          alert("Select a region within Nigeria's map");
             }
         else { prop.boxControl(feat[0].properties.state);   }
     }); 
     var tooltip = new mapboxgl.Popup({
         closeButton:false,
         closeOnClick:true
     });
     map.on('mouseenter', 'states', function(e){
        map.getCanvas().style.cursor='pointer';
       /* var feat= map.queryRenderedFeatures(e.point, { layers:['states'] });
        if(feat.length>0){ 
             var cord =  e.features[0].properties.state
            var desc ="what the heaven is going on";

            tooltip.setLngLat(cord).setHTML(desc).addTo(map);
                console.log(cord)
        } */
     });
     map.on('mouseleave', 'states', function(){
         map.getCanvas().style.cursor='auto';
         //tooltip.remove();
     })

//end of componentDidMount
    }

    setZoom=(val)=>{ alert(this.state.defaultZoom)
        this.setState(
            state=>({
                zoom:val
            }))
    }

     
    render(){ 
        return(
            <div>
            <div ref={el => this.mapContainer = el} className="mapContainer" />
            
            </div>
        )
    }
}

export default HomeMap;




