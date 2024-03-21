import React, { createContext, PropsWithChildren, useState } from "react";
import ReactModal from "react-modal";
import { PlasmicComponent } from "@plasmicapp/loader-nextjs";

interface DepositModalContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const DepositModalContext = createContext<DepositModalContextType>({
  open: false,
  setOpen: () => {},
});

export const DepositModalProvider = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false);

  const value = {
    open,
    setOpen,
  };
  return (
    <DepositModalContext.Provider value={value}>
      {children}
      <ReactModal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
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
        {/*
        // @ts-ignore */}
        <PlasmicComponent component="DepositModalContent" />
      </ReactModal>
    </DepositModalContext.Provider>
  );
};
