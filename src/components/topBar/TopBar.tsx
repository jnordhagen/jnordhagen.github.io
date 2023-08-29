import * as React from "react";
import { AppBar, Link, Stack, Toolbar, Typography } from "@mui/material";

const TopBar = () => {
  return (
    <AppBar component="nav">
      <Toolbar>
        <Stack direction="row" sx={{ width: "100%", justifyContent: "space-between"}}>
          <Link href="/" underline="none" color="white">
            <Typography variant="h6" component="div">
              Jakob Nordhagen
            </Typography>
          </Link>
          <Link href="contact" underline="none" color="white">
            <Typography variant="h6" component="div">
              Contact
            </Typography>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
