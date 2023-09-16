import { LiaShoppingBagSolid } from "react-icons/lia";

import { useState } from "react";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  // navbar sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { itemAmount } = useSelector((state) => state.cart);

  // show navbar on smaller width screens
  const showSidebar = () => {
    setSidebarOpen(true);
  };

  // remobve navbar from smaller width screens
  const removeSidebar = () => {
    setSidebarOpen(false);
  };

  // function to add a background to the Navbar when we scroll a certain height on the window
  const [header, setHeader] = useState(false);

  const addBg = () => {
    window.scrollY >= 20 ? setHeader(true) : setHeader(false);
  };

  window.addEventListener("scroll", addBg);

  return (
    <div className={`header ${header && "addBg"}`}>
      <div className="container flex">
        <Link to="/">
          <div className="logoDiv">
            <h1 className="logo displayFont">
              Luxe<span>Tick</span>
            </h1>
          </div>
        </Link>
        {/* Sidebar cart items */}
        <div className={`overlay ${sidebarOpen && "showOverlay"}`}></div>
        <Sidebar removeSidebar={removeSidebar} sidebarOpen={sidebarOpen} />
        <div className="shoppingCart flex" onClick={showSidebar}>
          <LiaShoppingBagSolid
            className="icon shoppingCartIcon"
            onClick={showSidebar}
          />
          <div className="item-count flex ">{itemAmount}</div>
          <div
            className={`item-count-container ${header && "addCounterBg"}`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
