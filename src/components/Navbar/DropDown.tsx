import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
  useTheme,
  useColorMode,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export const DropDown = () => {
  const router = useRouter();
  const { colorMode } = useColorMode();
  const { data } = useSession();
  const { user } = data ?? {};
  const isDark = colorMode === "dark" ? true : false;

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon width={16} height={16} />}
        bg={isDark ? "gray.800" : "white"}
        _hover={{ bg: isDark ? "gray.800" : "white" }}
      >
        <Avatar src={user?.image || ""} name="kaushik" size="sm" />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => router.push("/profile")}>Profile</MenuItem>
        <MenuItem onClick={() => signOut()}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};
