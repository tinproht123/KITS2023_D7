import { CssBaseline, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Navbar from "./components/Navbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDown,
  faBars,
  faPersonRunning,
  faRoad,
  faUserGroup,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import Footer from "./components/Footer.jsx";
import SignUp from "./pages/SignUp";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Page_404 from "./pages/Page_404";
import Admin from "./pages/admin";
import Challenges from "./pages/Challenges";
import Friends from "./pages/Friends";

library.add(
  faPersonRunning,
  faRoad,
  faUserGroup,
  faInstagram,
  faFacebookF,
  faXTwitter,
  faYoutube,
  faX,
  faBars,
  faAngleDown,
  faEye,
  faEyeSlash
);

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        "Saira Condensed",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "sans-serif",
      ].join(","),
      fontSize: 16,
      color: "red",
      fontWeight: 400,
      h6: {
        fontWeight: 800,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/admin" element={<Admin />} />
          </Routes>
          <Navbar />
          <Box
            sx={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: "1440px",
                mx: "auto",
                flex: "1 1 auto",
              }}
            >
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/auth">
                  <Route path="signup" element={<SignUp />} />
                  <Route path="login" element={<Login />} />
                  <Route path="forgot_password" element={<ForgotPassword />} />
                  <Route path="challenges" element={<Challenges />} />
                  <Route path="people/friends" element={<Friends />} />
                </Route>
                <Route path="*" element={<Page_404 />} />
              </Routes>
            </Box>
            <Footer />
          </Box>
        </BrowserRouter>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
