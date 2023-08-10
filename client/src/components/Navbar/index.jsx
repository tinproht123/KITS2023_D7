import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = ["Workouts", "Community"];

const Navbar = () => {
  return (
    <Box>
      <AppBar
        component="nav"
        position="relative"
        color="inherit"
        sx={{ boxShadow: "none", borderBottom: "1px solid red" }}
      >
        <Toolbar sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color="inherit"
            aria-label="open-drawer"
            edge="start"
            sx={{ display: { md: "block", lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="span">
            Fit Tracker
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {navItems.map((item, idx) => (
              <Typography key={idx}>{item}</Typography>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
