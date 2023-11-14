import React from 'react';
import "./gmap.css";
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {lat: 6.8448775, lng: 79.940426};

const Gmap = () => {
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDVlbSYdwuBN14RMm3YYgiLXfMftOIP3pg"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <div className={'reach-map'}>
            <div className={'map-container'} id="map">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={17}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >
                    { /* Child components, such as markers, info windows, etc. */}
                    <></>
                </GoogleMap>
            </div>
        </div>

    ) : <></>
    // (
    //     <div className={'reach-map'}>
    //         <div className={'map-container'} id="map"></div>
    //     </div>
    // )

}

export default Gmap;
