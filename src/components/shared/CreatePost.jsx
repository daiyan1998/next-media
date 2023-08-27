import React, { useState } from "react";
import {
  useAddPostMutation,
  useGetPostsQuery,
} from "@/redux/services/postApiSlice";
import { useGetActiveUserQuery } from "@/redux/services/userApiSlice";
import UserBox from "@/sharedComponents/UserBox";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
} from "@mui/material";

const CreatePost = () => {
  // States
  const [post, setPost] = useState("");
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  // redux hooks
  const { data: user } = useGetActiveUserQuery();
  const [addPost] = useAddPostMutation();
  const fetchPosts = useGetPostsQuery();
  const addPostHandler = async () => {
    await addPost({
      userName: user.data.username,
      userId: user.data._id,
      content: post,
    });
    fetchPosts.refetch();
  };
  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Add a Post
      </Button>
      <Dialog
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
            onChange={(e) => setPost(e.target.value)}
            value={post}
            sx={{ m: "20px 0" }}
            size=""
            placeholder="Write you post"
            variant="standard"
            multiline
            rows={4}
            fullWidth
          ></TextField>
          <Button onClick={addPostHandler} variant="contained">
            Post
          </Button>
        </Box>
      </Dialog>
    </>
  );
};

export default CreatePost;
