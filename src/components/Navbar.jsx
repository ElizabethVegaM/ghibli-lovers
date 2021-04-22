import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return(
    <nav>
      <Link to='/films'>
        <button>Movies</button>
      </Link>
      <Link to='/characters'>
        <button>Characters</button>
      </Link>
      <Link to='/locations'>
        <button>Location</button>
      </Link>
    </nav>
  )
}

export default Navbar;