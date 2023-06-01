import React from "react";
import { WalletProvider } from "@/providers/WalletProvider";
import { DepositModalProvider } from "@/providers/DepositModalContext";
import { ChakraProvider } from "@chakra-ui/react";
import { PLASMIC } from "@/plasmic-init";
import {
  ComponentRenderData,
  PlasmicRootProvider,
} from "@plasmicapp/loader-nextjs";
import { useRouter } from "next/router";
import Error from "next/error";
import ReactModal from "react-modal";

ReactModal.setAppElement("#__next");

export default function MyApp({
  Component,
  pageProps,
  ...props
}: {
  Component: any;
  pageProps: any;
  plasmicData?: ComponentRenderData;
  queryCache?: Record<string, any>;
}) {
  const { plasmicData, queryCache } = props;
  const router = useRouter();
  // if (!plasmicData || plasmicData.entryCompMetas.length === 0) {
  //   return <Error statusCode={404} />;
  // }
  // const pageMeta = plasmicData.entryCompMetas[0];

  return (
    <PlasmicRootProvider
      loader={PLASMIC}
      prefetchedData={plasmicData}
      prefetchedQueryData={queryCache}
      // pageParams={pageMeta.params}
      pageQuery={router.query}
    >
      <ChakraProvider>
        <WalletProvider>
          <DepositModalProvider>
            <Component {...pageProps} />
          </DepositModalProvider>
        </WalletProvider>
      </ChakraProvider>
    </PlasmicRootProvider>
  );
}
