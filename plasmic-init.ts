import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

import dynamic from "next/dynamic";
import { ConnectWalletButton } from "@/components/connect-wallet-button";
import { OnClickOpenDepositModal } from "@/components/deposit-modal-button";
const DepositForm = dynamic(() => import("@/components/forms/deposit-form"), {
  ssr: false,
});

const TotalStakedValueProvider = dynamic(
  () => import("@/components/data-providers/TotalStakedValueProvider"),
  { ssr: false }
);

const WalletDataProvider = dynamic(
  () => import("@/components/data-providers/WalletDataProvider"),
  { ssr: false }
);

const HideIfWalletConnected = dynamic(
  () => import("@/components/HideIfWalletConnected"),
  { ssr: false }
);

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "rLycm7fJPyjpC5eVgPhFFv",
      token:
        "bUdpfIVtp3vjoYBjjdT81thyjqS2DhqWbXXiGJmLcSS84ltNkzqxECePWiDjI9v30OZNi30ybk4P7d4n4mBw",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  // TODO: Turn off preview mode before deploying your app.
  preview: true,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// Code component registrations

PLASMIC.registerComponent(ConnectWalletButton, {
  name: "ConnectWalletButton",
  props: {},
  importPath: "@/components/connect-wallet-button",
});

PLASMIC.registerComponent(DepositForm, {
  name: "DepositForm",
  props: {},
  importPath: "@/components/forms/deposit-form",
});

PLASMIC.registerComponent(TotalStakedValueProvider, {
  name: "TotalStakedValueProvider",
  importPath: "@/components/data-providers/TotalStakedValueProvider",
  providesData: true,
  props: {
    children: {
      type: "slot",
    },
  },
});

PLASMIC.registerComponent(WalletDataProvider, {
  name: "WalletDataProvider",
  importPath: "@/components/data-providers/WalletDataProvider",
  providesData: true,
  props: {
    children: {
      type: "slot",
    },
  },
});

PLASMIC.registerComponent(HideIfWalletConnected, {
  name: "HideIfWalletConnected",
  importPath: "@/components/HideIfWalletConnected",
  props: {
    children: {
      type: "slot",
    },
  },
});

PLASMIC.registerComponent(OnClickOpenDepositModal, {
  importPath: "@/components/deposit-modal-button",
  name: "OnClickOpenDepositModal",
  isAttachment: true,
  styleSections: false, // This component does not accept className
  props: {
    children: "slot",
  },
});
