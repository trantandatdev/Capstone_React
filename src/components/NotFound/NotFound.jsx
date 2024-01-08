import { Button } from "antd";
import React from "react";
import Lottie from "react-lottie";
import { NavLink } from "react-router-dom";
import * as page404 from "./../../assets/animation/404.json";

const NotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: page404,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="bg-black flex justify-center items-center h-screen flex-col">
      <Lottie options={defaultOptions} height={400} width={400} />
      <NavLink to="/">
        <Button type="primary" block>
          Quay về trang chủ
        </Button>
      </NavLink>
    </div>
  );
};

export default NotFound;
