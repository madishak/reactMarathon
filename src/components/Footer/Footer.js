import * as React from "react";
import { makeStyles } from "@mui/styles";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },

  text: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    fontSize: "16px",
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.text} component="div">
            Dev: Madina Karachai, 2022
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
