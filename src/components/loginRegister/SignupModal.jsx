"use client";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useForm } from "react-hook-form";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Stack, Typography } from "@mui/material";
import { Lock } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import toast from "react-hot-toast";
import axios from "axios";

export default function SignupModal() {
  const [loading, setLoading] = React.useState(false);
  // success alert

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      photoUrl: "",
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  // Signup clicked
  const onSubmit = async (user) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);

      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Typography
        fontSize={15}
        color={"primary"}
        sx={{ textDecoration: "underline", cursor: "pointer" }}
        onClick={handleClickOpen}
      >
        Don&apos;t have an account? Sign Up
      </Typography>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Registration</DialogTitle>
        <DialogContent>
          <Box display="flex" justifyContent="center">
            <Box
              display="flex"
              flexDirection="column"
              width={400}
              mt={15}
              gap={4}
            >
              <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
              >
                <Lock
                  sx={{
                    alignSelf: "center",
                    bgcolor: "purple",
                    p: 2,
                    borderRadius: 7,
                    color: "white",
                  }}
                />
                <Typography variant="h6" textAlign="center">
                  Give Your Info
                </Typography>
              </Box>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Stack gap={3}>
                  <TextField
                    type="text"
                    label="Name"
                    {...register("username", { required: "Name is required" })}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                  />

                  <TextField
                    type="email"
                    label="Email"
                    {...register("email", { required: "Email is required" })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                  <TextField
                    type="url"
                    label="Photo URL"
                    {...register("photoUrl", {
                      required: "Photo Url is required",
                    })}
                    error={!!errors.photoUrl}
                    helperText={errors.photoUrl?.message}
                  />
                  <TextField
                    label="Password"
                    type="password"
                    {...register("password", {
                      required: "password is required",
                    })}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                  />
                  <LoadingButton
                    type="submit"
                    loading={loading}
                    loadingPosition="center"
                    variant="contained"
                  >
                    Sign Up
                  </LoadingButton>
                </Stack>
              </form>
            </Box>
          </Box>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
