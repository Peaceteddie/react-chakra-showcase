import { Container, SimpleGrid } from "@chakra-ui/react";
import FeatureCard from "./FeatureCard";

export const App = () => (
  <Container maxW={"60vw"} marginBlock="10rem">
    <SimpleGrid minChildWidth={"xs"} spacingX="5rem" spacingY="10rem">
      {[...Array(9)].map(() => (
        <FeatureCard maxWidth="xs" />
      ))}
    </SimpleGrid>
  </Container>
);
