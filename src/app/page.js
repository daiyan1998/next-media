import Image from "next/image";
import styles from "./page.module.css";
import { Box, Stack } from "@mui/material";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";
import Rightbar from "@/components/Rightbar";
import { ThemeContext } from "@/theme/ThemeContext";

export default function Home() {
  return (
    <ThemeContext>
      <Box bgcolor="background.default" color="text.primary">
        <Navbar></Navbar>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar></Sidebar>
          <Feed></Feed>
          <Rightbar></Rightbar>
        </Stack>
      </Box>
    </ThemeContext>
  );
}
