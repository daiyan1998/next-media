"use client";
import { Box, Stack } from "@mui/material";
import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";
import Rightbar from "@/components/Rightbar";
import NavBarV1 from "@/components/NavbarV1";

export default function Home() {
  return (
    <Box bgcolor="background.default" color="text.primary">
      <NavBarV1 />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar></Sidebar>
        <Feed></Feed>
        <Rightbar></Rightbar>
      </Stack>
    </Box>
  );
}
