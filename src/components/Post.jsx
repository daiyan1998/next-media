import {
  useDeletePostMutation,
  useGetPostsQuery,
} from "@/redux/services/postApiSlice";
import { Clear, Comment, ThumbUp } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import { toast } from "react-hot-toast";
const Post = ({ post }) => {
  const [deletePost] = useDeletePostMutation();
  const fetch = useGetPostsQuery();
  const deletePostHandler = async () => {
    const { data } = await deletePost({ id: post._id });
    fetch.refetch();
    toast.success(data.message);
  };
  return (
    <div>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar
              src={post.photoUrl}
              sx={{ bgcolor: "red" }}
              aria-label="recipe"
            ></Avatar>
          }
          action={
            <IconButton onClick={deletePostHandler} aria-label="delete">
              <Clear />
            </IconButton>
          }
          title={post.userName}
          subheader="September 14, 2016"
        />
        {/* <CardMedia
          component="img"
          height="20%"
          image="https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&w=440&h=220&q=60"
          alt="Paella dish"
        /> */}
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {post.content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to likes">
            <Checkbox
              icon={<ThumbUp />}
              checkedIcon={<ThumbUp sx={{ color: "primary" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Comment />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
