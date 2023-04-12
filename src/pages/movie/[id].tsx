import { Header } from "@/components/MovieInfo";
import { Navbar } from "@/components/Navbar";
import { Container, Text, useColorMode, useMediaQuery } from "@chakra-ui/react";
import React from "react";

function MovieInfo() {
  const { colorMode } = useColorMode();
  const [isSmallerThan600] = useMediaQuery('(max-width: 600px)')
  const isDarkMode = colorMode === "dark" ? true : false;
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Container maxW={1200} mt={5}>
          <Header />
          <Text fontWeight="semibold" fontSize="xl" mt={5}>
            Overview
          </Text>
          <Text textColor={isDarkMode ? "gray.300" : "black"} mt={2}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore in
            accusamus voluptatibus, impedit earum fugit nam at voluptatem autem,
            eveniet repellat. Distinctio, nisi! Eligendi incidunt optio
            inventore eveniet in cupiditate cumque voluptate fugiat, eius
            molestias commodi aliquam temporibus laboriosam accusamus nam
            perferendis nesciunt sit? Veniam, libero earum? Sit, quae harum!
          </Text>
        </Container>
      </main>
    </>
  );
}

export default MovieInfo;
