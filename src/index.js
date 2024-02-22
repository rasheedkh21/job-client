import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainPage from "./pages/mainpage/main";
import TemporaryDrawer from "./pages/drawer/dashboard";
import Slider from "./pages/carousel/Carousel";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainPage />
    {/* <Slider/> */}
  </React.StrictMode>
);
