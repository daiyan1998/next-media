"use client";

import { DarkModeContext } from "@/theme/ThemeContext";
import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  Chip,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import { useContext } from "react";
import CreatePost from "./shared/CreatePost";

const sidebarLists = [
  {
    title: "Homepage",
    icon: <Home />,
  },
  {
    title: "Pages",
    icon: <Article />,
  },
  {
    title: "Groups",
    icon: <Group />,
  },
  {
    title: "Marketplace",
    icon: <Storefront />,
  },
  {
    title: "Friends",
    icon: <Person />,
  },
  {
    title: "Settings",
    icon: <Settings />,
  },
  {
    title: "Profile",
    icon: <AccountBox />,
  },
];

const Sidebar = () => {
  const { toggleDarkMode } = useContext(DarkModeContext);

  // redux hooks

  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"} display="flex" flexDirection="column">
        <List>
          {sidebarLists.map(({ title, icon }) => (
            <>
              <ListItem key={title} disablePadding>
                <ListItemButton component="a" href="#home">
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={title} />
                  <Chip
                    size="small"
                    label="working"
                    color="error"
                    variant="outlined"
                    sx={{ ml: "10px" }}
                  ></Chip>
                </ListItemButton>
              </ListItem>
            </>
          ))}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onClick={toggleDarkMode} />
            </ListItemButton>
          </ListItem>
        </List>
        <CreatePost />
      </Box>
    </Box>
  );
};

export default Sidebar;
