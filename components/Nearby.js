import React from "react";
import Image from "next/image";

import "../styles/nearby.css";

const explores = [
  {
    id: 1,
    name: "Frankfurt",
    img: "/pic/Frankfurt.jpg",
    time: "30 minutes drive",
    distance: 1380,
  },
  {
    id: 2,
    name: "Stuttgart",
    img: "/pic/Stuttgart.jpg",
    time: "10 minutes drive",
    distance: 1110,
  },
  {
    id: 3,
    name: "Hamburg",
    img: "/pic/Hamburg.jpg",
    time: "25 minutes drive",
    distance: 589,
  },
  {
    id: 4,
    name: "düsseldorf",
    img: "/pic/düsseldorf.jpg",
    time: "15 minutes drive",
    distance: 1690,
  },
  {
    id: 5,
    name: "Leipzig",
    img: "/pic/Leipzig.jpeg",
    time: "22 minutes drive",
    distance: 1200,
  },
  {
    id: 6,
    name: "Nürnberg",
    img: "/pic/Nürnberg.jpg",
    time: "17 minutes drive",
    distance: 1480,
  },
  {
    id: 7,
    name: "Bremen",
    img: "/pic/Bremen.jpg",
    time: "10 minutes drive",
    distance: 1480,
  },
  {
    id: 8,
    name: "Aachen",
    img: "/pic/Aachen.jpg",
    time: "15 minutes drive",
    distance: 1480,
  },
  {
    id: 9,
    name: "Mainz",
    img: "/pic/Mainz.jpg",
    time: "25 minutes drive",
    distance: 1480,
  },
];

const Nearby = () => {
  return (
    <section id="explore">
      <div className="heading">
        <h2>Entdecken Sie spannende Orte in Ihrer Nähe</h2>
        <p>5.400 wunderschöne Reiseziele</p>
      </div>
      <div className="warpper">
        {explores.map((explore) => (
          <div className="card" key={explore.id}>
            <Image
              src={explore.img}
              alt={explore.img}
              width={100}
              height={100}
            />
            <a href="#">{explore.name}</a>
            <p>{explore.time}</p>
            <span>{explore.distance}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Nearby;
