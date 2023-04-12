import { Flex, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { MovieInfoMedia } from "./MovieInfoMedia";
import { MovieDetails } from "./MovieDetails";
import { IMovieInfo } from "@/interfaces/IMovie";

interface IProps {
  movie: IMovieInfo;
}

export const Header = ({ movie }: IProps) => {
  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");

  const {
    title,
    original_title,
    vote_average,
    genres,
    original_language,
    runtime,
    release_date,
    poster_path,
  } = movie;

  return (
    <>
      <Flex columnGap={5} flexDirection={isSmallerThan600 ? "column" : "row"}>
        <MovieInfoMedia posterPath={poster_path} />
        <MovieDetails
          title={title}
          originalTitle={original_title}
          voteAverage={vote_average}
          genres={genres}
          originalLanguage={original_language}
          runtime={runtime}
          releaseDate={release_date}
        />
      </Flex>
    </>
  );
};
