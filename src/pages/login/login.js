import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { InputAdornment, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import validation from "../../utils/validator";
import ValidatePassword from "../../utils/alfanumerikValidation";
import Validation from "../../utils/validator";

const theme = createTheme();

export default function SignIn() {
  const [values, setValues] = useState({
    name: "",
    password: "",
    showPassword: false,
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const handlePassVisibilty = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValidPassword = ValidatePassword(values.password);
    const isValidName = Validation(values.name);

    if (isValidPassword !== true || isValidName !== true) {
      return null;
    } else {
      navigate("/public/v2/users");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            LOGIN
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Name"
              autoFocus
              onChange={handleChange}
              value={values.name}
              name="name"
            />
            {errors.name && (
              <Typography variant="body2" sx={{ color: "error.main" }}>
                {errors.name}
              </Typography>
            )}
            <TextField
              type={values.showPassword ? "text" : "password"}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              id="password"
              onChange={handleChange}
              value={values.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handlePassVisibilty}
                      aria-label="toggle password"
                      edge="end"
                    >
                      {values.showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}

            />
            {errors.password && (
              <p style={{ color: "red", textAlign: "left" }}>
                {errors.password}
              </p>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={!values.name || !values.password}
              sx={{ mt: 3, mb: 2 }}
            >
              LOGIN
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
