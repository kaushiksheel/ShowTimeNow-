import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { signOut, useSession } from "next-auth/react";

export const DropDown = () => {
  const { data } = useSession();
  const { user } = data ?? {};

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon width={16} height={16} color="black" />}
        bg="white"
        _hover={{ bg: "white" }}
      >
        <Avatar src={user?.image || ""} name="kaushik" size="sm" />
      </MenuButton>
      <MenuList>
        <MenuItem>Profile</MenuItem>
        <MenuItem onClick={() => signOut()}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};
