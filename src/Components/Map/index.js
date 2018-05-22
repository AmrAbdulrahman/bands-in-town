import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { withStyles } from '@material-ui/core/styles';
import Strings from 'Services/Strings';
import { envConfig } from 'Services/Env';
import styles from './styles';

const GoogleMapBaseComponent = ({ location }) => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={location}>
    <Marker position={location} />
  </GoogleMap>
);

const MapWithGoogle = withGoogleMap(GoogleMapBaseComponent);
const MapWithScripts = withScriptjs(MapWithGoogle);

const Map = props => {
  const { classes } = props;

  return (
    <MapWithScripts
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${envConfig.googleMapKey}&v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={<div className={classes.loading}>{Strings.loading}</div>}
      containerElement={<div className={classes.container} />}
      mapElement={<div className={classes.mapElement} />}
      {...props}
    />
  );
}

export default withStyles(styles)(Map);
