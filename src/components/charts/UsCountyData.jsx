import React from "react";
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar, Label } from "recharts";
import { useQuery } from "@apollo/client";
import { getUSCountyData } from "api/queries";
import ChartTemplate from "components/ChartTemplate";
import Error from "components/Error";
import { Box, CircularProgress } from "@material-ui/core";

const [height, width] = [500, 1000];

export default function UsCountyData() {
  const { data, loading, error } = useQuery(getUSCountyData);
  if (error) return <Error />;

  return (
    <ChartTemplate title="US County Data">
      {loading ? (
        <Box width={width} height={height}>
          <CircularProgress />
        </Box>
      ) : (
        <Chart data={data.global_and_us} />
      )}
    </ChartTemplate>
  );
}

function Chart({ data }) {
  return (
    <BarChart
      width={width}
      height={height}
      data={data}
      margin={{ top: 15, right: 30, left: 20, bottom: 15 }}
    >
      <XAxis dataKey="county" height={80}>
        <Label position="insideBottom" offset={15} fill="white" fontSize="150%">
          Counties
        </Label>
      </XAxis>
      <YAxis width={80}>
        <Label
          position="insideLeft"
          angle={-90}
          offset={-5}
          fill="white"
          fontSize="150%"
        >
          # People
        </Label>
      </YAxis>
      <Tooltip />
      <Legend />
      <Bar dataKey="confirmed" fill="#8884d8" />
      <Bar dataKey="deaths" fill="#82ca9d" />
    </BarChart>
  );
}
