import React from "react";
import { useQuery } from "@apollo/client";
import { Box, Typography, CircularProgress } from "@material-ui/core";
import Error from "components/Error";
import { getUSCountyData } from "api/queries";
import UsCountyData from "./charts/UsCountyData";

export default function Consumer() {
  return (
    <div>
      <UsCountyData />
    </div>
  );
}
