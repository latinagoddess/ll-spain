"use client";

import React, { useState } from "react";
import styles from "@/styles/Navbar.module.scss";

import { IoMenuOutline, IoSearch, IoPeople } from "react-icons/io5";
import { MdOutlineKey } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa6";
import { BsChatLeftText } from "react-icons/bs";
import { GoAlertFill } from "react-icons/go";

import MobileMenu from "./MobileMenu";
import EmailPopup from "./EmailPopup";

function Navbar() {
  // State that handles opening and closing of the mobile menu
  const [openMenu, setOpenMenu] = useState(false);

  const [modalState, setModalState] = useState<string | null>(null);

  return (
    <section className={styles.nav}>
      <EmailPopup modalState={modalState} setModalState={setModalState} />
      <MobileMenu open={openMenu} setOpen={(open) => setOpenMenu(open)} />
      <section className={styles.top}>
        <section className={styles.left}>
          <IoMenuOutline onClick={() => setOpenMenu(true)} />
          <h3>Sptty</h3>
        </section>
        <section className={styles.rightPhone}>
          <MdOutlineKey onClick={() => setModalState("submit")} />
          <FaClipboardList onClick={() => setModalState("submit")} />
          <IoSearch onClick={() => setModalState("submit")} />
        </section>
        <section className={styles.rightDesktop}>
          <ul className={styles.menu}>
            <li className={styles.active}>
              <BsChatLeftText />
              <p>FORUMS</p>
            </li>
            <li onClick={() => setModalState("submit")}>
              <GoAlertFill />
              <p>WHAT'S NEW</p>
            </li>
            <li onClick={() => setModalState("submit")}>
              <IoPeople />
              <p>MEMBERS</p>
            </li>
          </ul>
          <ul className={styles.authMenu}>
            <li onClick={() => setModalState("submit")}>
              <p>Login</p>
            </li>
            <li onClick={() => setModalState("submit")}>
              <p>Register</p>
            </li>
          </ul>
        </section>
      </section>
      <section className={styles.bottom}>
        <ul>
          <li onClick={() => setModalState("submit")}>Advertise</li>
          <li onClick={() => setModalState("submit")}>New posts</li>
          <li onClick={() => setModalState("submit")}>Search forums</li>
        </ul>
      </section>
    </section>
  );
}

export default Navbar;
