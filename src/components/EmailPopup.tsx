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

  const [email, setEmail] = useState("");

  const submit = () => {
    if (email && email !== "") {
      setModalOpen("success");
    }
  };

  const handleClose = () => {
    setModalOpen(null);
    setModalState(null);
  };

  useEffect(() => {
    setModalOpen(modalState);
  }, [modalState]);

  return (
    <Modal
      open={modalOpen !== null}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {modalOpen === "submit" ? (
        <div className={styles.modal}>
          <h2>Please sign up</h2>
          <p>Please enter your email and sign up.</p>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={submit}>Submit</button>
        </div>
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
