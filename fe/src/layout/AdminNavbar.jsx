import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../assets/pawco-high-resolution-logo__2_-removebg.png";
import { Link } from "react-router-dom";
function AdminNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function showSideBar() {
    setMenuOpen(!menuOpen);
  }
  return (
    <div className="navbar">
      <div className="navbarLogo">
        <img style={{ width: "100%" }} src={logo} alt="logo" />
      </div>
      <ul className="navUl">
        <li>
          <Link to={"/"}>Əsas səhifə</Link>
        </li>
        <li>
          <Link to={"/adminLayout"}>Admin</Link>
        </li>
        <li>
          <Link to={"/adminLayout/add"}>Əlavə et</Link>
        </li>
      </ul>

      <ul className={menuOpen ? "barUl" : "open"}>
        <li id="xMark">
          <i onClick={() => showSideBar()} className="fa-solid fa-xmark"></i>
        </li>
        <li>
          <Link style={{ width: "200px" }} to={"/"}>
            Ana səhifə
          </Link>
        </li>
      </ul>
      <div className="navBar">
        <i onClick={() => showSideBar()} className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
}

export default AdminNavbar;
