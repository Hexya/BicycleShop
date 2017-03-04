import React, { Component } from 'react';
import './body.css';

class Body extends React.Component {

  render() {

    return (
      <div className="body">
        <div className="panier">Panier</div>
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
            <div className="secOne">
              <div className="secOImg secOImg1">
                <p>2350€</p>
                <div className="promo">PROMO</div>
              </div>
              <div className="secOText">
                <p><span>WILIER TRIESTINA MONTEGRAPPA Shimano Sora</span><br></br>Nommé d'après le sommet marquant la séparation entre les Dolomites et les plaines vénitiennes, et emprunté par le Giro à plusieurs reprises, le vélo de course WILIER...</p>
              </div>
            </div>
            <div className="secOne">
              <div className="secOImg secOImg2">
                <p>3170€</p>
              </div>
              <div className="secOText">
                <p><span>VIPER STELVIO Shimano</span><br></br>Il est doté d’un cadre en aluminium double butted qui lui permet de faire une juste association entre la rigidité et un poids raisonnable. Une fourche en carbone lui pe... </p>
              </div>
            </div>
            <div className="secOne">
              <div className="secOImg secOImg3">
                <p>2780€</p>
              </div>
              <div className="secOText">
                <p><span>RIDLEY FENIX CARBON Shimano</span><br></br>Utilisé par le Pro-Team Lotto-Soudal sur les classiques de printemps, le vélo de course RIDLEY Fénix Carbon est un modèle caractérisé par une très grande polyvalence...</p>
              </div>
            </div>
            <div className="secOne">
              <div className="secOImg secOImg4">
                <p>2645€</p>
              </div>
              <div className="secOText">
                <p><span>WILIER TRIESTINA IZOARD XP Shimano</span><br></br>Le vélo de course Wilier Triestina Izoard XP est là pour prendre la succession du modèle Izoard, et se pose comme un modèle carbone accessible avec un...</p>
              </div>
            </div>
            <div className="secOne">
              <div className="secOImg secOImg5">
                <p>2950€</p>
                <div className="promo">PROMO</div>
              </div>
              <div className="secOText">
                <p><span>CBT ITALIA NECER Shimano Tiagra</span><br></br>Taillé pour la performance, le vélo de course CBT ITALIA Necer est doté d'un cadre en carbone monocoque qui lui confère une rigidité et une légèreté remarquables.</p>
              </div>
            </div>
            <div className="secOne">
              <div className="secOImg secOImg6">
                <p>3175€</p>
              </div>
              <div className="secOText">
                <p><span>WILIER TRIESTINA GTR Shimano Ultegra</span><br></br>Issu de la ligne GranTurismo, le vélo de course WILIER TRIESTINA GTR bénéficie des dernières innovations du fabricant italien. Le tube de direction est différencié, ga...</p>
              </div>
            </div>
          </div>
          
          {/* PRODUCTS LINE END */}
        </div>
      </div>
    );
  }
}

export default Body;
