import { rows, seats } from "@/data";
import { Box, Flex, Text } from "@chakra-ui/react";

function Seat({ seatNumber }: { seatNumber: string }) {
  return (
    <Box
      bg="gray.700"
      border="2px solid"
      borderRadius="md"
      borderColor="gray.700"
      w={35}
      h={35}
      display="grid"
      placeContent="center"
      mr={2}
      mb={2}
      cursor="pointer"
      _hover={{ bg: "blue.50" }}
    >
      <Text fontWeight="bold">{seatNumber}</Text>
    </Box>
  );
}

function Row({
  rowName,
  seatNumbers,
}: {
  rowName: string;
  seatNumbers: string[];
}) {
    
  return (
    <Flex alignItems="center" mb={4} gap={5}>
      <Text fontWeight="bold" mr={2}>
        {rowName}
      </Text>
      {seatNumbers.map((seatNumber) => (
        <Seat key={seatNumber} seatNumber={seatNumber} />
      ))}
    </Flex>
  );
}

export const Seats = () => {
  return (
    <Box>
      {rows.map((rowName) => (
        <Row key={rowName} rowName={rowName} seatNumbers={seats} />
      ))}
    </Box>
  );
};
