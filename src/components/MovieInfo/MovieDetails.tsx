import { Box, Text } from "@chakra-ui/react";
import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";
import { MovieInfoAction } from "./MovieInfoAction";

export const MovieDetails = () => {
  return (
    <Box lineHeight={2}>
      <Text fontSize="4xl" fontWeight="semibold">
        Creed
      </Text>
      <Text
        display="flex"
        columnGap={2}
        alignItems="center"
        fontSize="2xl"
        mt={2}
      >
        <StarIcon width={25} height={25} />
        <span>9.1/10</span>
      </Text>
      <Text fontSize="xl" textColor="gray.200">
        Action/Thriller/Comedy
      </Text>
      <Text fontSize="xl" textColor="gray.200">
        English
      </Text>
      <Text fontSize="xl" textColor="gray.200">
        1h 32m
      </Text>
      <Text fontSize="xl" textColor="gray.200">
        7Apr,2023
      </Text>
      <MovieInfoAction />
    </Box>
  );
};
