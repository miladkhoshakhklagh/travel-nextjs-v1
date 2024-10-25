// import localFont from "next/font/local";
import Header from "../../components/Header";
import "../../styles/globals.css";
import { Poppins } from "next/font/google";
import Footer from "../../components/Footer";
import Theme from "../../components/Theme";
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const inter = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "WegTraum",
  description: "Jeder Weg erzählt eine Geschichte",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
          integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="icon" href="/fav-icon.png" />
      </head>

      <body className={inter.className}>
        <Theme />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
