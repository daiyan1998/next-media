import { Add } from "@mui/icons-material";
import { Fab, Tooltip } from "@mui/material";

const AddPost = () => {
  return (
    <>
      <Tooltip title="Delete">
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>
    </>
  );
};

export default AddPost;
