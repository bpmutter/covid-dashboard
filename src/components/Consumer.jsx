import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Box, Typography } from "@material-ui/core";

const METADATA = gql`
  query {
    countries_summarys(
      query: { country: "France", date_gte: "2020-09-16T00:00:00Z" }
      sortBy: DATE_DESC
    ) {
      confirmed
      date
      deaths
      recovered
    }
  }
`;

export default function Consumer() {
  const data = useQuery(METADATA);

  console.log("data is...", data);

  return <div>derp</div>;
}
