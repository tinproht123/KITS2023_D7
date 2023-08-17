import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import StyledButton from "../StyledButton";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { grey } from "@mui/material/colors";

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
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* DRAWER  */}
      <Drawer
        sx={{ display: { md: "none" } }}
        anchor={"left"}
        open={open}
        mt="60px"
      >
        <Box sx={{ width: "100%" }}>
          <Box height="60px"></Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link>
              <StyledButton mode="light" to="/auth/login">
                LOG IN
              </StyledButton>
            </Link>
            <Link>
              <StyledButton mode="dark" to="/auth/signup">
                SIGN UP
              </StyledButton>
            </Link>
          </Box>
          {navItems.map((item, idx) => (
            <Accordion
              key={idx}
              sx={{
                "&:hover": { backgroundColor: grey[200] },
                margin: "0 !important",
              }}
            >
              <AccordionSummary
                expandIcon={<FontAwesomeIcon icon="fa-solid fa-angle-down" />}
              >
                <Typography
                  sx={{
                    "&:hover": { backgroundColor: grey[200] },
                  }}
                  fontSize={16}
                >
                  {item.text}
                </Typography>
              </AccordionSummary>
              <AccordionDetails my={0} sx={{ padding: "0 !important" }}>
                {item.subs.map((sub, index) => (
                  <Typography
                    key={index}
                    p={2}
                    fontSize={16}
                    sx={{
                      backgroundColor: grey[200],
                      "&:hover": { backgroundColor: grey[300] },
                    }}
                  >
                    {sub}
                  </Typography>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Drawer>
      <Box sx={{ width: "100%" }}>
        <AppBar
          component="nav"
          position="relative"
          color="inherit"
          sx={{
            boxShadow: "none",
            width: "100%",
            maxWidth: { xs: "1920px", md: "1440px" },
            mx: "auto",
            zIndex: { xs: 9999, md: 10 },
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
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? (
                <FontAwesomeIcon icon="fa-solid fa-x" />
              ) : (
                <FontAwesomeIcon icon="fa-solid fa-bars" />
              )}
            </IconButton>
            <Box
              sx={{
                flex: { xs: "1", md: 0 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <img src="/images/brand.svg" alt="logo" width="180px" />
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
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
                      zIndex: 99999,
                      borderRadius: "2px",
                      "& > a": {
                        textDecoration: "none",
                        display: "block",
                        color: "inherit",
                        fontSize: "16px",
                        p: "12px 16px",
                        "&:hover": {
                          fontWeight: 600,
                        },
                      },
                    }}
                  >
                    {item.subs.map((sub, index) => (
                      <NavLink to="/" key={index}>
                        {sub}
                      </NavLink>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
            <Box
              sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
            >
              <Link to="/auth/login">
                <StyledButton mode="light">LOG IN</StyledButton>
              </Link>
              <Link to="/auth/signup">
                <StyledButton mode="dark">SIGN UP</StyledButton>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
