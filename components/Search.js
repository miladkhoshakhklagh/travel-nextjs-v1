import React from "react";
import "../styles/search.css";

const Search = () => {
  return (
    <section id="search">
      <strong>Entdecken Sie Ihren Traumort</strong>
      <h2>Finden Sie Ihr Traumreiseziel</h2>
      <p>
        Finden Sie Ihr Reiseziel - Der ultimative Leitfaden zu Ihrem
        Traumreiseziel
      </p>
      <form>
        <div className="box">
          <div className="icon">
            <i className="fa-solid fa-location-arrow"></i>
          </div>

          <div className="input">
            <label htmlFor="location">Ort</label>
            <input
              type="text"
              id="location"
              placeholder="Wohin gehen Sie?"
              required
            />
          </div>
        </div>

        <div className="box">
          <div className="icon">
            <i className="fas fa-calendar-alt"></i>
          </div>

          <div className="input">
            <label htmlFor="checkin">Anreisedatum</label>
            <input type="date" id="checkin" required />
          </div>
        </div>

        <div className="box">
          <div className="icon">
            <i className="fas fa-calendar-alt"></i>
          </div>

          <div className="input">
            <label htmlFor="checkout">Abreisedatum</label>
            <input type="date" id="checkout" required />
          </div>
        </div>

        <div className="box">
          <div className="icon">
            <i className="fas fa-user"></i>
          </div>

          <div className="input">
            <label htmlFor="travels">Reisen</label>
            <input
              type="text"
              id="travels "
              placeholder="8 Touristen"
              required
            />
          </div>
        </div>

        <button aria-label="search" title="search">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </section>
  );
};

export default Search;
