// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";

import { ScreenVariantProvider } from "../components/plasmic/pg_staking/PlasmicGlobalVariant__Screen";
import { UnnamedGlobalGroupOfVariantsContext } from "../components/plasmic/pg_staking/PlasmicGlobalVariant__UnnamedGlobalGroupOfVariants";
import { PlasmicDonationTermsConditions } from "../components/plasmic/pg_staking/PlasmicDonationTermsConditions";
import { useRouter } from "next/router";

function DonationTermsConditions() {
  // Use PlasmicDonationTermsConditions to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicDonationTermsConditions are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicDonationTermsConditions is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  return (
    <UnnamedGlobalGroupOfVariantsContext.Provider value={undefined}>
      <PageParamsProvider__
        route={useRouter()?.pathname}
        params={useRouter()?.query}
        query={useRouter()?.query}
      >
        <PlasmicDonationTermsConditions />
      </PageParamsProvider__>
    </UnnamedGlobalGroupOfVariantsContext.Provider>
  );
}

export default DonationTermsConditions;