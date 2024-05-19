/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import styles from "@/styles/MobileMenu.module.scss";

import { useDetectClickOutside } from "react-detect-click-outside";

import { IoMdClose } from "react-icons/io";
import { IoPeople } from "react-icons/io5";
import { BsChatLeftText } from "react-icons/bs";
import { GoAlertFill } from "react-icons/go";

import EmailPopup from "./EmailPopup";

interface MenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

function MobileMenu(props: MenuProps) {
  const pathname = usePathname();

  const [animationFinished, setAnimationFinished] = useState(false);

  const [modalState, setModalState] = useState<string | null>(null);

  // Used for closing the menu on the click outside the menu itself
  const ref = useDetectClickOutside({
    onTriggered: (ctx: Event) => {
      if (ctx.target) {
        // Check if it is open already and if the click is not coming from the hamburger icon click which opens the menu
        if (props.open) {
          props.setOpen(false);
        }
      }
    },
  });

  // Values asigned to the mobile menu depending on its state
  const menuVariants = {
    open: { opacity: 1, height: "100%", display: "flex" },
    closed: { opacity: 0.5, height: "0%", display: "none" },
  };

  // Values asigned to the container depending on mobile menu open state
  // If it is open, it will play the opening animation, else it will play closing or finished,
  // Depending on the state of the closing animation
  const containerVariants = {
    open: { opacity: 1, display: "flex" },
    closing: { opacity: 0, display: "none" },
    finished: { display: "none", opacity: 0, transform: "translate(9999px)" },
  };

  useEffect(() => {
    if (props.open) {
      props.setOpen(false);
    }
  }, [pathname]);

  console.log(props.open);

  return (
    <motion.main
      animate={props.open ? "open" : animationFinished ? "finished" : "closing"}
      transition={{ duration: 0.3, type: "tween" }}
      onAnimationComplete={() => setAnimationFinished(true)}
      variants={containerVariants}
      className={styles.container}
    >
      <EmailPopup modalState={modalState} setModalState={setModalState} />
      <motion.section
        animate={props.open ? "open" : "closed"}
        transition={{ duration: 0.2, type: "tween" }}
        variants={menuVariants}
        className={styles.menu}
        ref={ref}
      >
        <section className={styles.top}>
          <h3>Menu</h3>
          <IoMdClose onClick={() => props.setOpen(false)} />
        </section>
        <ul>
          <li className={styles.active} onClick={() => setModalState("submit")}>
            <BsChatLeftText />
            <p>FORUMS</p>
          </li>
          <li onClick={() => setModalState("submit")}>
            <GoAlertFill />
            <p>{"WHAT'S NEW"}</p>
          </li>
          <li onClick={() => setModalState("submit")}>
            <IoPeople />
            <p>MEMBERS</p>
          </li>
        </ul>
      </motion.section>
    </motion.main>
  );
}

export default MobileMenu;
