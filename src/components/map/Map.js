import GoogleMap from 'google-map-react';
import React, { Component } from 'react';

class Map extends Component {

  render() {
    return (
      <GoogleMap
        bootstrapURLKeys={{ key: 'AIzaSyDm2ODNd4s4niGdRvKekMu8AWnQlSSVboY' }}
        defaultZoom={6}
        margin={[30, 30, 30, 30]}
        center={[39.6007571, -3.8420605]}
      >
      </GoogleMap>
    );
  }
}

export default Map;