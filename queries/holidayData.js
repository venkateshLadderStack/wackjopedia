import { gql } from "@apollo/client";

export const getHolidayData = gql`
  query {
    hotels {
      title
      actual_price
      city
      content
      country
      discount_price
      facilities
      hotel_info
      hotel_max_available_days
      visit_holiday
      slug
      rating
      location
      images {
        alternativeText
        hash
        url
      }
    }
  }
`;

export const getHolidayTags = gql`
  query {
    tags {
      slug
      tag_name
      id
    }
  }
`;
