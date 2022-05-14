import React from 'react';
import Menubar from './Menubar';
import { GoogleMap, InfoWindow, LoadScript, Marker  } from '@react-google-maps/api'
import useGeolocation from "react-navigator-geolocation/lib/index";
import{ formatRelative} from "date-fns"
import usePlacesAutocomplete, {getGeocode, getLatLng,} from "use-places-autocomplete"
import {Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption,}from "@reach/combobox"
import "@reach/combobox/styles.css"
import '../css/Map.css';

const libraries = ["places"]
// Main
const Map = (props) => {
    const mapStyles = {
        top: "5rem",      
        height: "80vh",
        width: "100%"};
    
    const [markers, setMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState(null);
    

    const onMapClick = React.useCallback((event) => {
        setMarkers(current=>[...current,
            {
                lat:event.latLng.lat(),
                lng:event.latLng.lng(),
                time: new Date(),
            },
        ]);
    }, []);

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    },[]);

    const panTo = React.useCallback(({lat, lng}) => {
        mapRef.current.panTo({lat, lng});
        mapRef.current.setZoom(18);

    },[]);



    const { isAvailable, isEnabled, coords, suppressRequest } = useGeolocation({ suppressOnMount: false });
    

    

    return isAvailable ? (
        isEnabled ? (   
          <div>
              <div><Menubar/></div>
              

            <div className='mapContainer'>
            
            <LoadScript googleMapsApiKey='AIzaSyC5of-OwPJ-veVSDun2Xr5BglgGlwrFbuM' libraries={libraries}>
            <Search panTo={panTo}></Search>
            <div className="map">
            <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={{lat:coords?.latitude,lng:coords?.longitude}} 
            onClick={onMapClick} onLoad={onMapLoad}>
                {markers.map(marker => (<Marker key={marker.time.toISOString()} position={{lat:marker.lat, lng:marker.lng}} 
                    onClick={()=>{
                        setSelected(marker);
                    }}></Marker>))}
                {selected ? (<InfoWindow position={{lat:selected.lat,lng:selected.lng}} 
                onCloseClick={() => {
                    setSelected(null);

                }}>
                    <div>
                        <h4>Spotted!</h4>
                        <p style={{color:'black'}}>Spotted {formatRelative(selected.time, new Date())}</p>
                    </div>
                </InfoWindow>) : null}
            </GoogleMap>
            </div>
            </LoadScript>
            
            </div>
          </div>
        ) : isEnabled === false ? (
          <h1>Location permission disabled</h1>
        ) : (
          <div>
          </div>
        )
      ) : (
        <h1>Your browser doesn't support Geolocation API</h1>
      );
    };


export default Map;




function Search({panTo}){
    const {
        ready,
        value,
        suggestions:{status, data},
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            location:{lat: () => -36.848461, lng: () => 174.763336},
            radius: 200 * 1000,
        },
    });
    return(
        <div className="search">
            <Combobox style={{color:'black', height:'30px', width:"200px"}} onSelect={async (address) => {

                setValue(address, false);
                clearSuggestions()

                try{
                    const results = await getGeocode({address});
                    const {lat, lng} = await getLatLng(results[0]);
                    panTo({lat, lng});

                }catch(error){
                    console.log("Error!");
                }
                //console.log(address)
            }}>
            
            <ComboboxInput value={value} onChange={(e) => {
                setValue(e.target.value)
            }}
            disabled={!ready}
            placeholder="Enter an address:"
            style={{color:"black",width : 300, height:50}}
            />
            <ComboboxPopover style={{color:'black'}}>
                {status === "OK" && data.map(({id, description}) => (<ComboboxOption key={id} value={description}/>
                ))}
            </ComboboxPopover>
            </Combobox>

        </div>
    );
}