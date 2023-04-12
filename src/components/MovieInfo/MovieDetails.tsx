import { Box, Text } from "@chakra-ui/react";
import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";
import { MovieInfoAction } from "./MovieInfoAction";
import { IGenre } from "@/interfaces/IMovie";

interface IProps {
  title: string;
  originalTitle: string;
  voteAverage: number;
  genres: IGenre[];
  originalLanguage: string;
  runtime: number;
  releaseDate: string;
}

export const MovieDetails = ({
  genres,
  originalLanguage,
  originalTitle,
  releaseDate,
  runtime,
  title,
  voteAverage,
}: IProps) => {
  return (
    <Box lineHeight={2}>
      <Text fontSize="4xl" fontWeight="semibold">
        {title || originalTitle}
      </Text>
      <Text
        display="flex"
        columnGap={2}
        alignItems="center"
        fontSize="2xl"
        mt={2}
      >
        <StarIcon width={25} height={25} />
        <span>{voteAverage}/10</span>
      </Text>
      <Text fontSize="xl" textColor="gray.200">
        Action/Thriller/Comedy
      </Text>
      <Text fontSize="xl" textColor="gray.200">
        English
      </Text>
      <Text fontSize="xl" textColor="gray.200">
        {runtime}
      </Text>
      <Text fontSize="xl" textColor="gray.200">
        {releaseDate}
      </Text>
      <MovieInfoAction />
    </Box>
  );
};
