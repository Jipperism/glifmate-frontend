// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rLycm7fJPyjpC5eVgPhFFv
// Component: DVQmJDwc4r

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

import { useScreenVariants as useScreenVariantsqqPMw8O9H4JqN } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: qqPMw8o9H4jqN/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_pg_staking.module.css"; // plasmic-import: rLycm7fJPyjpC5eVgPhFFv/projectcss
import sty from "./PlasmicNavHomepage.module.css"; // plasmic-import: DVQmJDwc4r/css

export type PlasmicNavHomepage__VariantMembers = {};
export type PlasmicNavHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicNavHomepage__VariantsArgs;
export const PlasmicNavHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicNavHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicNavHomepage__ArgsType;
export const PlasmicNavHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicNavHomepage__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  connectWalletButton?: p.Flex<typeof ConnectWalletButton>;
};

export interface DefaultNavHomepageProps {
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

function PlasmicNavHomepage__RenderFunc(props: {
  variants: PlasmicNavHomepage__VariantsArgs;
  args: PlasmicNavHomepage__ArgsType;
  overrides: PlasmicNavHomepage__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsqqPMw8O9H4JqN(),
  });

  return (
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
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__ctHgR)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__zdy6Z)}
        >
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"50px" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"none" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"auto" as const}
            loading={"lazy" as const}
            src={{
              src: "/plasmic/pg_staking/images/glifLogoWhitesvg.svg",
              fullWidth: 110,
              fullHeight: 150,
              aspectRatio: 0.732394,
            }}
          />

          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__gvcAq
            )}
            component={Link}
            href={`/about`}
            platform={"nextjs"}
          >
            {"ABOUT"}
          </p.PlasmicLink>
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__ri5Lh
            )}
            component={Link}
            href={`/faq`}
            platform={"nextjs"}
          >
            {"FAQs"}
          </p.PlasmicLink>
        </p.Stack>
        <ConnectWalletButton
          data-plasmic-name={"connectWalletButton"}
          data-plasmic-override={overrides.connectWalletButton}
          className={classNames("__wab_instance", sty.connectWalletButton)}
        />
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "connectWalletButton"],
  img: ["img"],
  connectWalletButton: ["connectWalletButton"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof p.PlasmicImg;
  connectWalletButton: typeof ConnectWalletButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavHomepage__VariantsArgs;
    args?: PlasmicNavHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNavHomepage__ArgsType,
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
          internalArgPropNames: PlasmicNavHomepage__ArgProps,
          internalVariantPropNames: PlasmicNavHomepage__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicNavHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavHomepage";
  } else {
    func.displayName = `PlasmicNavHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicNavHomepage = Object.assign(
  // Top-level PlasmicNavHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    connectWalletButton: makeNodeComponent("connectWalletButton"),

    // Metadata about props expected for PlasmicNavHomepage
    internalVariantProps: PlasmicNavHomepage__VariantProps,
    internalArgProps: PlasmicNavHomepage__ArgProps,
  }
);

export default PlasmicNavHomepage;
/* prettier-ignore-end */
