"use client";
import { Lock } from "@mui/icons-material";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { useForm } from "react-hook-form";

const Login = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
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
            <Button type="submit" variant="contained">
              Sign In
            </Button>
            <Stack>
              <Typography
                fontSize={15}
                color={"primary"}
                sx={{ textDecoration: "underline", cursor: "pointer" }}
              >
                Don&apos;t have an account? Sign Up
              </Typography>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
