// import React from "react";
// import Image from "next/image";

// import "../styles/subscribe.css";

// const Subscribe = () => {
//   return (
//     <section id="subscribe">
//       <div className="text">
//         <h2>Abonnieren Sie unseren Newsletter</h2>
//         <p>
//           Erhalten Sie als Erste exklusive Angebote, Reisetipps und
//           Inspirationen für Ihren nächsten Traumurlaub
//         </p>
//         <form>
//           <input
//             type="email"
//             required
//             placeholder="Geben Sie Ihre E-Mail-Adresse ein"
//           />
//           <button aria-label="send" title="Senden">
//             <i className="fas fa-paper-plane"></i>
//           </button>
//         </form>
//       </div>

//       <div className="img-container">
//         <Image src="/pic/sub.png" alt="/pic/sub.png" width="488" height="482" />
//       </div>
//     </section>
//   );
// };

// export default Subscribe;

import React from "react";
import Image from "next/image";
import "../styles/subscribe.css";

const Subscribe = () => {
  return (
    <section id="subscribe">
      <div className="text">
        <h2>Abonnieren Sie unseren Newsletter</h2>
        <p>
          Erhalten Sie als Erste exklusive Angebote, Reisetipps und
          Inspirationen für Ihren nächsten Traumurlaub
        </p>

        <form>
          <input
            type="email"
            required
            placeholder="Geben Sie Ihre E-Mail-Adresse ein"
          />
          <button aria-label="send" title="send">
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>

      <div className="img-container">
        <Image src="/pic/sub.png" alt="/pic/sub.png" width={488} height={482} />
      </div>
    </section>
  );
};

export default Subscribe;
