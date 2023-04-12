import React from "react";
import { useSession } from "next-auth/react";
import { Navbar } from "@/components/Navbar";
import { getMovies } from "@/services/requests";
import { IMovie } from "@/interfaces/IMovie";
import { GetServerSideProps } from "next";
import { Card } from "@/components/Card";
import { Container, SimpleGrid } from "@chakra-ui/react";

interface IProps {
  movies: IMovie[];
}

function Dashboard({ movies }: IProps) {
  const { data } = useSession();

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Container maxW={1200} mt={5}>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={5}>
            {movies?.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </SimpleGrid>
        </Container>
      </main>
    </>
  );
}

export default Dashboard;

export const getServerSideProps: GetServerSideProps<{
  movies: IMovie[];
}> = async () => {
  const movies = await getMovies();

  return {
    props: {
      movies: movies.results,
    },
  };
};
