import React from "react";
import { Paper, makeStyles, Typography, Box } from "@material-ui/core";

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
    paddingBottom: theme.spacing(1),
  },
}));

export default function ChartTemplate({ children, title, subtitle }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Box pb={3}>
        <Typography component="h3" variant="h5" className={classes.title}>
          {title}
        </Typography>
        <Typography color="textSecondary">{subtitle}</Typography>
      </Box>
      {children}
    </Paper>
  );
}
