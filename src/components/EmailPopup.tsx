"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/EmailPopup.module.scss";

import Modal from "@mui/material/Modal";

import { FaRegCheckCircle } from "react-icons/fa";

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
            <h2>Login</h2>
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
            <button onClick={submit}>Submit</button>
            <p>
              {"Don't"} have an account?{" "}
              <span onClick={() => setAuthOption("register")}>
                Register here
              </span>
            </p>
          </div>
        ) : (
          <div className={styles.modal}>
            <h2>Create an account</h2>
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
            <button onClick={submit}>Submit</button>
            <p>
              Already have an account?{" "}
              <span onClick={() => setAuthOption("login")}>Login here</span>
            </p>
          </div>
        )
      ) : (
        <div className={styles.modal}>
          <FaRegCheckCircle />
          <h2>Sucessfully Submitted!</h2>
          <p>Please check your email inbox for a confirmation email.</p>
          <p style={{ fontStyle: "italic" }}>
            {
              "If you haven’t received an email please wait a couple hours and check your spam"
            }
          </p>
        </div>
      )}
    </Modal>
  );
}

export default EmailPopup;
