import { Flex, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { MovieInfoMedia } from "./MovieInfoMedia";
import { MovieDetails } from "./MovieDetails";

export const Header = () => {
  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
  return (
    <>
      <Flex columnGap={5} flexDirection={isSmallerThan600 ? "column" : "row"}>
        <MovieInfoMedia />
        <MovieDetails />
      </Flex>
    </>
  );
};
