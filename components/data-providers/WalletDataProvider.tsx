import { PropsWithChildren } from "react";
import { DataProvider } from "@plasmicapp/host";
import { useAccount } from "wagmi";

export const WalletDataProvider = ({ children }: PropsWithChildren) => {
  const { isConnected, address } = useAccount();
  const data = {
    isConnected,
    address,
  };
  return (
    <DataProvider name="walletData" data={data}>
      {children}
    </DataProvider>
  );
};

export default WalletDataProvider;
