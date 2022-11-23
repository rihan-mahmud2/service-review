import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/ContextProvider";

const NavHeader = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then((res) => {})
      .catch((err) => console.log(err));
  };
  const navItems = [
    <li className="text-xl bolder">
      <Link to="/">Home</Link>
    </li>,

    <li className="text-lg bolder">
      {user?.email ? <Link to="/myrivews">My Rivews</Link> : null}
    </li>,
    <li className="text-lg bolder">
      <Link to="/addservice">Add Services</Link>
    </li>,

    <li className="text-lg bolder">
      <Link to="/faq">Blog</Link>
    </li>,
    <li className="text-lg bolder">
      {user?.email ? (
        <Link onClick={handleLogout}>Logout</Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </li>,
  ];
  return (
    <>
      <div className="navbar bg-[#1a1f3e] text-white py-3 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-content rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">
            Pro Advocate
          </Link>
        </div>
        <div className="navbar-start hidden lg:flex bg-dark">
          <ul className="menu menu-horizontal p-0">{navItems}</ul>
        </div>
      </div>
    </>
  );
};

export default NavHeader;
