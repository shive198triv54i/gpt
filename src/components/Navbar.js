import React from "react";
import "../styles/nav.css";
import { Link } from "react-router-dom";
// import {logo} from "../data/data.json"
export default function Navbar() {
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/">
          {/* <img id="logoImage" src={logo} alt="Not" /> */}
        <Link className="navlinks" to="https://www.mi.com/in/phone#xiaomi">Mi Phones</Link>
        <Link className="navlinks" to="https://www.mi.com/in/phone#redmi">Redmi Phones</Link>
        <Link className="navlinks" to="https://www.mi.com/in/smart-home#tv">TV</Link>
        <Link className="navlinks" to="https://www.mi.com/in/smart-office#laptops">Laptops</Link>
        <Link className="navlinks" to="https://www.mi.com/in/life-style">Fitness & Lifestyle</Link>
        <Link className="navlinks" to="https://www.mi.com/in/service/mihome/">Home</Link>
        <Link className="navlinks" to="https://www.mi.com/in/search/radio?tab=product">Radio</Link>
        <Link className="navlinks" to="https://www.mi.com/in/search/accessories?tab=product">Accessories</Link>
        </Link>
      </div>
    </div>
  );
}
