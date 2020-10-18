import React from "react";
import { Paper, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 400,
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    display: "inline-block",
    [theme.breakpoints.down("sm")]: {
      minWidth: "none",
      maxWidth: "none",
      width: "90%",
    },
  },
  title: {
    paddingBottom: theme.spacing(2),
  },
}));

export default function ChartTemplate({ children, title }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography component="h3" variant="h5" className={classes.title}>
        {title}
      </Typography>
      {children}
    </Paper>
  );
}
