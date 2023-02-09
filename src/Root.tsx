import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import "./styles/Root.scss";
import { TopNavBar } from "./TopNavBar";

export const Root = () => (
  <Box>
    <TopNavBar />
    <Outlet />
  </Box>
);
