"use client";
import SignupModal from "@/components/loginRegister/SignupModal";
import { Lock } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = async (user) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("login success", response.data);
      toast.success("Login success");
      router.push("/");
    } catch (error) {
      toast.error(error.response.data.error);
      setLoading(false);
    }
  };

  return (
    <Box display="flex" justifyContent="center">
      <Box display="flex" flexDirection="column" width={400} mt={15} gap={4}>
        <Box display="flex" justifyContent="center" flexDirection="column">
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
              type="email"
              label="Email"
              {...register("email", { required: "Email is required" })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              label="Password"
              type="password"
              {...register("password", { required: "password is required" })}
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
            <Stack>
              <SignupModal />
            </Stack>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
