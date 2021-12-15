import React from 'react';
import { Link } from "react-router-dom";
import img from '../images/1097863075-Studio_Ghibli-1920x1080.png';

const Main= () => {
  return(
    <Link to="/films" className="welcome-page">
      <img src={img} alt="" srcset="" />
    </Link>
  )
}

export default Main;