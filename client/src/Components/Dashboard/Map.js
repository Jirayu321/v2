import * as React from "react";
import Map, { NavigationControl, Marker } from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

function Map1() {
  return (
    <div>
      <Map
        mapLib={maplibregl}
        initialViewState={{
          longitude: 100.523186,
          latitude: 13.736717,
          zoom: 6,
        }}
        style={{ width: "45vw", height: "40vh" }}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=qIIg1bS0SsYVMmXn5Bn5"
      >
        <NavigationControl position="top-left" />
        <Marker longitude={100.523186} latitude={13.736717} color="red" />
      </Map>
    </div>
  );
}

export default Map1;
