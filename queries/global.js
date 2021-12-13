import { gql } from "@apollo/client";

export const getGlobalData = gql`
  {
    global {
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
      featuredHoliday {
        title
        slug
        numOfStars
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

export const getMonthData = gql`
  {
    months {
      title
      slug
    }
  }
`;
