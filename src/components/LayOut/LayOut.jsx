import React, { useEffect, useState } from "react";
import styles from "./LayOut.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import TermsPopup from "../TermsPopup/TermsPopup";

export default function LayOut() {
  let [count, setCount] = useState(0);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => { }, []);
  return (
    <>
     {showPopup && (
        <TermsPopup onAgree={() => setShowPopup(false)} />
      )}
      <Navbar />
      <main style={{ minHeight: "80vh" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
