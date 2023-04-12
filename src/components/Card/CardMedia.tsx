import { IMAGE_LINK } from "@/constants";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const imgLink =
  "https://images.unsplash.com/photo-1681206691902-14878e9c28db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60";

interface IProps {
  imgSrc: string;
}

export const CardMedia = ({ imgSrc }: IProps) => {
  return (
    <Box w="100%" h={350} position="relative" overflow="hidden">
      <Image
        src={`${IMAGE_LINK}/${imgSrc}`}
        alt="movie"
        fill
        loading="lazy"
        style={{ objectFit: "cover" }}
      />
    </Box>
  );
};
