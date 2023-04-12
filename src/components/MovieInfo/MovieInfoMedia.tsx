import { IMAGE_LINK } from "@/constants";
import Image from "next/image";
import React from "react";

interface IProps {
  posterPath: string;
}

export const MovieInfoMedia = ({ posterPath }: IProps) => {
  return (
    <Image
      src={`${IMAGE_LINK}/${posterPath}`}
      width={250}
      height={500}
      alt="movie"
      style={{ objectFit: "cover", borderRadius: 7 }}
    />
  );
};
