import React from "react";
import {Link} from 'react-router-dom'


function Nav() {
  return (
    <div className="nav">
      
      <Link to="/">
        <div>Home</div>
      </Link>

      <Link to="/search">
        <div>Search</div>
      </Link>

      <Link to="/topgames">
        <div>Top Games</div>
      </Link>


    </div>
  );
}

export default Nav;
