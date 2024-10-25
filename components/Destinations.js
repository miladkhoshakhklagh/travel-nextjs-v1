import React from "react";

import "../styles/destinations.css";
import Image from "next/image";

const destinations = [
  {
    id: 1,
    name: "Warstein",
    location: "North Rhine-Westphalia",
    stars: 4.6,
    price: 78,
    img: "/pic/d-1.jpg",
  },
  {
    id: 2,
    name: "Königssee",
    location: "Bavaria",
    stars: 4.8,
    price: 83,
    img: "/pic/trending-1.jpg",
  },

  {
    id: 3,
    name: "Eibsee",
    location: "Bavaria",
    stars: 4.9,
    price: 109,
    img: "/pic/Eibsee.jpg",
  },
  
  {
    id: 4,
    name: "Bastei Bridge",
    location: "Saxony",
    stars: 4.7,
    price: 49,
    img: "/pic/Bastei-Bridge.jpg",
  },
  {
    id: 5,
    name: "Wernigerode",
    location: "Harz",
    stars: 4.4,
    price: 59,
    img: "/pic/Wernigerode.jpg",
  },

  {
    id: 6,
    name: "Neuschwanstein",
    location: "Bavaria",
    stars: 4.5,
    price: 55,
    img: "/pic/Neuschwanstein-Castle.jpg",
  },

  
];

const Destinations = () => {
  return (
    <section id="reiseziele">
      <div className="heading">
        <h2>Beliebte Reiseziele</h2>
        <p>
          Lassen Sie sich von den beliebtesten Reisezielen inspirieren und
          planen Sie Ihr nächstes Abenteuer.
        </p>
      </div>
      <div className="grid">
        {destinations.map((destination, index) => (
          <div className={`card card-${index}`} key={destination.id}>
            <Image
              src={destination.img}
              alt={destination.img}
              width={600}
              height={600}
            />
            <div className="box">
              <span className="star">
                <i className="fa-solid fa-star"></i> {destination.stars}
              </span>
              <div className="group">
                <div className="text">
                  <strong> {destination.name}</strong>
                  <span>
                    <i className="fas fa-map-marker-alt"></i>{" "}
                    {destination.location}
                  </span>
                </div>
                <span className="price"> €{destination.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
