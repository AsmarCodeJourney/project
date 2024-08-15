import React, { useContext, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import logo from "../assets/pawco-high-resolution-logo__2_-removebg.png";
import { TokenContext } from "../context/TokenProvider";
function Navbar() {
  const { token, decoded, logOut } = useContext(TokenContext);
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
          <Link to={"/"}>Ana səhifə</Link>
        </li>
        <li>
          <Link to={"/about"}> Haqqımızda</Link>
        </li>
        <li>
          {token ? (
            <Link to={"/share"}> Əyləncə</Link>
          ) : (
            <Link to={"/pleasure"}> Əyləncə</Link>
          )}
        </li>
        <li>
          <Link to={"/contact"}> Əlaqə</Link>
        </li>
        <li>
          {decoded && decoded.role === "Admin" ? (
            <Link to={"/adminLayout"}> Admin</Link>
          ) : null}
        </li>
        <li>
          {token ? (
            <Link to={"/basket"}>
              {" "}
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          ) : (
            <Link to={"/pleasure"}>
              {" "}
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          )}
        </li>
        <li>
          {token ? (
            <button className="emailBtn">
              {decoded.email[0].toUpperCase()}
            </button>
          ) : (
            <Link to={"/pleasure"}>
              {" "}
              <i className="fa-solid fa-user"></i>
            </Link>
          )}
        </li>
        <li>
          {token ? (
            <button className="logoutBtn" onClick={logOut}>
              Çıxış et
            </button>
          ) : null}
        </li>
      </ul>
      <ul className={menuOpen ? "barUl" : "open"}>
        <li id="xMark">
          <i onClick={() => showSideBar()} className="fa-solid fa-xmark"></i>
        </li>
        <li>
          {token ? (
            <button className="emailBtn">
              {decoded.email[0].toUpperCase()}
            </button>
          ) : (
            <Link to={"/pleasure"}>
              {" "}
              <i className="fa-solid fa-user"></i>
            </Link>
          )}
        </li>
        <li>
          {token ? (
            <button className="logoutBtn" onClick={logOut}>
              Çıxış et
            </button>
          ) : null}
        </li>
        <li>
          <Link style={{ width: "200px" }} to={"/"}>
            Ana səhifə
          </Link>
        </li>
        <li>
          <Link to={"/about"}> Haqqımızda</Link>
        </li>
        <li>
          <Link to={"/pleasure"}> Əyləncə</Link>
        </li>
        <li>
          <Link to={"/contact"}> Əlaqə</Link>
        </li>
        <li>
          {decoded && decoded.role === "Admin" ? (
            <Link to={"/adminLayout"}> Admin</Link>
          ) : null}
        </li>
      </ul>
      <div className="navBar">
        <i onClick={() => showSideBar()} className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
}

export default Navbar;
