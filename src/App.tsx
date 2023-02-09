import { Box, Container, Flex } from "@chakra-ui/react";
import { FeatureCard } from "./FeatureCard";

export const App = () => (
  <Box textAlign="center" fontSize="xl">
    <Container>
      <Flex direction={"column"}>
        <FeatureCard />
      </Flex>
    </Container>
  </Box>
);
