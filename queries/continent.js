import { gql } from "@apollo/client";

export const getContinentData = gql`
  query {
    continents {
      title
      slug
      countries {
        title
        slug
        featuredImage {
          hash
          url
        }
        thumbnail {
          hash
          url
        }
      }
    }
  }
`;

export const getCountryData = gql`
  query {
    countries {
      title
      slug
      featuredImage {
        hash
        url
      }
      ISO
      thumbnail {
        hash
        url
      }
      best_months {
        title
        slug
      }
      aboutCountry
      QnA
      regions {
        title
        slug
        featuredImage {
          hash
          url
        }
        thumbnail {
          hash
          url
        }
        cities {
          title
          slug
          thumbnail {
            hash
            url
          }
          featuredImage {
            hash
            url
          }
        }
      }
        weather{
      month
      monthCondition
      airTemperature
      waterTemperature
      chanceRainfall
      hoursSunny
    }
    }
  }
`;
