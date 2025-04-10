import { faAngleLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./PageLayout.css";
import { Link, Outlet } from "react-router";

const PageLayout = () => {
  const [viewNav, setViewNav] = useState(false);

  return (
    <>
      <nav className="navbar container">
        <div>
          <Link to={"/"}>E-commerce</Link>
        </div>

        <div>
          <button
            className="openNav"
            onClick={() => {
              setViewNav(true);
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          <ul className={viewNav ? "view" : ""}>
            <li>
              <button
                className="goBack"
                onClick={() => {
                  setViewNav(false);
                }}
              >
                <FontAwesomeIcon icon={faAngleLeft} />
              </button>
            </li>
            <li>
              <Link to={"#"}>Home</Link>
            </li>
            <li>
              <Link to={"#"}>Products</Link>
            </li>
            <li>
              <Link to={"#"}>About us</Link>
            </li>
            <li>
              <Link to={"#"}>About us</Link>
            </li>
            <li>
              <Link to={"#"}>About us</Link>
            </li>
            <li>
              <Link to={"#"}>About us</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default PageLayout;
