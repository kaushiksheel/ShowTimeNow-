import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

interface IProps {
  title: string;
}

export const MovieInfoAction = ({ title }: IProps) => {
  const router = useRouter();

  const slugify = (title: string) => {
    const slug = title.split(" ").join("-").toLowerCase();
    return slug;
  };

  return (
    <Button
      onClick={() => router.push(`/booktickets/${slugify(title)}`)}
      bg="blue.50"
      _hover={{ bg: "blue.100" }}
      mt={3}
      color="white"
    >
      Book Tickets
    </Button>
  );
};
