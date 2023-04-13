import { Button, Flex, HStack, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import React from "react";

interface IProps {
  movieName: string;
  numberOfTickets: number;
}

export const BookTicketsHeader = ({ movieName, numberOfTickets }: IProps) => {
  const router = useRouter();
  return (
    <header>
      <Flex
        py={4}
        maxW={1200}
        marginX="auto"
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack onClick={() => router.back()} cursor="pointer">
          <ChevronLeftIcon width={20} height={20} />
          <Text fontWeight={500}>{movieName}</Text>
        </HStack>
        <Button
          leftIcon={<PencilSquareIcon width={15} height={15} />}
          variant="solid"
          size="sm"
        >
          Tickets ({numberOfTickets})
        </Button>
      </Flex>
    </header>
  );
};
