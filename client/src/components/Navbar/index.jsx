import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import StyledButton from "../StyledButton";
import { NavLink } from "react-router-dom";
import { grey } from "@mui/material/colors";
import { useEffect, useLayoutEffect, useRef } from "react";

const navItems = [
  {
    to: "/workouts",
    text: "Workouts",
    subs: ["Dashboard"],
  },
  {
    to: "/community",
    text: "Community",
    subs: ["Activity Feed", "Challenges"],
  },
];

const Navbar = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <AppBar
        component="nav"
        position="relative"
        color="inherit"
        sx={{
          boxShadow: "none",
          borderBottom: "1px solid red",
          maxWidth: "1440px",
          mx: "auto",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open-drawer"
            edge="start"
            sx={{ display: { sm: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="span">
            Fit Tracker
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          >
            {navItems.map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  mr: 1,
                  height: "100%",
                  px: 2.4,
                  fontSize: "18px",
                  fontWeight: "500",
                  "&:hover .dropdown-subs": { display: "block" },
                  alignSelf: "stretch",
                }}
              >
                <Typography
                  sx={{
                    textDecoration: "none",
                    "&:hover": {
                      fontWeight: "",
                    },
                  }}
                >
                  <NavLink to={item.to}>{item.text}</NavLink>
                </Typography>
                <Box
                  className="dropdown-subs"
                  sx={{
                    display: "none",
                    position: "absolute",
                    backgroundColor: "#fff",
                    minWidth: "160px",
                    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.2)",
                    p: "12px 16px",
                    zIndex: 1,
                    borderRadius: "2px",
                  }}
                >
                  {item.subs.map((sub, index) => (
                    <NavLink
                      to="/"
                      key={index}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        fontSize: "16px",
                        "&:hover": {
                          fontWeight: 600,
                        },
                      }}
                    >
                      {sub}
                    </NavLink>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              sx={{
                color: "#000",
                fontWeight: 700,
                fontSize: "18px",
                mr: "10px",
              }}
            >
              LOG IN
            </Button>
            <StyledButton>SIGN UP</StyledButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
