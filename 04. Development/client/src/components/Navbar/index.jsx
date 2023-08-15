import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import StyledButton from "../StyledButton";
import { NavLink } from "react-router-dom";

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
            }}
          >
            {navItems.map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  mr: 1,
                  px: 2.4,
                  fontSize: "18px",
                  fontWeight: "500",
                  "&:hover .dropdown-subs": { display: "block" },
                  alignSelf: "stretch",
                  position: "relative",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "500",
                    "& a": { textDecoration: "none" },
                    "&:hover": {
                      fontWeight: "600",
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
            <StyledButton type="light">LOG IN</StyledButton>
            <StyledButton type="dark">SIGN UP</StyledButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
