import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
