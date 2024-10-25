"use client";
import React from "react";
import Image from "next/image";

import "../styles/trending.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const trends = [
  {
    id: 1,
    name: "Kölner Dom",
    location: "Cologne",
    img: "/pic/popular/cologne-1.jpg",
    activites: 5,
    places: 10,
    days: "1 weeks",
    price: 1.2,
  },
  {
    id: 2,
    name: "Fernsehturm Berlin",
    location: "Berlin",
    img: "/pic/popular/Fernsehturm Berlin.jpg",
    activites: 8,
    places: 15,
    days: "2 weeks",
    price: 2.1,
  },
  {
    id: 3,
    name: "Schloss Neuschwanstein",
    location: "Baviera",
    img: "/pic/popular/Schloss-Neuschwanstein.jpg",
    activites: 5,
    places: 10,
    days: "2 weeks",
    price: 1.1,
  },
  {
    id: 4,
    name: "Berchtesgaden",
    location: "Bavarian Alps",
    img: "/pic/popular/Berchtesgaden-1.jpg",
    activites: 12,
    places: 7,
    days: "1 weeks",
    price: 1.5,
  },
  {
    id: 5,
    name: "Residence",
    location: "Wurzburg",
    img: "/pic/popular/Wurzburg-Residence.jpg",
    activites: 14,
    places: 4,
    days: "2 weeks",
    price: 2.3,
  },
];

const Trending = () => {
  return (
    <section id="trends">
      <div className="heading">
        <h2>Beliebt</h2>
        <p>
          Bereit für Ihr nächstes Abenteuer? Entdecken Sie die Trend-Reiseziele,
          die alle begeistern!
        </p>
      </div>
      <div className="warpper">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            800: {
              slidesPerView: 2,
              spaceBetween:10
            },
            1110: {
              slidesPerView: 3,
              spaceBetween:20
            },
          }}
        >
          {trends.map((trend) => (
            <SwiperSlide key={trend.id}>
              <div className="card">
                <div className="title">
                  <span>
                    <i className="fas fa-map-marker-alt"></i>
                    {trend.location}
                  </span>
                  <a href="#">{trend.name}</a>
                </div>
                <div className="img-container">
                  <Image
                    src={trend.img}
                    alt={trend.img}
                    height={170}
                    width={350}
                  />
                </div>
                <div className="text">
                  <span>
                    <i className="fa-solid fa-shoe-prints"></i>
                    {trend.activites} Aktivitäten
                  </span>
                  <span>
                    <i className="fa-solid fa-compass"></i>
                    {trend.places} Orte
                  </span>
                  <span>
                    <i className="fa-solid fa-calendar-days"></i>
                    {trend.days}
                  </span>
                </div>
                <hr />
                <div className="price">
                  <p>
                    Ab €{trend.price} <span>/pro Person</span>
                  </p>
                  <a href="#">Jetzt buchen</a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Trending;
