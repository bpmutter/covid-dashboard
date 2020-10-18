import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListIcon from "@material-ui/icons/List";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(8),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <ListIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            COVID-19 Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
