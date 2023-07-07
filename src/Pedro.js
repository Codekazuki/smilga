import "./App.css";
import { useState } from "react";

const Pedro = () => {
  const planets = [
    { name: "Mars", alias: "marimapo", isGasPlanet: true },
    { name: "Mecury", isGasPlanet: false },
    { name: "Pluto", isGasPlanet: true },
    { name: "Saturn", isGasPlanet: false },
    { name: "Uranus", isGasPlanet: true },
    { name: "Jupiter", isGasPlanet: false },
  ];

  return (
    <div>
      {planets.map((value, key) => value.isGasPlanet && <h1>{value.name}</h1>)}
    </div>
  );
};
export default Pedro;
