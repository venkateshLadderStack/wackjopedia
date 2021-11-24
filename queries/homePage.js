import { gql } from "@apollo/client";

export const getHomePageData = gql`
  query {
    home {
      banner_image {
        alternativeText
        hash
        url
      }
      featured_holiday {
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
  }
`;
