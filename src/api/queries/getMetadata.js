import { gql } from "@apollo/client";

const getMetadata = gql`
  query {
    metadatum {
      _id
      countries
      states
      states_us
      counties
      iso3s
      uids
      first_date
      last_date
    }
  }
`;

export default getMetadata;
