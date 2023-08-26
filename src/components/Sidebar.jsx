"use client";
import { DarkModeContext } from "@/theme/ThemeContext";
import styled from "@emotion/styled";
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
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  Switch,
  TextField,
  ToggleButton,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";

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

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));

const Sidebar = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  console.log(darkMode);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // TODO: add post
  const [addPost, setAddPost] = useState("");
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"} display="flex" flexDirection="column">
        <List>
          {sidebarLists.map(({ title, icon }) => (
            <ListItem key={title} disablePadding>
              <ListItemButton component="a" href="#home">
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
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
        <Button onClick={handleOpen} variant="contained">
          Post
        </Button>
        {/* Modal */}
        <StyledModal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            display="flex"
            flexDirection="column"
            width={400}
            bgcolor="background.default"
            color="text.primary"
            p={3}
            borderRadius={5}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              color="grey"
              textAlign="center"
            >
              Create a post
            </Typography>
            <UserBox onClick={() => setOpen(true)}>
              <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGpEk_t6sN7FFh_gE8eq0kVzTmsaGng5mMYA&usqp=CAU" />
              <Typography variant="h6">Rahat</Typography>
            </UserBox>
            <TextField
              onChange={(e) => setAddPost(e.target.value)}
              value={addPost}
              sx={{ m: "20px 0" }}
              size=""
              placeholder="Write you post"
              variant="standard"
              multiline
              rows={4}
              fullWidth
            ></TextField>
            <Button variant="contained">Post</Button>
          </Box>
        </StyledModal>
      </Box>
    </Box>
  );
};

export default Sidebar;
