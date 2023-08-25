"use client";
import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import Image from "next/image";

const avatars = [
  {
    name: "Remy Sharp",
    img: "https://mui.com/static/images/avatar/1.jpg",
  },
  {
    name: "Travis Howard",
    img: "https://mui.com/static/images/avatar/2.jpg",
  },
  {
    name: "Agnes Walker",
    img: "https://mui.com/static/images/avatar/4.jpg",
  },
  {
    name: "Trevor Henderson",
    img: "https://mui.com/static/images/avatar/5.jpg",
  },
];

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box
        position="fixed"
        width={"300"}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
        }}
      >
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup total={24} sx={{ justifyContent: "start" }}>
          {avatars.map(({ name, img }) => (
            <Avatar key={name} alt={name} src={img} />
          ))}
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100}>
          Latest Photos
        </Typography>
        <ImageList sx={{ width: 300 }} cols={3} rowHeight={164}>
          {[1, 2, 3].map((item) => (
            <ImageListItem key={item.img}>
              <Image
                alt=""
                src={`https://plus.unsplash.com/premium_photo-1664640458245-79940603ce45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60`}
                loading="lazy"
                width={100}
                height={100}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

export default Rightbar;
