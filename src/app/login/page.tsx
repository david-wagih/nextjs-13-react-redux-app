// want to design a login page
"use client";

import {
  Box,
  Button,
  FormControl,
  FormGroup,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";

import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(username);
    console.log(password);
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "40px",
      }}
    >
      <Typography variant="h4" sx={{ margin: "10px auto" }}>
        Login
      </Typography>

      <FormGroup sx={{ margin: "10px auto" }}>
        <FormControl required>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ margin: "10px auto" }}
          />
        </FormControl>
        <FormControl required>
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            sx={{ margin: "10px auto" }}
          />
        </FormControl>
      </FormGroup>
      <Button type="submit" variant="contained" sx={{ margin: "10px auto" }}>
        Login
      </Button>
    </Box>
  );
}

export default Login;
