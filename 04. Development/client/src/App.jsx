import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDown,
  faAward,
  faBars,
  faDumbbell,
  faGear,
  faHouse,
  faListCheck,
  faMagnifyingGlass,
  faMars,
  faPencil,
  faPersonBiking,
  faPersonHiking,
  faPersonRunning,
  faPersonSwimming,
  faPersonWalking,
  faRoad,
  faShieldHalved,
  faTrophy,
  faUser,
  faUserGroup,
  faVenus,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import SignUp from "./pages/SignUp";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Page_404 from "./pages/Page_404";
import Challenges from "./pages/Challenges";
import Friends from "./pages/Friends";
import MainLayout from "./components/Layouts/MainLayout";
import AdminLayout from "./components/Layouts/AdminLayout";
import Dashboard from "./pages/admin/General/Dashboard";
import Activities from "./pages/admin/Data/Activities";
import CommunityPosts from "./pages/admin/Data/CommunityPosts";
import Users from "./pages/admin/Data/Users";
import Achivements from "./pages/admin/Data/Achivements";
import ActivityForm from "./pages/admin/Form/ActivityForm";
import AchivementForm from "./pages/admin/Form/AchivementForm";

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
  faEyeSlash,
  faHouse,
  faDumbbell,
  faPencil,
  faAward,
  faMagnifyingGlass,
  faGear,
  faListCheck,
  faTrophy,
  faVenus,
  faMars,
  faShieldHalved,
  faUser,
  faPersonBiking,
  faPersonHiking,
  faPersonWalking,
  faPersonSwimming
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
            {/* ADMIN CONTROL PANEL */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="users" element={<Users />} />
              <Route path="activities" element={<Activities />} />
              <Route path="community-posts" element={<CommunityPosts />} />
              <Route path="challenges" element={<Challenges />} />
              <Route path="achivements" element={<Achivements />} />
              <Route path="activity-form" element={<ActivityForm />} />
              <Route path="achivement-form" element={<AchivementForm />} />
            </Route>
            {/* MAIN PAGE FOR USER */}
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/auth">
                <Route path="signup" element={<SignUp />} />
                <Route path="login" element={<Login />} />
                <Route path="forgot_password" element={<ForgotPassword />} />
              </Route>
              <Route path="challenges" element={<Challenges />} />
              <Route path="people/friends" element={<Friends />} />
              <Route path="*" element={<Page_404 />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
