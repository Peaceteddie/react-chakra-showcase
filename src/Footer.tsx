import { Center, useColorModeValue } from "@chakra-ui/react";

export function Footer() {
  const color = useColorModeValue("gray.200", "gray.600");
  return (
    <Center bgColor={color} height={"5rem"}>
      &copy; Peaceteddie - All Rights Reserved
    </Center>
  );
}
