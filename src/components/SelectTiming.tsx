import { HStack, Tag } from "@chakra-ui/react";
import React, { useState } from "react";

const timings = [
  {
    id: 1,
    time: "12.00 PM",
  },
  {
    id: 2,
    time: "3.00 PM",
  },
  {
    id: 3,
    time: "6.00 PM",
  },
  {
    id: 4,
    time: "10.00 PM",
  },
];

export const Time = ({
  time,
  onSelectedTime,
  selectedTime,
}: {
  time: string;
  onSelectedTime: (selectedTime: string) => void;
  selectedTime: string;
}) => {
  return (
    <Tag
      onClick={() => onSelectedTime(time)}
      size="lg"
      variant={selectedTime === time ? "solid" : "outline"}
      colorScheme="purple"
      cursor="pointer"
    >
      {time}
    </Tag>
  );
};

export const SelectTiming = () => {
  const [selectedTime, setSelectedTime] = useState(timings[0].time);

  return (
    <HStack spacing={4}>
      {timings.map(({ id, time }) => (
        <Time
          selectedTime={selectedTime}
          onSelectedTime={setSelectedTime}
          key={id}
          time={time}
        />
      ))}
    </HStack>
  );
};
