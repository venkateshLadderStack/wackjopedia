import { gql } from "@apollo/client";

export const getContinentData = gql`
  query {
    continents {
      title
      slug
    }
  }
`;

export const getCountryData = gql`
  query {
    countries {
      title
      slug
      image {
        hash
        url
      }
      ISO
    }
  }
`;
