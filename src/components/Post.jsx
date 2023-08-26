import {
  Comment,
  Favorite,
  FavoriteBorder,
  MoreVert,
  Share,
  ThumbUp,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
const Post = ({ post }) => {
  return (
    <div>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              {post.userName}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
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
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to likes">
            <Typography>1</Typography>
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
