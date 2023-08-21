import { Box } from "@mui/material";
import Navbar from "../../Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Footer.jsx";

const MainLayout = () => {
  return (
    <>
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
          {/* <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth">
              <Route path="signup" element={<SignUp />} />
              <Route path="login" element={<Login />} />
              <Route path="forgot_password" element={<ForgotPassword />} />
              <Route path="challenges" element={<Challenges />} />
              <Route path="people/friends" element={<Friends />} />
            </Route>
            <Route path="*" element={<Page_404 />} />
          </Routes> */}
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default MainLayout;
