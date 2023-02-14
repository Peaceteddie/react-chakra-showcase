import { Box, Flex, Button } from "@chakra-ui/react";
import { useState } from "react";
import FeatureCard from "./FeatureCard";

const count = 10;
const width = "500";
const height = width;
const theta = 360 / count;
const radius = Math.round(Number(width) / 2 / Math.tan(Math.PI / count));

export default function Showcase() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  function GetRotation(index: number) {
    return theta * index;
  }

  function TurnLeft() {
    setSelectedIndex(selectedIndex - 1);
    RotateCarousel();
  }
  function TurnRight() {
    setSelectedIndex(selectedIndex + 1);
    RotateCarousel();
  }
  function RotateCarousel() {
    return theta * selectedIndex * -1;
  }

  return (
    <Box>
      <div
        style={{
          position: "relative",
          width: width + "px",
          height: height + "px",
          margin: "auto",
          perspective: "1000px",
          //clipPath: "inset(0 0 round 50px)",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            transform:
              "translateZ(-" +
              radius +
              "px) rotateY(" +
              RotateCarousel() +
              "deg)",
            transformStyle: "preserve-3d",
            transition: "transform 1s",
          }}
        >
          {[...Array(count)].map((value, index) => (
            <Box
              style={{
                //backfaceVisibility: "hidden",
                position: "absolute",
                width: width + "px",
                height: height + "px",
                color: "white",
                textAlign: "center",
                transition: "transform 1s, opacity 1s",
                transform:
                  "rotateY(" +
                  GetRotation(index) +
                  "deg) translateZ(" +
                  radius +
                  "px)",
              }}
            >
              <Flex justify={"center"}>
                <FeatureCard maxWidth="xs" />
              </Flex>
            </Box>
          ))}
        </div>
      </div>
      <Flex align="center" justify="center" gap="50px" margin="auto">
        <Button blockSize={"60px"} inlineSize={"100px"} onClick={TurnLeft}>
          Left
        </Button>
        <Button blockSize={"60px"} inlineSize={"100px"} onClick={TurnRight}>
          Right
        </Button>
      </Flex>
    </Box>
  );
}
