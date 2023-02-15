import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { MapContainer, TileLayer } from "react-leaflet";

import axios from "axios";
import FilterTable from "../components/ui/FilterTable";
import PointsCreator from "../components/points/PointsCreator";

import "./Map.css";

const position = [52.561928, -1.464854];

const Map = () => {
  const [restaurantes, setRestaurantes] = useState([]);
  const [filteredRests, setFilteredRests] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
    if (!user) {
      navigate("/");
    }
    const fetchData = async () => {
      const response = await axios("http://localhost:5000/");
      await setRestaurantes(response.data);
    };
    fetchData();
  }, [filteredRests]);

  return (
    <div>
      <FilterTable setFilteredRests={setFilteredRests} rests={restaurantes} />

      <div className="leaflet-container">
        <MapContainer
          center={position}
          zoom={4}
          scrollWheelZoom={true}
          id="mapid"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {restaurantes && <PointsCreator rests={filteredRests} />}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
