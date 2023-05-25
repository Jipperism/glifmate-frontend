import React, { useState } from "react";
import ReactModal from "react-modal";
import { PlasmicComponent } from "@plasmicapp/loader-nextjs";
import Button from "@/components/Button";

interface ModalButtonProps {
  className?: string;
  children: React.ReactNode;
}

export function DepositModalButton({ className }: ModalButtonProps) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button onClick={() => setShowModal(true)}>Deposit</Button>
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
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
        }}
      >
        <PlasmicComponent component="DepositModalContent" />
      </ReactModal>
    </>
  );
}
