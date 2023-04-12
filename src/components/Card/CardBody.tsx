import { Flex, Stack, Text, CardBody as CrdBody } from "@chakra-ui/react";
import { StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

interface IProps {
  title: string;
  originalTitle: string;
  voteAverage: number;
  genreIds: number[];
  movieId: number;
}

export const CardBody = ({
  title,
  originalTitle,
  voteAverage,
  genreIds,
  movieId,
}: IProps) => {
  return (
    <CrdBody>
      <Stack>
        <Flex justifyContent="space-between">
          <Link
            href={`/movie/${movieId}`}
            style={{ fontWeight: 500, fontSize: 18 }}
          >
            {title || originalTitle}
          </Link>
          <Text display="flex" alignItems="center" columnGap={2}>
            <StarIcon width={15} height={15} />
            <span>{voteAverage}/10</span>
          </Text>
        </Flex>
        <Text>Action/Drama/Thriller</Text>
      </Stack>
    </CrdBody>
  );
};
