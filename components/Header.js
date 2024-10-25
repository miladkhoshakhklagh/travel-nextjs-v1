"use client";
import React, { useState, useEffect } from "react";
import "../styles/header.css";

const categories = [
  { name: "startseite", link: "#" },
  { name: "trends", link: "#trends" },
  { name: "reiseziele", link: "#reiseziele" },
  { name: "erfahrungsberichte", link: "#erfahrungsberichte" },
];

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [id, setId] = useState("startseite");

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 74) {
        setId(section.getAttribute("id"));
      }
    });

    if (scrolled > 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    toggleVisible();
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <header
      style={{
        background: visible || showMenu ? "var(--primary)" : "transparent",
        boxShadow: visible ? "2px 20px 30px var(--shadow-color)" : "none",
      }}
    >
      <nav>
        <a href="#" className="logo">
          <i
            className="fa-solid fa-person-hiking"
            style={{
              color: visible || showMenu ? "var(--bg-main)" : "var(--primary)",
            }}
          ></i>{" "}
          WegTraum
        </a>

        <div
          className="menu_btn"
          onClick={() => setShowMenu((value) => !value)}
        >
          {showMenu ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </div>

        <ul style={{ height: showMenu ? 285 : 0 }}>
          {categories.map((category) => (
            <li key={category.name}>
              <a
                href={category.link}
                className={id === category.name ? "active" : ""}
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
