import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

import dynamic from "next/dynamic";
import { ConnectWalletButton } from "@/components/connect-wallet-button";
import { DepositModalButton } from "@/components/deposit-modal-button";
import { TotalStakedValueProvider } from "@/components/data-providers/TotalStakedValueProvider";
const DepositForm = dynamic(() => import("@/components/forms/deposit-form"), {
  ssr: false,
});
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
});

PLASMIC.registerComponent(DepositForm, {
  name: "DepositForm",
  props: {},
});

PLASMIC.registerComponent(DepositModalButton, {
  name: "DepositModalButton",
  props: {},
});

PLASMIC.registerComponent(TotalStakedValueProvider, {
  name: "TotalStakedValueProvider",
  providesData: true,
  props: {
    children: {
      type: "slot",
    },
  },
});
