import { Outlet, useNavigate } from "react-router-dom";
import MySidebar from "../../MySidebar";

import { Box } from "@mui/material";
import Topbar from "../../Topbar";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const AdminLayout = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.role !== "ROLE_ADMIN") navigate("/dashboard");
  });

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        minHeight: "100vh",
      }}
    >
      <MySidebar />
      <Box
        sx={{
          width: "100%",
          minHeight: "100%",
          border: "2px solid blue",
          backgroundColor: "#f1f1f1",
        }}
      >
        <Topbar />
        <Box p={1}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;
