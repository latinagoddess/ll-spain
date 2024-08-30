"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/EmailPopup.module.scss";

import Modal from "@mui/material/Modal";

import { IoIosCloseCircle } from "react-icons/io";
import { FaCheckDouble } from "react-icons/fa6";

function EmailPopup({
  modalState,
  setModalState,
}: {
  modalState: string | null;
  setModalState: (arg: null | string) => void;
}) {
  const [modalOpen, setModalOpen] = useState<string | null>(null);
  const [authOption, setAuthOption] = useState<string>("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const submit = () => {
    if (email && email !== "" && password && password !== "") {
      setModalOpen("success");
    }
  };

  const submitRegistration = () => {
    if (email && email !== "" && password && password !== "") {
      setModalOpen("successRegistration");
    }
  };

  const handleClose = () => {
    setModalOpen(null);
    setModalState(null);
  };

  useEffect(() => {
    if (modalState === "register") {
      setModalOpen("submit");
      setAuthOption("register");
    } else {
      setModalOpen(modalState);
      setAuthOption("login");
    }
  }, [modalState]);

  useEffect(() => {
    setEmail("");
    setPassword("");
    setUsername("");
  }, [authOption]);

  return (
    <Modal
      open={modalOpen !== null}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {modalOpen === "submit" ? (
        authOption === "login" ? (
          <div className={styles.modal}>
            <section className={styles.title}>
              <h2>Login</h2>
            </section>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={submit}>Send</button>
            <p>
              {"Don't"} have an account?{" "}
              <span onClick={() => setAuthOption("register")}>
                Register here
              </span>
            </p>
          </div>
        ) : (
          <div className={styles.modal}>
            <section className={styles.title}>
              <h2>Create an Account</h2>
            </section>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={submitRegistration}>Send</button>
            <p>
              Already have an account?{" "}
              <span onClick={() => setAuthOption("login")}>Login here</span>
            </p>
          </div>
        )
      ) : modalOpen === "successRegistration" ? (
        <div className={styles.modal}>
          <IoIosCloseCircle />
          <h2>Error Code: REG-001</h2>
          <p>
            Registration Error: Access Restricted. This service is only
            available to users located in Spain. Please ensure you are accessing
            this site from a valid Spanish IP address.
          </p>
        </div>
      ) : (
        <div className={styles.modal}>
          <IoIosCloseCircle />
          <h2>Unsuccessful</h2>
          <p>
            Unsuccessful due to wrong email or password. Password change has
            been sent to the email mentioned if it is registered.
          </p>
        </div>
      )}
    </Modal>
  );
}

export default EmailPopup;
