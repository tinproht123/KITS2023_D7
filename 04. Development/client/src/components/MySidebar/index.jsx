/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const MySidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Sidebar
      collapsed={isCollapsed}
      menuItemStyles={{
        button: {
          [`&.active`]: {
            color: "#d2042d",
          },
        },
      }}
    >
      <Box
        border="1px solid red"
        height="100vh"
        display="flex"
        flexDirection="column"
      >
        <Box
          mb={"24px"}
          mt={"16px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems="center"
        >
          {!isCollapsed && (
            <Typography pl={1} flex={1}>
              ADMINIS
            </Typography>
          )}
          <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
            <FontAwesomeIcon icon="fa-solid fa-bars" size="xs" />
          </IconButton>
        </Box>
        <Box
          sx={{
            flex: 1,
            marginBottom: "32px",
            "& p": { fontSize: 16 },
            "& a": { color: "#d2d42d" },
          }}
        >
          <Box sx={{ p: "0 20px", mb: "8px" }}>
            <Typography fontWeight={600}>General</Typography>
          </Box>
          <Menu
            menuItemStyles={{
              button: {
                [`&.active`]: {
                  backgroundColor: "#000",
                  color: "#b6c8d9",
                },
              },
            }}
          >
            <MenuItem
              component={<Link to="/admin/dashboard" />}
              icon={<FontAwesomeIcon icon="fa-solid fa-house" size="xs" />}
            >
              <Typography>Dashboard</Typography>
            </MenuItem>
          </Menu>
          <Box sx={{ p: "0 20px", mb: "8px" }}>
            <Typography fontWeight={600}>Data</Typography>
          </Box>
          <Menu>
            <MenuItem
              component={<Link to="/admin/users" />}
              icon={<FontAwesomeIcon icon="fa-solid fa-user-group" size="xs" />}
            >
              <Typography>Users</Typography>
            </MenuItem>
            <MenuItem
              component={<Link to="/admin/activities" />}
              icon={<FontAwesomeIcon icon="fa-solid fa-dumbbell" size="xs" />}
            >
              <Typography>Activities</Typography>
            </MenuItem>
            <MenuItem
              component={<Link to="/admin/community-posts" />}
              icon={<FontAwesomeIcon icon="fa-solid fa-pencil" size="xs" />}
            >
              <Typography>Community Posts</Typography>
            </MenuItem>
            <MenuItem
              component={<Link to="/admin/challenges" />}
              icon={
                <FontAwesomeIcon icon="fa-solid fa-person-running" size="xs" />
              }
            >
              <Typography>Challenges</Typography>
            </MenuItem>
            <MenuItem
              component={<Link to="/admin/Achivements" />}
              icon={<FontAwesomeIcon icon="fa-solid fa-award" size="xs" />}
            >
              <Typography>Achivements</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </Sidebar>
  );
};

export default MySidebar;
