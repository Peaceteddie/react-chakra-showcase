import { Flex, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const TopNavBar = () => (
  <Flex padding="3rem">
    <svg viewBox="0 0 100 100" height="48" filter="url(#lighting)">
      <filter id="lighting">
        <feDropShadow
          dx="10%"
          dy="10%"
          stdDeviation="10%"
          floodColor={"aqua"}
        />
      </filter>

      <rect x="25" y="50" height="10" width="50" rx="5" ry="5" fill="hotpink" />
      <rect x="45" y="5" height="50" width="10" rx="5" ry="5" fill="hotpink" />
      <circle
        cx={50}
        cy={50}
        r={45}
        fill="transparent"
        stroke="hotpink"
        strokeWidth={5}
      />
    </svg>
    <Spacer />
    <Flex as="nav" fontSize="24" gap="2rem">
      <Link className="nav-bar-link" to="/">
        Home
      </Link>
      <Link className="nav-bar-link" to="work">
        Work
      </Link>
      <Link className="nav-bar-link" to="showcase">
        Showcase
      </Link>
    </Flex>
    <Spacer />
    <ColorModeSwitcher fontSize={"5xl"} size={"lg"} />
  </Flex>
);
