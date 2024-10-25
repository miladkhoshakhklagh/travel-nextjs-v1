"use client";

import React from "react";
import Image from "next/image";
import "../styles/banner.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const images = ["/pic/konigssee-Berchtesgaden-in-estate-scaled.jpg","/pic/devils-bridge-germany-7kko.webp", "/pic/wallberg.jpg", "/pic/urlaub-in-heidelberg.jpg"];

const Banner = () => {
  return (
    <section id="startseite" className="banner">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        navigation={true}
        loop={true}
        className="img-container"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt={image}
              width={1920}
              height={1280}
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="box">
        <strong>
          Entdecke die Welt <i className="fa-solid fa-globe"></i>
        </strong>
        <h1> Die Welt wartet auf dich, starte dein nächstes Abenteuer</h1>
        <p>
        Ein Reiseblog mit den schönsten Zielen, einzigartigen Erlebnissen und verborgenen Orten weltweit.
        </p>
        <a href="#">Jetzt entdecken</a>
      </div>
    </section>
  );
};

export default Banner;
