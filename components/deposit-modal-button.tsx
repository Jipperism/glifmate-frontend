import React, {
  cloneElement,
  ReactElement,
  ReactNode,
  useContext,
} from "react";
import { DepositModalContext } from "@/providers/DepositModalContext";

export function OnClickOpenDepositModal({
  children,
  ...props
}: {
  children: ReactNode;
}) {
  const { setOpen } = useContext(DepositModalContext);
  const filteredProps = Object.fromEntries(
    Object.entries(props).filter(
      ([key]) => !key.startsWith("data-plasmic") && key !== "className"
    )
  );
  return (
    <>
      {React.Children.map(children, (child) =>
        cloneElement(child as ReactElement, {
          ...filteredProps, // forward extra props for composability
          onClick: () => setOpen(true),
        })
      )}
    </>
  );
}
