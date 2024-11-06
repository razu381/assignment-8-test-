import React from "react";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";

function Navbar() {
  let li = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="">Statistics</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </>
  );
  return (
    <div className="navbar pt-12 xl:container mx-auto">
      <div className="navbar-start">
        <a className="font-bold text-xl">Gadget Heaven</a>
      </div>

      <div className="navbar-center">
        <div className="dropdown">
          <ul
            tabIndex={0}
            className="menu menu-horizontal px-1  mt-3 p-2 font-semibold"
          >
            {li}
          </ul>
        </div>
      </div>

      <div className="navbar-end gap-2">
        <button className="btn btn-circle bg-white">
          <TiShoppingCart size={20} />
        </button>
        <button className="btn btn-circle bg-white">
          <CiHeart size={20} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
