import { Container, SimpleGrid } from "@chakra-ui/react";
import { FeatureCard } from "./FeatureCard";

export const App = () => (
  <Container maxW={"60vw"} marginBlock="10rem">
    <SimpleGrid minChildWidth={"20rem"} spacingX="5rem" spacingY="10rem">
      <FeatureCard />
      <FeatureCard />
      <FeatureCard />
      <FeatureCard />
      <FeatureCard />
      <FeatureCard />
      <FeatureCard />
      <FeatureCard />
      <FeatureCard />
    </SimpleGrid>
  </Container>
);
