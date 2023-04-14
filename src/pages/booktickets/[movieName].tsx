import { BookTicketsHeader } from "@/components/BookTicketsHeader";
import { Checkout } from "@/components/Checkout";
import { Seats } from "@/components/Seats";
import { SelectTiming } from "@/components/SelectTiming";
import { formatSlug } from "@/utilities/formatUtils";
import { Box, Button, Container } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

function MovieName() {
  const router = useRouter();
  const { query } = router;
  const movieName = query.movieName as string;

  return (
    <>
      <BookTicketsHeader
        movieName={formatSlug(movieName)}
        numberOfTickets={1}
      />
      <main>
        <Container maxW={1200} mt={5}>
          <SelectTiming />
          <Box marginX="auto" marginY={12} w="fit-content">
            <Seats />
          </Box>
          {/* <Button marginX="auto" w="fit-content">
            Pay 200
          </Button> */}
          <Checkout />
        </Container>
      </main>
    </>
  );
}

export default MovieName;
