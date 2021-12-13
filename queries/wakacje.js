import { gql } from "@apollo/client";

export const getWakacjeData = gql`
  {
    wakacjis {
      title
      slug
      daysCount
      discountPrice
      departureDate
      thumbnail {
        hash
        url
      }
      featuredImage {
        hash
        url
      }
      numOfStars
      actualPrice
      content
      longitude
      latitude
      tourOperator
      offerRating
      opinionCount
      offer500plus
      offerCategory
      city {
        title
        slug
      }
      region {
        title
        slug
      }
      country {
        title
        slug
      }
      placeId
      arrivalKind
      type
      boardBasis
      recoPercentage
    }
  }
`;

export const getWakacjePage = gql`
  {
    wakacje {
      content
      QnA
    }
  }
`;
