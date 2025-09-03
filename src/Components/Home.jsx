import React, { useState } from "react";
import Header from "../Components/Header";
import Body from "./Body";

const Home = () => {
  return (
    <div className="p-[20px]">
      <Header />
      <Body/>
    </div>
  );
};

export default Home;
