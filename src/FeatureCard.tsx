import {
  useColorModeValue,
  Card,
  CardHeader,
  CardBody,
  Img,
  Divider,
  CardFooter,
} from "@chakra-ui/react";

export function FeatureCard() {
  const bgColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Card bgColor={bgColor}>
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
