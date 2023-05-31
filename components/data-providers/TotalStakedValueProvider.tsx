import { useTotalValueLocked } from "@/hooks/totalLocked";
import { PropsWithChildren } from "react";
import { DataProvider } from "@plasmicapp/host";
import { ethers } from "ethers";
import { commify } from "@/utils/formatting";

export const TotalStakedValueProvider = ({ children }: PropsWithChildren) => {
  const data = useTotalValueLocked();
  const dataWithCommas =
    data !== undefined ? commify(data.toString()) : undefined;
  return (
    <DataProvider name="totalStakedValue" data={dataWithCommas}>
      {children}
    </DataProvider>
  );
};

export default TotalStakedValueProvider;
