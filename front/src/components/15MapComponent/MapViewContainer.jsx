import React, { useEffect, useState, useContext } from "react";
import Map from "./Map";
import http from "../10Services/httpService";
import apiEndpoint from "../10Services/endpoint";
import SideMenu from "./SideMenu";
import { EsriProvider } from "leaflet-geosearch";
import AuthContext from "../11Context/AuthContext";

export default function MapTab() {
  const { state } = React.useContext(AuthContext);

  const [kindergartens, setKindergartens] = useState([]);
  const [activeKindergarten, setActiveKindergarten] = useState(null);
  const [userAddress, setUserAddress] = useState("");
  const [userCoordinates, setUserCoordinates] = useState("");

  const provider = new EsriProvider();

  const setActive = (kindergarten) => {
    setActiveKindergarten(kindergarten);
  };

  const setInactive = () => {
    setActiveKindergarten(null);
  };

  const setActiveThroughMarker = (kindergarten) => {
    setActiveKindergarten(kindergarten);
    var tgtElement = document.getElementById(kindergarten.id);
    tgtElement.scrollIntoView({ block: "center", behavior: "smooth" });
  };

  async function getKindergartens() {
    await http
      .get(`${apiEndpoint}/api/darzeliai/visi`)
      .then((response) => setKindergartens(response.data));
  }

  async function getUserAddress() {
    await http
      .get(`${apiEndpoint}/api/users/user`)
      .then((response) => setUserAddress(response.data.address));
  }

  useEffect(() => {
    getKindergartens();
    if (state.role === "USER") {
      getUserAddress();
    }

    if (userAddress !== "") {
      provider
        .search({ query: userAddress })
        .then((response) =>
          setUserCoordinates(response[0].x + "," + response[0].y)
        )
        .catch((error) => "");
    }
  }, [userAddress]);

  if (activeKindergarten !== null) {
  }
  return (
    <div>
      {/*################################# SIDE MENU ######################################## */}

      <div className="container pt-4">
        <div className="row ">
          <div className="bg-light pb-3 col-lg-3">
            <SideMenu
              kindergartens={kindergartens}
              activeKindergarten={activeKindergarten}
              setActive={setActive}
              setKindergartens={setKindergartens}
            />
          </div>

          {/* ############################## MAPAS ######################################## */}

          <div className="col-lg-9">
            <Map
              kindergartens={kindergartens}
              activeKindergarten={activeKindergarten}
              setActive={setActive}
              setInactive={setInactive}
              setActiveThroughMarker={setActiveThroughMarker}
              userCoordinates={userCoordinates}
              userAddress={userAddress}
              state={state}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
