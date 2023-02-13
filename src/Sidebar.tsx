import { Box, Center, Icon, useColorModeValue } from "@chakra-ui/react";
import { ReactComponent as GithubIcon } from "./assets/github-mark.svg";
import { ReactComponent as GithubIconWhite } from "./assets/github-mark-white.svg";

export default function Sidebar() {
  const size = [12, 14, 16];
  const smaller = size.map((num) => num / 2);

  const bgColor = useColorModeValue("gray.200", "gray.600");
  const GHIcon = useColorModeValue(GithubIcon, GithubIconWhite);

  return (
    <Box left="0" position="fixed" top="12rem" width={size}>
      <Icon viewBox="0 0 50 50" color={bgColor} height={size} width={size}>
        <path d="M 0 0 C 0,50 50,25 50,50 H0Z" fill="currentColor" />
      </Icon>
      <Center bgColor={bgColor} flexDirection={"column"} padding={smaller}>
        <a
          href="https://www.github.com/peaceteddie/"
          rel="noreferrer"
          target="_blank"
          title="Link to my github"
        >
          <Icon
            viewBox="0 0 98 96"
            height={size}
            marginBlock={smaller}
            padding={2}
            width={size}
          >
            <GHIcon />
          </Icon>
        </a>
      </Center>
      <Icon viewBox="0 100 50 50" color={bgColor} height={size} width={size}>
        <path d="M 0 150 C 0,100 50,125 50,100 H0" fill="currentColor" />
      </Icon>
    </Box>
  );
}
