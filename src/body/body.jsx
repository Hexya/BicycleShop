import React, { Component } from 'react';
import './body.css';

class Body extends React.Component {

  render() {

    return (
      <div className="body">
        <div className="bodyCont">
          {/* ACTU LINE */}
          <div className="firstLine">
            <div className="actuBox">
              <div className="actu"></div>
              <p><span>Les freins à disque en course</span><br></br>Voilà un sujet qui fait parler depuis plusieurs mois au sein du peloton : faut-il laisser les coureurs utiliser les freins à disque ? La question fait débat, notamment au regard des blessures subies par plusieurs coureurs à la suite de chutes. Francisco Ventoso en avait fait l'amère expérience sur Paris-Roubaix l'an passé... </p>
            </div>
            <div className="productABox">
              <div className="productActu">
                <div className="actuImg actuImg1"></div>
                <p><span>ROUES VELO CARBONE EDCO FURKA LIGHT A BOYAU</span><br></br>Le corps de roue libre Edco Multisys compatible à la fois avec des cassette Shimano/Sram 9-10-11v mais aussi avec des cassettes Campagnolo 9-10-11v apporte une touche de souplesse au niveau des compatibilités très apréciée par les utilisateurs. Une première mondiale !</p>
              </div>
              <div className="productActu">
                <div className="actuImg actuImg2"></div>
                <p><span>SELLE SPECIALIZED S WORKS ROMIN - COULEUR TEAM</span><br></br>Grâce à sa coque en carbone FACT™ et à sa forme incurvée, cette selle Specialized offre une grande rigidité et permet d'obtenir une position de transfert de puissance et de confort optimale grâce à son canal Body Geometry extralarge favorise la circulation sanguine
                La Romin SW est la selle choisie par le champion du monde de contre-la-montre Tony Martin et Sylvain Chavanel.</p>
              </div>
            </div>
          </div>
          {/* ACTU LINE END */}
          {/* PRODUCTS LINE */}
          <div className="secLine">

          </div>
          {/* PRODUCTS LINE END */}
        </div>
      </div>
    );
  }
}

export default Body;
