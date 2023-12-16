import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-slate-700 shadow-md fixed z-30">
        <div className="lg:container navbar-start">
          <a href="/" className="btn btn-ghost text-xl text-white">
            TechDen
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            <li>
              <a
                href="/"
                className=" transition duration-300 ease-in-out hover:bg-primary focus:bg-primary"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/About"
                className=" transition duration-300 ease-in-out hover:bg-primary focus:bg-primary"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/Product"
                className=" transition duration-300 ease-in-out hover:bg-primary focus:bg-primary"
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="#testimonial"
                className=" transition duration-300 ease-in-out hover:bg-primary focus:bg-primary"
              >
                Testimonial
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:container navbar-end relative">
          <button>
            <FaHeart className="text-white mr-2" />
          </button>
          <div className="indicator">
            <span className="indicator-item badge badge-warning text-white">
              99+
            </span>
            <button>
              <FaCartShopping className="text-white mr-5" />
            </button>
          </div>
          <div className="text-white  dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-white font-bold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 overflow-y-auto right-0 origin-top-right absolute bg-slate-700"
            >
              <li>
                <a href="/" className=" hover:bg-primary focus:bg-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="/About" className=" hover:bg-primary focus:bg-primary">
                  About
                </a>
              </li>
              <li>
                <a
                  href="/Product"
                  className=" hover:bg-primary focus:bg-primary"
                >
                  Product
                </a>
              </li>
              <li>
                <a className=" hover:bg-primary focus:bg-primary">
                  Testimonial
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
