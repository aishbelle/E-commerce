import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import Featureproduct from "./components/Featureproduct";
const Home = () => {
 const data={
    name:"Appic2 Store",
  }
  return(
  <>
    <HeroSection myData={data} />
    <Featureproduct/>
    <Services/>
    <Trusted/>
    </>
    );
};


export default Home;
