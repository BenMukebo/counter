// import React, { Component } from "react";

const Navbar = ({ totalCounters }) => {
  console.log('NavBar - Rendered');

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {/* {this.props.totalCounters} */}
          {/* {props.totalCounters} */}
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
