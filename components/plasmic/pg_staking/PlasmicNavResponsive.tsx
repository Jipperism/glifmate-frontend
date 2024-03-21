// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rLycm7fJPyjpC5eVgPhFFv
// Component: _B4LOOIRh-

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { NavigationBar } from "@plasmicpkgs/plasmic-nav";
import { ConnectWalletButton } from "@/components/connect-wallet-button"; // plasmic-import: aYoYQSYoB7/codeComponent

import { useScreenVariants as useScreenVariantsqqPMw8O9H4JqN } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: qqPMw8o9H4jqN/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_pg_staking.module.css"; // plasmic-import: rLycm7fJPyjpC5eVgPhFFv/projectcss
import sty from "./PlasmicNavResponsive.module.css"; // plasmic-import: _B4LOOIRh-/css

createPlasmicElementProxy;

export type PlasmicNavResponsive__VariantMembers = {};
export type PlasmicNavResponsive__VariantsArgs = {};
type VariantPropType = keyof PlasmicNavResponsive__VariantsArgs;
export const PlasmicNavResponsive__VariantProps = new Array<VariantPropType>();

export type PlasmicNavResponsive__ArgsType = {};
type ArgPropType = keyof PlasmicNavResponsive__ArgsType;
export const PlasmicNavResponsive__ArgProps = new Array<ArgPropType>();

export type PlasmicNavResponsive__OverridesType = {
  root?: Flex__<"div">;
  navigationBar?: Flex__<typeof NavigationBar>;
  link?: Flex__<"a"> & Partial<LinkProps>;
  about?: Flex__<"a"> & Partial<LinkProps>;
  faQs?: Flex__<"a"> & Partial<LinkProps>;
  connectWalletButton?: Flex__<typeof ConnectWalletButton>;
};

export interface DefaultNavResponsiveProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNavResponsive__RenderFunc(props: {
  variants: PlasmicNavResponsive__VariantsArgs;
  args: PlasmicNavResponsive__ArgsType;
  overrides: PlasmicNavResponsive__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsqqPMw8O9H4JqN()
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
      <NavigationBar
        data-plasmic-name={"navigationBar"}
        data-plasmic-override={overrides.navigationBar}
        brand={
          <PlasmicLink__
            data-plasmic-name={"link"}
            data-plasmic-override={overrides.link}
            className={classNames(projectcss.all, projectcss.a, sty.link)}
            component={Link}
            href={`/`}
            platform={"nextjs"}
          >
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__knpep)}
              displayHeight={"50px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"none"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              src={{
                src: "/plasmic/pg_staking/images/glifLogoBlack85Svg.svg",
                fullWidth: 110,
                fullHeight: 150,
                aspectRatio: 0.732394
              }}
            />
          </PlasmicLink__>
        }
        className={classNames("__wab_instance", sty.navigationBar)}
        closeButton={
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__cF2Fl)}
            displayHeight={"36px"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            src={"https://static1.plasmic.app/close.svg"}
          />
        }
        forceOpenMenu={true}
        itemsGap={24}
        menuItems={
          <React.Fragment>
            <PlasmicLink__
              data-plasmic-name={"about"}
              data-plasmic-override={overrides.about}
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.about
              )}
              component={Link}
              href={`/about`}
              platform={"nextjs"}
            >
              {"ABOUT"}
            </PlasmicLink__>
            <PlasmicLink__
              data-plasmic-name={"faQs"}
              data-plasmic-override={overrides.faQs}
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.faQs
              )}
              component={Link}
              href={`/faq`}
              platform={"nextjs"}
            >
              {"FAQs"}
            </PlasmicLink__>
            <ConnectWalletButton
              data-plasmic-name={"connectWalletButton"}
              data-plasmic-override={overrides.connectWalletButton}
              className={classNames("__wab_instance", sty.connectWalletButton)}
            />
          </React.Fragment>
        }
        openButton={
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img___4Ceh4)}
            displayHeight={"36px"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            src={"https://static1.plasmic.app/menu.svg"}
          />
        }
        responsiveBreakpoint={768}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navigationBar",
    "link",
    "about",
    "faQs",
    "connectWalletButton"
  ],
  navigationBar: [
    "navigationBar",
    "link",
    "about",
    "faQs",
    "connectWalletButton"
  ],
  link: ["link"],
  about: ["about"],
  faQs: ["faQs"],
  connectWalletButton: ["connectWalletButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navigationBar: typeof NavigationBar;
  link: "a";
  about: "a";
  faQs: "a";
  connectWalletButton: typeof ConnectWalletButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavResponsive__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavResponsive__VariantsArgs;
    args?: PlasmicNavResponsive__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavResponsive__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNavResponsive__ArgsType,
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
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicNavResponsive__ArgProps,
          internalVariantPropNames: PlasmicNavResponsive__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavResponsive__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavResponsive";
  } else {
    func.displayName = `PlasmicNavResponsive.${nodeName}`;
  }
  return func;
}

export const PlasmicNavResponsive = Object.assign(
  // Top-level PlasmicNavResponsive renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navigationBar: makeNodeComponent("navigationBar"),
    link: makeNodeComponent("link"),
    about: makeNodeComponent("about"),
    faQs: makeNodeComponent("faQs"),
    connectWalletButton: makeNodeComponent("connectWalletButton"),

    // Metadata about props expected for PlasmicNavResponsive
    internalVariantProps: PlasmicNavResponsive__VariantProps,
    internalArgProps: PlasmicNavResponsive__ArgProps
  }
);

export default PlasmicNavResponsive;
/* prettier-ignore-end */
