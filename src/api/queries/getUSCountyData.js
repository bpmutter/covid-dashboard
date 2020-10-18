import { gql } from "@apollo/client";

const getUSCounty = gql`
  query {
    global_and_us(
      query: { country: "US", date: "2020-09-22T00:00:00Z" }
      sortBy: CONFIRMED_DESC
      limit: 10
    ) {
      confirmed
      deaths
      state
      county
    }
  }
`;

export default getUSCounty;
