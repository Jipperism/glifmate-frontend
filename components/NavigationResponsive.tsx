import { Flex } from "@chakra-ui/react";
import React from "react";
interface NavigationResponsiveProps {
  className?: string;
  breakpoint: number;
  logo: React.ReactNode;
}

const NavigationResponsive = ({
  logo,
  className,
  breakpoint,
}: NavigationResponsiveProps) => {
  return (
    <Flex as="nav" className={className}>
      {logo}
    </Flex>
  );
};

export default NavigationResponsive;
