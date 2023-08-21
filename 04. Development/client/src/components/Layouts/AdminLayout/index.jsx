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
      }}
    >
      <MySidebar />
      <Box sx={{ width: "100%", height: "100%", backgroundColor: "#f9f9f9" }}>
        <Topbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminLayout;
