import React, { useState } from "react";
import Header from "../Components/Header";
import Body from "./Body";
import Imageslider from "./Imageslider";

const Home = () => {
  return (
    <div className="lg:p-[20px] p-[2px] rounded-[15px]">
      <Header />
      <Body/>
    </div>
  );
};

export default Home;
