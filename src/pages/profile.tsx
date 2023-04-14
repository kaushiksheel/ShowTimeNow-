import { BookingsTable } from "@/components/BookingsTable";
import { Navbar } from "@/components/Navbar";
import { UserInfo } from "@/components/UserInfo";
import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";

function Profile() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Container maxW={1200} mt={4}>
          <UserInfo />
          <Box mt={5}>
            <Text fontWeight="semibold" fontSize="xl">
              Bookings
            </Text>
            <BookingsTable />
          </Box>
        </Container>
      </main>
    </>
  );
}

export default Profile;
