import Image from "next/image";
import React from "react";

export const MovieInfoMedia = () => {
  return (
    <Image
      src="https://images.unsplash.com/photo-1680925719518-806b94fc438b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      width={250}
      height={500}
      alt="movie"
      style={{ objectFit: "cover", borderRadius: 7 }}
    />
  );
};
