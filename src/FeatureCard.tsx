import {
  useColorModeValue,
  Card,
  CardHeader,
  CardBody,
  Img,
  Divider,
  CardFooter,
} from "@chakra-ui/react";

export default function FeatureCard({ maxWidth }: any) {
  const bgColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Card bgColor={bgColor} maxW={maxWidth === "" ? "sm" : maxWidth}>
      <CardHeader>Magical Card</CardHeader>
      <CardBody margin={3}>
        <Img
          src="https://via.placeholder.com/500"
          m={"auto"}
          sizes={"lg"}
          borderRadius={"3xl"}
        />
      </CardBody>
      <Divider />
      <CardFooter margin={3}>Thats a cool card huh?</CardFooter>
    </Card>
  );
}
