import React, { useEffect } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from "react-redux";
import  { getIcon } from "../utils/constants";
import { clearRoute, open } from "../redux/slices/DetailSlice";
import { getFlights } from "../redux/actions";

const Map = () => {
  const dispatch = useDispatch();
  const { flights } = useSelector((store) => store.flight);
  const { route } = useSelector((store) => store.detail);

  useEffect(()=>{
  const id = setInterval(()=>   dispatch(getFlights()), 10000)
  return ()=> clearInterval(id)

},[])  

  return (
    <MapContainer center={[39.0742, 21.8243]} zoom={5} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {flights.map((i) => (
        <Marker
          position={[i.lat, i.lng]}
          icon={getIcon(i.deg)}
         /*  rotationAngle={i.deg - 45} */
        >
          <Popup>
            <div className="popup">
              <span>{`Code: ${i.code}`}</span>
              <button
                onClick={() => {
                  dispatch(open(i.id));
                }}
              >
                Detail
              </button>
              {route.length >0 && (
                <button onClick={() => dispatch(clearRoute())}>
                  Clear route
                </button>
              )}
            </div>
          </Popup>
        </Marker>
      ))}

      <Marker position={[39.0742, 21.8243]}>
        <Popup>Center</Popup>
      </Marker>

      {route && <Polyline positions={route} />}
    </MapContainer>
  );
};

export default Map;
