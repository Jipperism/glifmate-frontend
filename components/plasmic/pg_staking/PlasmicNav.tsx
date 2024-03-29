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

import { ConnectWalletButton } from "@/components/connect-wallet-button"; // plasmic-import: aYoYQSYoB7/codeComponent

import { useScreenVariants as useScreenVariantsqqPMw8O9H4JqN } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: qqPMw8o9H4jqN/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_pg_staking.module.css"; // plasmic-import: rLycm7fJPyjpC5eVgPhFFv/projectcss
import sty from "./PlasmicNav.module.css"; // plasmic-import: DVQmJDwc4r/css

createPlasmicElementProxy;

export type PlasmicNav__VariantMembers = {
  activeUrl: "faQs" | "about" | "home";
};
export type PlasmicNav__VariantsArgs = {
  activeUrl?: SingleChoiceArg<"faQs" | "about" | "home">;
};
type VariantPropType = keyof PlasmicNav__VariantsArgs;
export const PlasmicNav__VariantProps = new Array<VariantPropType>("activeUrl");

export type PlasmicNav__ArgsType = {};
type ArgPropType = keyof PlasmicNav__ArgsType;
export const PlasmicNav__ArgProps = new Array<ArgPropType>();

export type PlasmicNav__OverridesType = {
  root?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  connectWalletButton?: Flex__<typeof ConnectWalletButton>;
};

export interface DefaultNavProps {
  activeUrl?: SingleChoiceArg<"faQs" | "about" | "home">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNav__RenderFunc(props: {
  variants: PlasmicNav__VariantsArgs;
  args: PlasmicNav__ArgsType;
  overrides: PlasmicNav__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "activeUrl",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.activeUrl
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

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
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__ctHgR)}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__zdy6Z)}
        >
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__zeXoU,
              {
                [sty.linkactiveUrl_home__zeXoUuT4Y5]: hasVariant(
                  $state,
                  "activeUrl",
                  "home"
                )
              }
            )}
            component={Link}
            href={`/`}
            platform={"nextjs"}
          >
            <PlasmicImg__
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img, {
                [sty.imgactiveUrl_home]: hasVariant($state, "activeUrl", "home")
              })}
              displayHeight={"50px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"none"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              loading={"lazy"}
              src={
                hasVariant($state, "activeUrl", "home")
                  ? {
                      src: "/plasmic/pg_staking/images/glifLogoWhitesvg.svg",
                      fullWidth: 110,
                      fullHeight: 150,
                      aspectRatio: 0.732394
                    }
                  : {
                      src: "/plasmic/pg_staking/images/builtOnGlifpng2.png",
                      fullWidth: 600,
                      fullHeight: 952,
                      aspectRatio: undefined
                    }
              }
            />
          </PlasmicLink__>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__gvcAq,
              {
                [sty.linkactiveUrl_about__gvcAqubnt1]: hasVariant(
                  $state,
                  "activeUrl",
                  "about"
                )
              }
            )}
            component={Link}
            href={`/about`}
            platform={"nextjs"}
          >
            {"ABOUT"}
          </PlasmicLink__>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__ri5Lh,
              {
                [sty.linkactiveUrl_faQs__ri5LHuuFxr]: hasVariant(
                  $state,
                  "activeUrl",
                  "faQs"
                )
              }
            )}
            component={Link}
            href={`/faq`}
            platform={"nextjs"}
          >
            {"FAQs"}
          </PlasmicLink__>
        </Stack__>
        <ConnectWalletButton
          data-plasmic-name={"connectWalletButton"}
          data-plasmic-override={overrides.connectWalletButton}
          className={classNames("__wab_instance", sty.connectWalletButton)}
        />
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "connectWalletButton"],
  img: ["img"],
  connectWalletButton: ["connectWalletButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof PlasmicImg__;
  connectWalletButton: typeof ConnectWalletButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNav__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNav__VariantsArgs;
    args?: PlasmicNav__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNav__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNav__ArgsType,
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
          internalArgPropNames: PlasmicNav__ArgProps,
          internalVariantPropNames: PlasmicNav__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNav__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNav";
  } else {
    func.displayName = `PlasmicNav.${nodeName}`;
  }
  return func;
}

export const PlasmicNav = Object.assign(
  // Top-level PlasmicNav renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    connectWalletButton: makeNodeComponent("connectWalletButton"),

    // Metadata about props expected for PlasmicNav
    internalVariantProps: PlasmicNav__VariantProps,
    internalArgProps: PlasmicNav__ArgProps
  }
);

export default PlasmicNav;
/* prettier-ignore-end */
