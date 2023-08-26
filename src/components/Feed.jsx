"use client";
import { Box, CircularProgress } from "@mui/material";
import Post from "./Post";
import { useGetPostsQuery } from "@/redux/services/postApiSlice";

const Feed = () => {
  const { data: posts, isLoading, isError } = useGetPostsQuery();
  return (
    <Box flex={4} p={2}>
      {isLoading && <CircularProgress sx={{ display: "block", m: "auto" }} />}
      {posts?.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </Box>
  );
};

export default Feed;
