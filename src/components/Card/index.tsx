import React from "react";
import { Card as Crd } from "@chakra-ui/react";
import { CardBody } from "./CardBody";
import { CardMedia } from "./CardMedia";
import { IMovie } from "@/interfaces/IMovie";

interface IProps {
  movie: IMovie;
}

export const Card = ({ movie }: IProps) => {
  const { title, original_title, vote_average, genre_ids, backdrop_path, id } =
    movie;
  return (
    <Crd w={"100%"}>
      <CardMedia imgSrc={backdrop_path} />
      <CardBody
        title={title}
        originalTitle={original_title}
        voteAverage={vote_average}
        genreIds={genre_ids}
        movieId={id}
      />
    </Crd>
  );
};
