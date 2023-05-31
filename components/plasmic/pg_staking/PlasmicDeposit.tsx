// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rLycm7fJPyjpC5eVgPhFFv
// Component: u23Jt2pEJ7

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
import Nav from "../../Nav"; // plasmic-import: DVQmJDwc4r/component
import { DepositForm } from "@/components/forms/deposit-form"; // plasmic-import: jzMDyQ-x2A/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_pg_staking.module.css"; // plasmic-import: rLycm7fJPyjpC5eVgPhFFv/projectcss
import sty from "./PlasmicDeposit.module.css"; // plasmic-import: u23Jt2pEJ7/css

export type PlasmicDeposit__VariantMembers = {};
export type PlasmicDeposit__VariantsArgs = {};
type VariantPropType = keyof PlasmicDeposit__VariantsArgs;
export const PlasmicDeposit__VariantProps = new Array<VariantPropType>();

export type PlasmicDeposit__ArgsType = {};
type ArgPropType = keyof PlasmicDeposit__ArgsType;
export const PlasmicDeposit__ArgProps = new Array<ArgPropType>();

export type PlasmicDeposit__OverridesType = {
  root?: p.Flex<"div">;
  nav?: p.Flex<typeof Nav>;
  depositForm?: p.Flex<typeof DepositForm>;
};

export interface DefaultDepositProps {}

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

function PlasmicDeposit__RenderFunc(props: {
  variants: PlasmicDeposit__VariantsArgs;
  args: PlasmicDeposit__ArgsType;
  overrides: PlasmicDeposit__OverridesType;
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

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicDeposit.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicDeposit.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicDeposit.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <Nav
            data-plasmic-name={"nav"}
            data-plasmic-override={overrides.nav}
            className={classNames("__wab_instance", sty.nav)}
          />

          <DepositForm
            data-plasmic-name={"depositForm"}
            data-plasmic-override={overrides.depositForm}
            className={classNames("__wab_instance", sty.depositForm)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "nav", "depositForm"],
  nav: ["nav"],
  depositForm: ["depositForm"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  nav: typeof Nav;
  depositForm: typeof DepositForm;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDeposit__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDeposit__VariantsArgs;
    args?: PlasmicDeposit__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDeposit__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDeposit__ArgsType,
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
          internalArgPropNames: PlasmicDeposit__ArgProps,
          internalVariantPropNames: PlasmicDeposit__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicDeposit__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDeposit";
  } else {
    func.displayName = `PlasmicDeposit.${nodeName}`;
  }
  return func;
}

export const PlasmicDeposit = Object.assign(
  // Top-level PlasmicDeposit renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    nav: makeNodeComponent("nav"),
    depositForm: makeNodeComponent("depositForm"),

    // Metadata about props expected for PlasmicDeposit
    internalVariantProps: PlasmicDeposit__VariantProps,
    internalArgProps: PlasmicDeposit__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Deposit",
      description: "",
      ogImageSrc: "",
      canonical: "",
    },
  }
);

export default PlasmicDeposit;
/* prettier-ignore-end */
