import { Routes, Route } from "react-router-dom";
import HomePage from "./Page/HomePage.js";
import SliderProject from "./Projects/SliderProject";
import Four04 from "./Page/404.js";
import StickyNavbar from "./Projects/StickyNavbar";
import Calculator from "./Projects/Calculator";
import CGOL from "./Projects/CGOL"
import CharacterCounter from "./Projects/CharaterCounter.js"
import RandomPassword from "./Projects/RandomPassword"
import WeatherApp from "./Projects/WeatherApp"
// import Layout from "./Layout";

export default function Router() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      {/* <Route element={<Layout />}> */}
      <Route path="/slider" element={<SliderProject />} />
      <Route path="/stickyNavbar" element={<StickyNavbar />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/cgol" element={<CGOL />} />
      <Route path="/charactercounter" element={<CharacterCounter />} />
      <Route path="/randompassword" element={<RandomPassword />} />
      <Route path="/weatherapp" element={<WeatherApp />} />


      {/* </Route> */}
      <Route path="*" element={<Four04 />} />
    </Routes>
  );
}
