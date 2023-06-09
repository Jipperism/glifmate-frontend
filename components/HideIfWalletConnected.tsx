import { PropsWithChildren } from "react";
import { useAccount } from "wagmi";

export const HideIfWalletConnected = ({ children }: PropsWithChildren) => {
  const { isConnected } = useAccount();

  if (!isConnected) {
    return <>{children}</>;
  }

  return null;
};

export default HideIfWalletConnected;
