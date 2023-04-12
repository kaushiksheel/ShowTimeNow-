import { Box, Container, Flex, Text, Button } from "@chakra-ui/react";
import React from "react";
import { DropDown } from "./DropDown";
import { useSession, signIn } from "next-auth/react";

export const Navbar = () => {
  const { status } = useSession();
  const isAuthenticated = status === "authenticated" ? true : false;
  return (
    <Box>
      <Container maxW={1200}>
        <Flex justifyContent="space-between" paddingY={2}>
          <Text fontWeight="semibold" fontSize="xl">
            ShowTimeNow
          </Text>
          {isAuthenticated ? (
            <DropDown />
          ) : (
            <Button
              textColor="white"
              _hover={{
                background: "linear(to-l, #7928CA, #FF0080)",
              }}
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              onClick={() => signIn()}
            >
              Login
            </Button>
          )}
        </Flex>
      </Container>
    </Box>
  );
};
