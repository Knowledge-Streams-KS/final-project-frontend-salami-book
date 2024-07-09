import React from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";

const GoogleMapComponent = (props) => {

  const apiKey = "AIzaSyC41SAjDOYO2mShmtFNEiLei7W-UKWcyxs";
  return (
    <>
      <APIProvider apiKey={apiKey}>
        <div className="h-32">
          <Map zoom={16} center={props.position} mapId={"d8b26f0df589f3a6"}>
            <AdvancedMarker position={props.position}>
              <Pin
                background={"grey"}
                borderColor={"green"}
                glyphColor={"blue"}
              />
            </AdvancedMarker>
          </Map>
        </div>
      </APIProvider>
    </>
  );
};

export default GoogleMapComponent;
