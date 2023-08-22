import { Outlet } from "react-router-dom";
import MySidebar from "../../MySidebar";

import { Box } from "@mui/material";
import Topbar from "../../Topbar";

const AdminLayout = () => {
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
