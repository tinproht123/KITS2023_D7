import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import StyledButton from "../Button";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  {
    to: "/workouts",
    text: "Workouts",
  },
  {
    to: "/community",
    text: "Community",
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
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {navItems.map((item, idx) => (
              <Typography
                key={idx}
                sx={{
                  mr: 1,
                  px: 2.4,
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                <NavLink
                  to={item.to}
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  {item.text}
                </NavLink>
              </Typography>
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
