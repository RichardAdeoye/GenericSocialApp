import React, {Component} from 'react';
import './TrackerMap.css';
import {GoogleMap, withScriptjs, withGoogleMap,Marker} from 'react-google-maps';

class TrackerMap extends Component{
    render() {
      return (
           <GoogleMap defaultZoom={10}
            defaultCenter={{lat: 45, lng: -75}}>

                <Marker position={{lat:30, lng: -45}} />

           </GoogleMap>         
            
      )
    }
  }
  
  const WrappedMap = withScriptjs(withGoogleMap(TrackerMap));

  export default function MapView() {
      return <div style ={{width: '100vw', height: '100vh'}}>
          <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAjTx4Br5zjkXVtGW6WzQEJEO63UbMdWTs`}
          loadingElement={<div style={{height:"100%"}} />}
          containerElement={<div style={{height:"100%"}} />}
          mapElement={<div style={{height:"100%"}} />}
          />
      </div>;
  } 