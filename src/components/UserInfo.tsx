import React from 'react'
import { Flex, Stack, Text } from "@chakra-ui/react";
import Image from 'next/image';
import { useSession } from 'next-auth/react';

export const UserInfo = () => {
  const { data } = useSession();
  return (
    <Flex gap={4} flexWrap="wrap" alignItems="center">
    <Image
      src={data?.user?.image || ""}
      width={100}
      height={100}
      style={{ borderRadius: "100%", objectFit: "cover" }}
      alt="me"
    />
    <Stack>
      <Text>{data?.user?.name}</Text>
      <Text>{data?.user?.email}</Text>
    </Stack>
  </Flex>
  )
}
