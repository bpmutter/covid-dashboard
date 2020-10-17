import { Paper } from "@material-ui/core";
import React from "react";

export default function ChartTemplate({ children }) {
  return (
    <Paper p={2} margin={2}>
      {children}
    </Paper>
  );
}
