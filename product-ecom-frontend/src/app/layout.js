"use client";
import localFont from "next/font/local";
import NavbarMain from "@/Component/Navbar/NavbarMain";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import store from "@/Redux/store";
import { Provider } from "react-redux";
import FooterMain from "@/Component/Footer/FooterMain";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <NavbarMain />
          {children}
          <FooterMain />
        </Provider>
      </body>
    </html>
  );
}
