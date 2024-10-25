"use client";
import React from "react";
import Image from "next/image";

import "../styles/testimonials.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const testimonials = [
  {
    id: 1,
    name: "Lukas Meyer",
    avatar: "/pic/Lukas.jpg",
    text: "Perfekte Organisation und atemberaubende Orte, eine Reise, die unsere Erwartungen übertroffen hat",
  },
  {
    id: 2,
    name: "Lina Wagner",
    avatar: "/pic/Lina.jpg",
    text: "Hervorragende Reiseplanung und großartige Erlebnisse, absolut empfehlenswert!",
  },
  {
    id: 3,
    name: "Jonas Schulz",
    avatar: "/pic/Jonas.jpg",
    text: "Ein rundum gelungener Urlaub mit außergewöhnlichem Service. Wir werden diese Reise nie vergessen.",
  },
  {
    id: 4,
    name: "Sophie Müller",
    avatar: "/pic/Sophie.jpg",
    text: "Unsere Traumreise wurde dank der professionellen Betreuung wahr. Ein einzigartiges Erlebnis!",
  },
];

const Testimonials = () => {
  return (
    <section id="erfahrungsberichte">
      <div className="img-container">
        <Image src="/pic/ts.png" alt="/pic/ts.png" width={488} height={482} />
      </div>
      <div className="slider">
        <h2>Kundenbewertungen</h2>
        <p>
          Lesen Sie die inspirierenden Erfahrungen unserer geschätzten Kunden,
          Ihr Traumurlaub beginnt hier
        </p>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="card">
                <div className="text">
                  <i className="fas fa-quote-left"></i>
                  <p>{testimonial.text}</p>
                  <strong>{testimonial.name}</strong>
                </div>
                <div className="avatar">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.avatar}
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
