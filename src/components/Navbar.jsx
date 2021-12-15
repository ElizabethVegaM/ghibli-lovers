import React from 'react';
import { Link } from 'react-router-dom';
import kodama from '../images/kodama.png';
import jiji from '../images/jiji.png';
import calcifer from '../images/calcifer.png';

const Navbar = () => {
  const buttons = [{
    'path': '/films',
    'img': kodama,
    'title': 'Movies'
  },
  {
    'path': '/characters',
    'img': jiji,
    'title': 'Characters'
  },
  {
    'path': '/locations',
    'img': calcifer,
    'title': 'Locations'
  }];

  return(
    <nav className="header-navbar">
      {buttons && buttons.map(el => {
        return (
          <Link to={el.path} key={el.title}>
            <button className="navbar-btn">
              <img src={el.img} alt=""/>
              <span>{el.title}</span>
            </button>
          </Link>
        )
      })}
    </nav>
  )
}

export default Navbar;