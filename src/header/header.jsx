import React, { Component } from 'react';
import './header.css';

class Header extends React.Component {

  render() {

    return (
      <div>
        <div className="header"></div>

        <div className="menu">
          <ul className="contMenu">
            <li>VÉLOS</li>
            <li>ÉQUIPEMENT</li>
            <li>ACCESSOIRES VÉLO</li>
            <li>PIÈCES DÉTACHÉES</li>
            <li>TRIATHLON</li>
            <li>PROMOS</li>
            <li>MARQUES</li>
          </ul>
        </div>


      </div>
    );
  }
}

export default Header;
