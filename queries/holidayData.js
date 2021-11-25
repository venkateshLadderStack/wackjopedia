import { gql } from "@apollo/client";

export const getHolidayData = gql`
  query {
    hotels {
      title
      actual_price
      title
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
      thumbnail {
        hash
        url
      }
      featured_image {
        hash
        url
      }
      featured_showcase_image {
        hash
        url
      }
      slug
      holiday_tags {
        tag_name
        slug
      }
      holiday_months {
        tag_name
        slug
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
