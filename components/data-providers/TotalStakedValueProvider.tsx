import { useTotalValueLocked } from "@/hooks/totalLocked";
import { PropsWithChildren } from "react";
import { DataProvider } from "@plasmicapp/host";

export const TotalStakedValueProvider = ({ children }: PropsWithChildren) => {
  const data = useTotalValueLocked();
  return (
    <DataProvider name="totalStakedValue" data={data}>
      {children}
    </DataProvider>
  );
};

export default TotalStakedValueProvider;
