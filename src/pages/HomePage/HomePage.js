import React from "react";
import Banner from "./Banner";
import LichChieuRap from "./LichChieuRap";
import ListMovie from "./ListMovie";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <ListMovie />
      <LichChieuRap />
    </div>
  );
};

export default HomePage;
