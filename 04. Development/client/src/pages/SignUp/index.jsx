import * as yup from "yup";
import { useFormik } from "formik";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const validationSchema = yup.object({
  firstName: yup
    .string("Enter your first name")
    .required("First name is required"),
  lastName: yup
    .string("Enter your last name")
    .required("Last name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your first name")
    .matches(
      "^[a-zA-Z0-9]{6,}$",
      "Password must has length of 6 and has at least 1 number"
    )
    .required("Password is required"),
  birthdate: yup.date().required("Birthdate is required").nonNullable(),
  gender: yup.string().required("Geneder is required"),
  country: yup.string(),
});

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      birthdate: dayjs(Date.now()),
      gender: "",
      country: "",
    },
    validationSchema,
    onSubmit: (val) => {
      console.log(JSON.stringify(val));
    },
  });
  return (
    <Box
      sx={{
        maxWidth: "500px",
        width: "95%",
        marginInline: "auto",
      }}
      mt={5}
      mb={20}
    >
      <Typography variant="h4" fontWeight={700} textAlign={"center"} my={5}>
        Welcome to FitTracker
      </Typography>
      <Typography mb={3} textAlign={"center"} fontSize={16}>
        Already a member?{" "}
        <Link to="/auth/login" style={{ color: "#000", fontWeight: 500 }}>
          Log In
        </Link>
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="firstName"
          label="First Name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          fullWidth
          id="lastName"
          label="Last Name"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          fullWidth
          label="Email"
          id="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{ marginBottom: "20px" }}
        />
        <FormControl fullWidth variant="outlined" sx={{ marginBottom: "20px" }}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? "text" : "password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helpertext={formik.touched.password && formik.errors.password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? (
                    <FontAwesomeIcon
                      icon="fa-regular fa-eye-slash"
                      size="2xs"
                    />
                  ) : (
                    <FontAwesomeIcon icon="fa-regular fa-eye" size="2xs" />
                  )}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <DatePicker
          disableFuture
          label="Birthday"
          format="YYYY/MM/DD"
          onChange={formik.handleChange}
          sx={{ width: "100%" }}
          value={formik.values.birthdate}
          slotProps={{
            textField: {
              variant: "outlined",
              error:
                formik.touched.birthdate && Boolean(formik.errors.birthdate),
              helperText: formik.touched.birthdate && formik.errors.birthdate,
            },
          }}
        />
      </form>
    </Box>
  );
};

export default SignUp;
