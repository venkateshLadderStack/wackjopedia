import { gql } from "@apollo/client";

export const getHomePageData = gql`
  query {
    home {
      banner {
        hashtag
        point_1
        point_2
        btn_text
        btn_link
        image {
          hash
          url
        }
      }
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
  }
`;
