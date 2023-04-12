import { Header } from "@/components/MovieInfo";
import { Navbar } from "@/components/Navbar";
import { IMovie, IMovieInfo } from "@/interfaces/IMovie";
import { getMovieById, getMovies } from "@/services/requests";
import { Container, Text, useColorMode } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";

interface IProps {
  movie: IMovieInfo;
}

function MovieInfo({ movie }: IProps) {
  const { colorMode } = useColorMode();

  const isDarkMode = colorMode === "dark" ? true : false;

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Container maxW={1200} mt={5}>
          <Header movie={movie} />
          <Text fontWeight="semibold" fontSize="xl" mt={5}>
            Overview
          </Text>
          <Text textColor={isDarkMode ? "gray.300" : "black"} mt={2}>
            {movie?.overview}
          </Text>
        </Container>
      </main>
    </>
  );
}

export default MovieInfo;

export const getStaticPaths: GetStaticPaths = async () => {
  const movies = (await getMovies()) as { results: IMovie[] };
  const paths = movies?.results?.map((movie) => {
    return {
      params: {
        id: movie.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
): Promise<{ props: { movie: IMovieInfo } }> => {
  const movieId = context.params?.id;
  const movie = await getMovieById(parseInt(movieId as string));

  return {
    props: { movie },
  };
};
