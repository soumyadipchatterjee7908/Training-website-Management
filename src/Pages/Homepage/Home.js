import React from "react";
import Card from "./Card/Card";
import "./Home.css";

const Home = () => {
  return (
    <div id="home">
      <div id="home-top"></div>
      <div id="card-container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
