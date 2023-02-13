import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import Sidebar from "./Sidebar";
import "./styles/Root.scss";
import { TopNavBar } from "./TopNavBar";

export const Root = () => (
  <Box>
    <TopNavBar />
    <Sidebar />
    <Box minHeight={"calc(100vh - 14rem)"}>
      <Outlet />
    </Box>
    <Footer />
  </Box>
);
