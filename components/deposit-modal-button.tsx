import React, { useState } from "react";
import ReactModal from "react-modal";
import { PlasmicComponent } from "@plasmicapp/loader-nextjs";

interface ModalButtonProps {
  className?: string;
  children: React.ReactNode;
}

export function DepositModalButton({ className }: ModalButtonProps) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        style={{ cursor: "pointer" }}
        className={className}
        onClick={() => setShowModal(true)}
      >
        Deposit
      </button>
      <ReactModal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        style={{
          content: {
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "auto",

            marginBottom: "auto",
            maxWidth: "500px",
            height: "fit-content",

            borderRadius: "20px",
          },
          overlay: {
            backgroundColor: "black",
            opacity: 0.75,
          },
        }}
      >
        <PlasmicComponent component="DepositModalContent" />
      </ReactModal>
    </>
  );
}
