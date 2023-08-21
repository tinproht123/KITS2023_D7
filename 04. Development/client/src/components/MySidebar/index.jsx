/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography size={14} m={0}>
        <Link to={to}>{title}</Link>
      </Typography>
    </MenuItem>
  );
};

const MySidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState(false);
  return (
    <Sidebar
      collapsed={isCollapsed}
      menuItemStyles={{
        button: {
          [`&.active`]: {
            color: "#6870fa",
          },
        },
      }}
      // onClick={() => setIsCollapsed(false)}
    >
      <Box
        border="1px solid red"
        height="100vh"
        display="flex"
        flexDirection="column"
        p={1}
      >
        <Box
          mb={"24px"}
          mt={"16px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems="center"
        >
          {!isCollapsed && <Typography flex={1}>ADMINIS</Typography>}
          <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
            <FontAwesomeIcon icon="fa-solid fa-bars" size="xs" />
          </IconButton>
        </Box>
        <Box
          sx={{
            flex: 1,
            marginBottom: "32px",
            "& p": { fontSize: 16 },
          }}
        >
          <Box sx={{ p: "0 20px", mb: "8px" }}>
            <Typography fontWeight={600}>Data</Typography>
          </Box>
          <Menu>
            <MenuItem
              component={<Link to="/admin/users" />}
              aria-label="Users"
              icon={<FontAwesomeIcon icon="fa-solid fa-user-group" />}
            >
              <Typography>Users</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </Sidebar>
  );
};

export default MySidebar;
