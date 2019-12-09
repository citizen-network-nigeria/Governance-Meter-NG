import React from 'react';
import mapboxgl from 'mapbox-gl';
import ReactMapboxGl from 'react-mapbox-gl';
import {ZoomControl} from 'react-mapbox-gl';
import {Layer} from 'react-mapbox-gl';
import {GeoJSONLayer} from 'react-mapbox-gl';

mapboxgl.accessToken = "pk.eyJ1IjoiYm9sZGF2IiwiYSI6ImNrM2VicWh6aTFlNXEzanFqeHprcHZiN2sifQ.7IoFNFWJWBgFqYamicfjGw";

const Map = new ReactMapboxGl({
    accessToken:"pk.eyJ1IjoiYm9sZGF2IiwiYSI6ImNrM2VicWh6aTFlNXEzanFqeHprcHZiN2sifQ.7IoFNFWJWBgFqYamicfjGw",
    interactive:true
});
const mapStyle="mapbox://styles/boldav/ck3fkht630nse1cnzjpopwug1";


class HomeMap extends React.Component{
    constructor(props){
        super(props);
        this.state={
            displayDataBox:'none',
            zoomlevel:2,
            lng: 7.16667,
            lat: 8.83333,
            zoom: 5
        }
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/boldav/ck3fkht630nse1cnzjpopwug1',
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom,
        });

    map.getCanvas().style.cursor='auto';
    map.on('click', function(){
        console.log(map.getCenter());
    });    
        }

    handleClick=(map, event)=>{  }

     
     

    render(){ 
        return(
            <div>
            <div ref={el => this.mapContainer = el} className="mapContainer" />
             
            </div>
        )
    }
}

export default HomeMap;




