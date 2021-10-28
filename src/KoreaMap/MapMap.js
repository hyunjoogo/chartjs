import React, {useEffect, useRef, useState} from "react";
import {ComposableMap, Geographies, Geography, ZoomableGroup} from "react-simple-maps";

const geoUrl = 'https://raw.githubusercontent.com/markmarkoh/datamaps/master/src/js/data/kor.topo.json'

const MapMap = () => {
  // const [geoUrl, setGeoUrl] = useState();
  // useEffect(() => {
  //   fetch('https://raw.githubusercontent.com/markmarkoh/datamaps/master/src/js/data/kor.topo.json')
  //     .then(setGeoUrl)
  // }, [])
  //
  // if (!geoUrl) {
  //   return null;
  // }

  return (
    <div>
      <ComposableMap>
        <ZoomableGroup zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  )
}


export default MapMap
