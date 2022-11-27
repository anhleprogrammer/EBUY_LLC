import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";

function Navigation() {
  return (
    <>
      <div className="navigation">
        {" "}
        <Link className="logo-container" to="/">
          <p>EBUY_LLC</p>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/authentication">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
