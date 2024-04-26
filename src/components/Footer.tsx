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
            Our community has been around for many years and pride ourselves on
            offering unbiased, critical discussion among people of all different
            backgrounds. We are working every day to make sure our community is
            one of the best.
          </p>
        </section>
        <section className={styles.menu}>
          <section className={styles.title}>
            <TfiMenuAlt />
            <h4>Quick Navigation</h4>
          </section>
          <ul>
            <li onClick={() => setModalState("submit")}>Home</li>
            <li onClick={() => setModalState("submit")}>Forums</li>
            <li onClick={() => setModalState("submit")}>Contact Us</li>
          </ul>
        </section>
        <section className={styles.menu}>
          <section className={styles.title}>
            <FaUser />
            <h4>User Menu</h4>
          </section>
          <ul>
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
