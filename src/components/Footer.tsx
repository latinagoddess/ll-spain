"use client";

import React, { useState } from "react";
import styles from "@/styles/Footer.module.scss";

import { TfiMenuAlt } from "react-icons/tfi";
import { FaUser } from "react-icons/fa";

import EmailPopup from "./EmailPopup";

function Footer() {
  const [modalState, setModalState] = useState<string | null>(null);

  return (
    <section className={styles.footer}>
      <EmailPopup modalState={modalState} setModalState={setModalState} />
      <section className={styles.grid}>
        <section className={styles.about}>
          <h4>About us</h4>
          <p>
            Welcome to {"Spain's"} premier platform for candid and comprehensive
            prostitute reviews. At our site, {"we're"} dedicated to providing a
            discreet and informative space where clients can share their
            experiences and insights with fellow patrons. Whether {"you're"} a
            seasoned visitor or a curious newcomer, our community-driven reviews
            offer valuable perspectives on a variety of services and providers
            across Spain. With a commitment to integrity and respect, we strive
            to empower individuals to make informed choices while fostering a
            supportive environment for open dialogue. Join us in exploring the
            diverse landscape of {"Spain's"} intimate offerings, one review at a
            time.
          </p>
        </section>
        <section className={styles.menu}>
          <ul>
            <li onClick={() => setModalState("submit")}>Forums</li>
            <li onClick={() => setModalState("submit")}>Contact Us</li>
            <li onClick={() => setModalState("submit")}>Login</li>
          </ul>
        </section>
      </section>
      <ul className={styles.links}>
        <li onClick={() => setModalState("submit")}>Contact us</li>
        <li onClick={() => setModalState("submit")}>Terms and rules</li>
        <li onClick={() => setModalState("submit")}>Privacy policy</li>
        <li onClick={() => setModalState("submit")}>Help</li>
        <li onClick={() => setModalState("submit")}>Home</li>
      </ul>
    </section>
  );
}

export default Footer;
