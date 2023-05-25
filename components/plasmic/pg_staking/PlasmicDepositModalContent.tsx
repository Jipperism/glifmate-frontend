// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rLycm7fJPyjpC5eVgPhFFv
// Component: LRxRpZH-jJ

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web";
import { ConnectWalletButton } from "@/components/connect-wallet-button"; // plasmic-import: aYoYQSYoB7/codeComponent
import { DepositForm } from "@/components/forms/deposit-form"; // plasmic-import: jzMDyQ-x2A/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_pg_staking.module.css"; // plasmic-import: rLycm7fJPyjpC5eVgPhFFv/projectcss
import sty from "./PlasmicDepositModalContent.module.css"; // plasmic-import: LRxRpZH-jJ/css

export type PlasmicDepositModalContent__VariantMembers = {
  depositClicked: "depositClicked";
};
export type PlasmicDepositModalContent__VariantsArgs = {
  depositClicked?: SingleBooleanChoiceArg<"depositClicked">;
};
type VariantPropType = keyof PlasmicDepositModalContent__VariantsArgs;
export const PlasmicDepositModalContent__VariantProps =
  new Array<VariantPropType>("depositClicked");

export type PlasmicDepositModalContent__ArgsType = {};
type ArgPropType = keyof PlasmicDepositModalContent__ArgsType;
export const PlasmicDepositModalContent__ArgProps = new Array<ArgPropType>();

export type PlasmicDepositModalContent__OverridesType = {
  root?: p.Flex<"div">;
  h3?: p.Flex<"h3">;
  img?: p.Flex<typeof p.PlasmicImg>;
  connectWalletButton?: p.Flex<typeof ConnectWalletButton>;
  depositForm?: p.Flex<typeof DepositForm>;
};

export interface DefaultDepositModalContentProps {
  depositClicked?: SingleBooleanChoiceArg<"depositClicked">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDepositModalContent__RenderFunc(props: {
  variants: PlasmicDepositModalContent__VariantsArgs;
  args: PlasmicDepositModalContent__ArgsType;
  overrides: PlasmicDepositModalContent__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants,
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "depositClicked",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.depositClicked,
      },
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  return (
    (hasVariant($state, "depositClicked", "depositClicked") ? true : true) ? (
      <p.Stack
        as={"div"}
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        hasGap={true}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          sty.root,
          {
            [sty.rootdepositClicked]: hasVariant(
              $state,
              "depositClicked",
              "depositClicked"
            ),
          }
        )}
      >
        {(
          hasVariant($state, "depositClicked", "depositClicked") ? true : true
        ) ? (
          <div
            className={classNames(projectcss.all, sty.freeBox__aCedf, {
              [sty.freeBoxdepositClicked__aCedfDEzGr]: hasVariant(
                $state,
                "depositClicked",
                "depositClicked"
              ),
            })}
          >
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__hgbX)}>
                <h3
                  data-plasmic-name={"h3"}
                  data-plasmic-override={overrides.h3}
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3
                  )}
                >
                  {"Stake early"}
                </h3>
                <h6
                  className={classNames(
                    projectcss.all,
                    projectcss.h6,
                    projectcss.__wab_text,
                    sty.h6___00PTf
                  )}
                >
                  {"Please enter the details of your transaction below."}
                </h6>
              </div>
            ) : null}
            <div className={classNames(projectcss.all, sty.freeBox___9DWcm)}>
              <p.PlasmicImg
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100px" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/pg_staking/images/arcoPrimaryColorsvg.svg",
                  fullWidth: 216,
                  fullHeight: 150,
                  aspectRatio: 1.440994,
                }}
              />
            </div>
          </div>
        ) : null}
        <h6
          className={classNames(
            projectcss.all,
            projectcss.h6,
            projectcss.__wab_text,
            sty.h6__bdIcm,
            {
              [sty.h6depositClicked__bdIcmDEzGr]: hasVariant(
                $state,
                "depositClicked",
                "depositClicked"
              ),
            }
          )}
        >
          {hasVariant($state, "depositClicked", "depositClicked")
            ? "Until the offramp is enabled and secondary markets exist, staking FIL for iFIL is a one-way transaction"
            : "Until the offramp is enabled and secondary markets exist, staking FIL for iFIL is a one-way transaction"}
        </h6>
        <ConnectWalletButton
          data-plasmic-name={"connectWalletButton"}
          data-plasmic-override={overrides.connectWalletButton}
          className={classNames("__wab_instance", sty.connectWalletButton)}
        />

        <DepositForm
          data-plasmic-name={"depositForm"}
          data-plasmic-override={overrides.depositForm}
          className={classNames("__wab_instance", sty.depositForm)}
        />
      </p.Stack>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h3", "img", "connectWalletButton", "depositForm"],
  h3: ["h3"],
  img: ["img"],
  connectWalletButton: ["connectWalletButton"],
  depositForm: ["depositForm"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  h3: "h3";
  img: typeof p.PlasmicImg;
  connectWalletButton: typeof ConnectWalletButton;
  depositForm: typeof DepositForm;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDepositModalContent__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDepositModalContent__VariantsArgs;
    args?: PlasmicDepositModalContent__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDepositModalContent__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDepositModalContent__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicDepositModalContent__ArgProps,
          internalVariantPropNames: PlasmicDepositModalContent__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicDepositModalContent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDepositModalContent";
  } else {
    func.displayName = `PlasmicDepositModalContent.${nodeName}`;
  }
  return func;
}

export const PlasmicDepositModalContent = Object.assign(
  // Top-level PlasmicDepositModalContent renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h3: makeNodeComponent("h3"),
    img: makeNodeComponent("img"),
    connectWalletButton: makeNodeComponent("connectWalletButton"),
    depositForm: makeNodeComponent("depositForm"),

    // Metadata about props expected for PlasmicDepositModalContent
    internalVariantProps: PlasmicDepositModalContent__VariantProps,
    internalArgProps: PlasmicDepositModalContent__ArgProps,
  }
);

export default PlasmicDepositModalContent;
/* prettier-ignore-end */
