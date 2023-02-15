import {
  Box,
  Flex,
  Button,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Checkbox,
  Center,
} from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import FeatureCard from "./FeatureCard";

export default function Showcase() {
  const [count, setCount] = useState(10);
  const [width, setWidth] = useState(400);
  const [visualIndex, setVisualIndex] = useState(0);
  const [perspective, setPerspective] = useState(1000);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [useClipPath, setUseClipPath] = useState(false);
  const [useBackface, setUseBackface] = useState(false);
  const [infiniteLoop, setInfiniteLoop] = useState(false);

  const height = width;
  const theta = 360 / count;
  const radius = Math.round(Number(width) / 2 / Math.tan(Math.PI / count));

  var ref = useRef(true);

  useEffect(() => {
    if (ref.current !== infiniteLoop) {
      ref.current = infiniteLoop;
      setSelectedIndex(0);
      setVisualIndex(0);
    }
  }, [infiniteLoop]);

  function GetRotation(index: number) {
    return theta * index;
  }

  function TurnLeft() {
    if (!infiniteLoop && selectedIndex === 0) return;

    setSelectedIndex(selectedIndex - 1);
    setVisualIndex(visualIndex - 1);
    RotateCarousel();
  }
  function TurnRight() {
    if (!infiniteLoop && selectedIndex === count - 1) return;
    setSelectedIndex(selectedIndex + 1);
    setVisualIndex(visualIndex + 1);
    RotateCarousel();
  }
  function RotateCarousel() {
    return theta * selectedIndex * -1;
  }

  return (
    <Flex direction={"column"}>
      <div
        style={{
          position: "relative",
          width: width + "px",
          height: height * 1.5 + "px",
          margin: "auto",
          perspective: perspective,
          clipPath: useClipPath ? "inset(0 0 round 50px)" : "",
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
                backfaceVisibility: useBackface ? "hidden" : "visible",
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
      <Flex
        justify={"space-around"}
        gap="100px"
        marginTop={"150px"}
        position="absolute"
        bottom={"5rem"}
        width="100%"
      >
        <Button blockSize={"60px"} inlineSize={"100px"} onClick={TurnLeft}>
          Left
        </Button>
        <div style={{ flexGrow: "1" }}>
          <Center>
            Clip Path:
            <Checkbox
              mx={10}
              isChecked={useClipPath}
              onChange={(e) => setUseClipPath(e.target.checked)}
            />
            Backface culling:
            <Checkbox
              mx={10}
              isChecked={useBackface}
              onChange={(e) => setUseBackface(e.target.checked)}
            />
            Infinite loop:
            <Checkbox
              mx={10}
              isChecked={infiniteLoop}
              onChange={(e) => setInfiniteLoop(e.target.checked)}
            />
          </Center>
          Selected Index
          <Slider
            min={0}
            step={1}
            max={count - 1}
            value={infiniteLoop ? 0 : visualIndex}
            onChange={setVisualIndex}
            onChangeEnd={setSelectedIndex}
            defaultValue={selectedIndex}
            isDisabled={infiniteLoop}
          >
            <SliderMark
              value={infiniteLoop ? 0 : visualIndex}
              textAlign="center"
              bg="blue.500"
              color="white"
              mt="-10"
              ml="-5"
              w="12"
            >
              {infiniteLoop ? 0 : visualIndex}
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          Count
          <Slider
            min={4}
            max={50}
            step={2}
            value={count}
            onChange={setCount}
            defaultValue={count}
          >
            <SliderMark
              value={count}
              textAlign="center"
              bg="blue.500"
              color="white"
              mt="-10"
              ml="-5"
              w="12"
            >
              {count}
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          Width
          <Slider
            min={100}
            max={600}
            step={10}
            defaultValue={width}
            onChange={setWidth}
          >
            <SliderMark
              value={width}
              textAlign="center"
              bg="blue.500"
              color="white"
              mt="-10"
              ml="-5"
              w="12"
            >
              {width}
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          Perspective
          <Slider
            min={0}
            max={2000}
            step={100}
            defaultValue={perspective}
            onChange={setPerspective}
          >
            <SliderMark
              value={perspective}
              textAlign="center"
              bg="blue.500"
              color="white"
              mt="-10"
              ml="-5"
              w="12"
            >
              {perspective}
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </div>
        <Button blockSize={"60px"} inlineSize={"100px"} onClick={TurnRight}>
          Right
        </Button>
      </Flex>
    </Flex>
  );
}
