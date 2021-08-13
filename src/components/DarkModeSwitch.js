import { useColorMode, Switch } from "@chakra-ui/react";
import { useEffect } from "react";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  useEffect(() => {
    if (isDark) {
      toggleColorMode();
    }
  }, [isDark]);
  return null;
};
