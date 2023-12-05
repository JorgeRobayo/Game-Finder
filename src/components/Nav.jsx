import React from "react";
import {Link} from 'react-router-dom'
import SearchBar from "./SearchBar";

function Nav() {
  return (
    <div className="nav">
      <SearchBar/>
      <Link to="/">
        <div>Home</div>
      </Link>

      <Link to="/about">
        <div>About</div>
      </Link>

      
    </div>
  );
}

export default Nav;
