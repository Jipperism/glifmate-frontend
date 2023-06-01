import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Hide,
  HStack,
  Show,
  useDisclosure,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Hamburger from "hamburger-react";
import { ConnectWalletButton } from "@/components/connect-wallet-button";

import "@rainbow-me/rainbowkit/styles.css";

interface NavigationResponsiveProps {
  className?: string;
  breakpoint: number;
  logo: React.ReactNode;
  urls: React.ReactNode;
}

export const NavigationResponsive = ({
  logo,
  className,
  urls,
  breakpoint,
}: NavigationResponsiveProps) => {
  const isDesktopBreakpoint = `(min-width: ${breakpoint}px)`;
  const [isDesktop] = useMediaQuery(isDesktopBreakpoint);

  const headerRef = React.useRef<HTMLDivElement>(null);

  const backgroundBlue = "#56B9FF";

  const { isOpen, onToggle, onClose } = useDisclosure();
  const offset = headerRef.current?.clientHeight || 0;
  // const offset = "100px";

  return (
    <Flex
      as="nav"
      className={className}
      zIndex={isDesktop ? undefined : 10000}
      backgroundColor={!isDesktop && isOpen ? backgroundBlue : undefined}
      ref={headerRef}
    >
      <Box mr={10}>{logo}</Box>
      <Show breakpoint={isDesktopBreakpoint}>
        <HStack spacing={"20px"}>{urls}</HStack>
      </Show>
      <Flex alignItems={"center"} ml={"auto"}>
        <Hide breakpoint={isDesktopBreakpoint}>
          <Hamburger onToggle={onToggle} toggled={isOpen} />
        </Hide>
        <Show breakpoint={isDesktopBreakpoint}>
          <ConnectWalletButton breakpoint={breakpoint} />
        </Show>
      </Flex>
      <Drawer
        placement={"top"}
        onClose={onClose}
        isOpen={isOpen}
        blockScrollOnMount={true}
      >
        <DrawerOverlay sx={{ marginTop: offset }} />
        <DrawerContent
          backgroundColor={backgroundBlue}
          sx={{ marginTop: offset }}
        >
          <DrawerBody paddingBottom={"28px"}>
            <VStack
              alignItems={"flex-start"}
              paddingBottom={"20px"}
              sx={{ fontSize: 28 }}
            >
              {urls}
            </VStack>
            <Box>
              <ConnectWalletButton breakpoint={breakpoint} />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default NavigationResponsive;
