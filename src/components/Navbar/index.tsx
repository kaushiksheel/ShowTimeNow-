import { Box, Container, Flex, Text, Button } from "@chakra-ui/react";
import React from "react";
import { DropDown } from "./DropDown";
import { useSession, signIn } from "next-auth/react";
import { ThemeToggle } from "./ThemeToggle";
import { useRouter } from "next/router";

export const Navbar = () => {
  const { status } = useSession();
  const isAuthenticated = status === "authenticated" ? true : false;
  const router=useRouter();
  return (
    <Box>
      <Container maxW={1200}>
        <Flex justifyContent="space-between" paddingY={2}>
          <Text onClick={()=>router.push("/")} fontWeight="semibold" fontSize="xl" cursor="pointer">
            ShowTimeNow
          </Text>
          <Flex columnGap={3}>
            <ThemeToggle />
            {isAuthenticated ? (
              <DropDown />
            ) : (
              <Button
                textColor="white"
                _hover={{
                  background: "blue.100",
                }}
                bg="blue.50"
                onClick={() => signIn()}
              >
                Login
              </Button>
            )}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
